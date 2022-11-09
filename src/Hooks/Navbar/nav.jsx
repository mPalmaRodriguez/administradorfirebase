import logo from "../../assets/top.png";
import { Link } from 'react-router-dom';
import Button from "./buttons";

export default function Navbar({ data, open, setopen }) {



  return (


    <div className="shadow-md w-full  top-0 left-0">
      <div className="md:flex items-center justify-between bg-[#5fe8ff] md:px-10 py-2 px-7 drop-shadow-md">
        <Link to={"/"}>
        <img src={logo} className="w-20"></img>
        </Link>
        <div className="font-semibold text-lg cursor-pointer flex items-center">
          <Link to={"/"} >
            <div className=" text-[#393939] m-auto  text-lg mx-3.5 hover:underline  hover:text-indigo-900 ">
              Home
            </div>
          </Link>

          <div onClick={() => setopen(!open)} className='text-5xl absolute right-0 top-6 cursor-pointer md:hidden w-20'>
            <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
          </div>

          <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-[#5fe8ff] md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 z-auto' : 'top-[-490px]'}`}>
            {data.map((data) => (
              <li key={data.name} className="md:ml-8 text-lg md:my-0 my-7">
                <Link to={data.url} onClick={() => setopen(!open)} className="text-[#393939] m-auto mx-3.5 hover:underline hover:text-indigo-900 ">{data.name}</Link>

              </li>
            ))}
          </ul>

        </div>
      </div>
    </div>
  )
}

