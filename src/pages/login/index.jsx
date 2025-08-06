import axios from "axios";
import React, { useState } from "react";

const LoginPage = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [course, setCourse] = useState("");


  const handleSubmit = async(e) => {
     e.preventDefault();
     try{
      await axios.post(
        "https://script.google.com/macros/s/AKfycbyXJXhOaZ5aXnGjGe419i8iJWdG1PlC5-INazDDyhKZ_QeSKHVK6THthbBPnBKE-4wP/exec" , {
          name:name,
          phone:phone,
          course:course
        }
      );
      alert("Malumot yuborildi");

     }catch{
      alert("xatolik chiqdi")
     }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={name}
        onChange={(e) => setName(e?.target?.value)}
        name="name"
        placeholder="Ismingiz"
        required
      />
      <input
        value={phone}
        onChange={(e) => setPhone(e?.target?.value)}
        name="phone"
        placeholder="Telefon"
        required
      />
      <input
        value={course}
        onChange={(e) => setCourse(e?.target?.value)}
        name="course"
        placeholder="Kurs nomi"
      />
      <button type="submit">Yuborish</button>
    </form>
  );
};

export default LoginPage;
