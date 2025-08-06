import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { decrease, increase } from "../../components/store/counterSlice";

const StatisticsPage = () => {
  const [categories, setCategories] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [selectCategory, setSelectCategory] = useState(null);

  const [category, setCategory] = useState(selectCategory?.name ?? "");
  const [categoryId, setCategoryId] = useState(null);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();


  useEffect(() => {
    if (selectCategory?.name) {
      setCategory(selectCategory.name);
    }
  }, [selectCategory]);


  console.log(category);

  const payload = {
    name: category,
  };



  const getCategories = async () => {
    try {
      const res = await axios.get("https://testpsyedu.limsa.uz/subcategories");
      setCategories(res?.data?.data);
    } catch (err) {
      console.error(err);
    }
  };

  const addCategory = async (e) => {
    e?.preventDefault();
    try {

      {
        selectCategory
          ? await axios.patch(
              `https://testpsyedu.limsa.uz/subcategories/${categoryId}`,
              payload
            )
          : await axios.post(
              "https://testpsyedu.limsa.uz/subcategories",
              payload
            );
      }
      getCategories();
      setOpenModal(false);
      setSelectCategory(null);
      setCategoryId(null);
      setCategory("");
    } catch (err) {
      console.error(err);
    }
  };

  const deleteCategory =  async (id) => {
    console.log(id);
    
    try{
      await axios.delete(`https://testpsyedu.limsa.uz/subcategories/${id}`);
      getCategories();
    }catch(err){
      console.log(err);
    }
  }

  useEffect(() => {
    getCategories();
  }, []);

  console.log(categories);

  const dispatch = useDispatch()
  const store = useSelector((state) => state.counter.count);


  return (
    <section id="category" className="p-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold mb-4">Statistika</h2>
        <button
          onClick={() => setOpenModal(true)}
          className="px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Kategoriya qo'shish
        </button>
      </div>
      <div className="overflow-x-auto shadow-md rounded-lg border border-gray-200">
        <table className="min-w-full text-sm text-left text-gray-700">
          <thead className="bg-gray-100 text-xs uppercase text-gray-700">
            <tr>
              <th className="px-6 py-3 border-b">No</th>
              <th className="px-6 py-3 border-b">Kategoriyasi</th>
              <th className="px-6 py-3 border-b">Holatlar</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {categories?.map((category, i) => (
              <tr key={i} className="hover:bg-gray-50 transition">
                <td className="px-6 py-4 border-b">{i + 1}</td>
                <td className="px-6 py-4 border-b">{category?.name}</td>
                <td className="px-6 py-4 border-b space-x-2">
                  <button
                    onClick={() => {
                      (setOpenModal(true),
                        setCategoryId(category?.id),
                        setSelectCategory(category));
                    }}
                    className="px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteCategory(category?.id)}
                    className="px-4 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {openModal ? (
        <div
          onClick={() => {
            (setOpenModal(false), setCategoryId(null));
          }}
          className="flex fixed bg-gray-200/40 z-20 top-0 left-0 h-[100vh] w-[100%] flex-col items-center justify-center "
        >
          <form
            onSubmit={addCategory}
            onClick={(e) => e?.stopPropagation()}
            className="w-[500px] flex flex-col gap-[20px] p-[30px] bg-[gray]"
          >
            <h1>Kategoriya {categoryId ? "tahrirlash" : "qo'shish"}</h1>
            <input
              value={category}
              onChange={(e) => setCategory(e?.target?.value)}
              className="w-full h-[40px] rounded-[20px] bg-white"
              type="text"
              placeholder={`Kategoriyani ${categoryId ? "tahrirlash" : "qo'shgin"}`}
            />
            <button
              type="submit"
              className="w-full bg-white text-[blue] h-[40px] rounded-[20px]"
            >
              Kategoriya {categoryId ? "tahrirlash" : "qo'shish"}
            </button>
          </form>
        </div>
      ) : (
        ""
      )}

      <div className="bg-[red] text-white w-[300px] p-[20px]">
        <h1>Product 1</h1>
        <div className="flex items-center">
          <button 
          onClick={() => dispatch(decrease())}
          
          className="w-[40px] h-[40px] text-[#000]  bg-[yellow]">-</button>
          <span>{store}</span>
          <button 
          onClick={() => dispatch(increase())}
          className="w-[40px] h-[40px] text-white bg-[green]">+</button>
        </div>
      </div>
    </section>
  );
};

export default StatisticsPage;
