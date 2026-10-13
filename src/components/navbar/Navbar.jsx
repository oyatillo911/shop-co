import { FiShoppingCart, FiX } from "react-icons/fi";
import { IoSearchOutline } from "react-icons/io5";
import { FaRegCircleUser } from "react-icons/fa6";
import { NavLink } from "react-router-dom";



function Navbar() {
  return (
    <>
  <nav>
  <div className="nav_top  bg-[#000000] ">
 <div className="container flex justify-end py-[10px] w-[1200px] mx-auto">
 <div className="info w-[70%] flex  justify-between items-center">
    <span  className='font-normal text-[14px] text-[#FFFFFF]' >Sign up and get 20% off to your first order. <u className='font-medium' >Sign Up Now</u></span>
    <div className="exit w-[20px] h-[20px] flex items-center justify-center ">
      <span className='text-white text-[18px]'><FiX />
</span>
    </div>
  </div>
 </div>
  </div>
 <div className="nav_bottom">
  <div className="container w-[1200px] mx-auto py-[25px] flex items-center justify-between ">
    <div className="nav_logo">
      <img src="/imgs/nav_logo.svg" alt="" />
    </div>
    <ul className="flex items-center gap-[25px]" >
      <li className="text-[16px] font-normal "><NavLink  className={({ isActive }) => isActive ? " border-b-[3px] pb-[10px] border-b-black " : "text-black"}  to={"/"} >Home</NavLink></li>
      <li className="text-[16px] font-normal "><NavLink className={({ isActive }) => isActive ? " border-b-[3px] pb-[10px] border-b-black " : "text-black"} to={"/detail"} >Products</NavLink></li>
      <li className="text-[16px] font-normal "><a href="">New Arrivals</a></li>
      <li className="text-[16px] font-normal "><a href="">Brands</a></li>
    </ul>
    <div className="nav_input w-[40%] relative ">
<input type="search" placeholder="Search for products..." className="w-full bg-[#F0F0F0] h-[48px] rounded-[62px] pl-[50px] pr-[15px] outline-none  placeholder:text-[#00000066] text-[16px] font-normal " />
<div className="icon absolute top-[15px] left-[15px]">
<IoSearchOutline className="text-[20px]  text-[#00000066] " />
</div>
    </div>
    <div className="nav_icons flex items-center gap-[15px]">
    <div className="icon cursor-pointer ">
    <FiShoppingCart className="text-[20px]" />
    </div>
<div className="icon ">
<FaRegCircleUser className="text-[20px]  cursor-pointer " />

</div>
    </div>
  </div>
 </div>

  </nav>
    </>
  )
}

export default Navbar