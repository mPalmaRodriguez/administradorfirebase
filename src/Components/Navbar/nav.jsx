import logo from "../../assets/top.png";
import { Link } from 'react-router-dom';
import { useState } from "react";

export default function Navbar({ data }) {

  const [isSideMenuOpen, setisSideMenuOpen] = useState(false)
  const showSideMenu = () => {
    (isSideMenuOpen) ? setisSideMenuOpen(false) : setisSideMenuOpen(true)
  }



  return (
    <nav className="w-full h-auto bg-indigo-900 text-slate-50 p-2 flex justify-between  ">
      <img src={logo} className="w-24"></img>
      <div className="hidden sm:flex md:flex justify-center" >
        {data.map((data) =>
          <Link className="text-slate-50	m-auto mx-3.5 hover:underline " to={data.url}>{data.name}</Link>
        )}
      </div>
      <div className="hidden md:flex sm:flex justify-evenly m-auto mx-3.5">
        <h1>salir</h1>
      </div>

      <button onClick={() => { showSideMenu() }} className="lg:hidden menu-button">
        Menu
      </button>
      {(isSideMenuOpen) ? Hamburgesas({ data }) : ''}

    </nav>
  )
}

function Hamburgesas({ data }) {
  return (

    <div className="fixed h-screen w-1/2 sm:w-1/4 lg:hidden bg-indigo-900 ml-72 mt-10	">
      <ul className="menu-list flex flex-col text-lg text-center	hover:underline font-bold">
        <li className="menu-list-item py-2 hover:bg-white hover:text-blue-700"></li>
        {data.map((data) =>
          <Link className="text-slate-50	m-auto mx-3.5 hover:underline " to={data.url}>{data.name}</Link>
        )}

      </ul>
    </div>
  )
}