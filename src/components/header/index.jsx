import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeSide } from '../store/changeSidebarSlice';
import { changeMode } from '../store/changeModeSlice';

const Header = () => {
  const store = useSelector((state) => state.counter.count);
  const change = useSelector((state) => state.sidebar.changeSidebar);
  const mode = useSelector((state) => state.darkMode.mode)
  const dispatch = useDispatch()
  return (
    <header className="fixed flex justify-between gap-[20px] top-0 w-[100%] p-[20px] pl-[320px] bg-[gray]">
      <button
        onClick={() => dispatch(changeSide())}
        className="bg-[red] w-[100px] h-[40px] text-white"
      >
        menuBar
      </button>
      <h1 className={`${change ? "bg-[green]" : "bg-[blue]"}`}>
        {" "}
        Header {change}
      </h1>

      <span>{store}</span>

      <button
        onClick={() => dispatch(changeMode())}
        className="bg-[blue] w-[100px] h-[40px] text-white"
      >
        {mode ? "kun" : " tun"} rejim
      </button>
    </header>
  );
}

export default Header