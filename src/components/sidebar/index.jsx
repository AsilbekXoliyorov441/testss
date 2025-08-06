import React from 'react'
import { useSelector } from 'react-redux'

const Sidebar = () => {
  const change = useSelector((state) => state.sidebar.changeSidebar)
  return (
    <aside
      className={`bg-[gray]  p-[30px] fixed top-0 z-10 h-[100vh] ${change ? "w-[80px]" : "w-[300px]"}`}
    >
      <ul>
        <li>
          <a href="/statistics" className="flex items-center gap-[5px]">
            {" "}
            <img
              width={40}
              src="https://static.vecteezy.com/system/resources/previews/000/421/582/original/vector-statistics-icon.jpg"
              alt=""
            />{" "}
            {change ? "" : "Statistics"}
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar