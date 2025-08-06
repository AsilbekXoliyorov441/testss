import React from 'react'
import Header from '../header'
import Sidebar from '../sidebar'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

const AdminLayout = () => {
  const change = useSelector((state) => state.sidebar.changeSidebar);
  const mode = useSelector((state) => state.darkMode.mode);
  return (
    <div>
      <Header/>
      <Sidebar/>
      <main className={`pt-[100px] ${change ? "pl-[100px]" : "pl-[320px]"} ${mode ? "bg-[#000] text-white" :"bg-gray-200" }`}>
        <Outlet/>
      </main>
    </div>
  )
}

export default AdminLayout