import { Button } from "@mui/material";
import { FaFacebook, FaFacebookF, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";


function Footer() {
  return (
    <>
      <footer className="">
        <div className="footer_top  ">
          <div className="container max-w-[1200px] mx-auto bg-[#000000] py-[35px]  rounded-[20px] px-[60px] flex items-center justify-between relative ">
            <div className="info w-[50%]">
              <h1 className='text-[#FFFFFF] text-[40px] font-bold  ' >STAY UPTO DATE ABOUT OUR LATEST OFFERS</h1>
            </div>
            <div className="input w-[30%] flex items-start flex-col gap-[20px] ">
              <div className="footer_input relative w-full">
                <input type="email" placeholder='Enter your email address' className="w-[100%] h-[48px]  bg-[white] rounded-[62px] pl-[50px] outline-none text-black placeholder:text-[16px] font-normal text-[#00000066] " />
                <div className="icon absolute top-[15px] left-[15px] ">
                  <MdOutlineEmail className="text-[20px] text-[#00000066]" />
                </div>
              </div>
              <div className="footer_btn w-full ">
                <Button sx={{
                  background: "#FFFFFF",
                  width: "100%",
                  height: "48px",
                  color: "black",
                  borderRadius: "62px"
                }} variant="contained"><span className="text-[16px] font-medium capitalize ">Subscribe to Newsletter</span></Button>
              </div>
            </div>
          </div>
        </div>
        <div className="footer_bottom bg-[#F0F0F0]  mt-[-100px] ">
          <div className="container pt-[180px] w-[1200px] mx-auto">
            <div className="box flex items-start justify-between pb-[50px] ">
              <div className="cards w-[19%]">
                <div className="footer_logo">
                  <img src="/imgs/footer_logo.svg" alt="" />
                </div>
                <div className="info w-full py-[30px] ">
                  <span className=" text-[#00000099] font-normal text-[11.7px] text-justify w-full " >We have clothes that suits your style and which you’re proud to wear. From women to men.</span>
                </div>
                <div className="icons flex items-center gap-[12px]">
                  <div className="icon transition-all duration-500 ease-in-out  w-[30px] h-[30px] flex items-center justify-center rounded-[50%] bg-white border-[#00000033] border-[1px] hover:text-white hover:bg-black cursor-pointer ">
                    <FaTwitter className="text-[16px]" />
                  </div>
                  <div className="icon transition-all duration-500 ease-in-out  w-[30px] h-[30px] flex items-center justify-center rounded-[50%] bg-white border-[#00000033] border-[1px] hover:text-white hover:bg-black cursor-pointer ">
                    <FaFacebookF className="text-[16px]" />
                  </div>
                  <div className="icon transition-all duration-500 ease-in-out  w-[30px] h-[30px] flex items-center justify-center rounded-[50%] bg-white border-[#00000033] border-[1px] hover:text-white hover:bg-black cursor-pointer ">
                    <FaInstagram className="text-[16px]" />
                  </div>
                  <div className="icon transition-all duration-500 ease-in-out  w-[30px] h-[30px] flex items-center justify-center rounded-[50%] bg-white border-[#00000033] border-[1px] hover:text-white hover:bg-black cursor-pointer ">
                    <FaGithub className="text-[16px]" />
                  </div>
                </div>
              </div>
              <div className="cards">
                <h1 className="text-[16px] font-medium uppercase pb-[15px] " >Company</h1>
                <ul className="flex flex-col gap-[17px]">

                  <li className="text-[#00000099] text-[16px] font-normal " ><a href="">About</a></li>
                  <li className="text-[#00000099] text-[16px] font-normal " ><a href="">Features</a></li>
                  <li className="text-[#00000099] text-[16px] font-normal " ><a href="">Works</a></li>
                  <li className="text-[#00000099] text-[16px] font-normal " ><a href="">Career</a></li>
                </ul>
              </div>
              <div className="cards">
                <h1 className="text-[16px] font-medium uppercase pb-[15px] " >Help</h1>
                <ul className="flex flex-col gap-[17px]">
                  <li className="text-[#00000099] text-[16px] font-normal " ><a href="">Customer Support</a></li>
                  <li className="text-[#00000099] text-[16px] font-normal " ><a href="">Delivery Details</a></li>
                  <li className="text-[#00000099] text-[16px] font-normal " ><a href="">Terms & Conditions</a></li>
                  <li className="text-[#00000099] text-[16px] font-normal " ><a href="">Privacy Policy</a></li>
                </ul>
              </div>
              <div className="cards">
                <h1 className="text-[16px] font-medium uppercase pb-[15px] " >FAQ</h1>
                <ul className="flex flex-col gap-[17px]">
                  <li className="text-[#00000099] text-[16px] font-normal " ><a href="">Account</a></li>
                  <li className="text-[#00000099] text-[16px] font-normal " ><a href="">Manage Deliveries</a></li>
                  <li className="text-[#00000099] text-[16px] font-normal " ><a href="">Orders</a></li>
                  <li className="text-[#00000099] text-[16px] font-normal " ><a href="">Payments</a></li>
                </ul>
              </div>
              <div className="cards">
                <h1 className="text-[16px] font-medium uppercase pb-[15px] " >Resources</h1>
                <ul className="flex flex-col gap-[17px]">
                  <li className="text-[#00000099] text-[16px] font-normal " ><a href="">Free eBooks</a></li>
                  <li className="text-[#00000099] text-[16px] font-normal " ><a href="">Development Tutorial</a></li>
                  <li className="text-[#00000099] text-[16px] font-normal " ><a href="">How to - Blog</a></li>
                  <li className="text-[#00000099] text-[16px] font-normal " ><a href="">Youtube Playlist</a></li>
                </ul>
              </div>
            </div>
            <hr className="border-[1px] border-[#0000001A] border-solid" />
            <div className="carts pt-[20px] pb-[80px] flex items-center justify-between">
              <div className="info ">
                <span className="   md:text-[14px] md:text-[#00000099]  font-normal   " >Shop.co © 2000-2023, All Rights Reserved</span>
              </div>
              <div className="carts flex items-center">
                <div className="cart flex items-center justify-center ">
                  <img src="/imgs/carts.svg" alt="" />
                </div>
                <div className="cart flex items-center justify-center ">
                  <img src="/imgs/carts2.svg" alt="" />
                </div>
                <div className="cart flex items-center justify-center ">
                  <img src="/imgs/carts3.svg" alt="" />
                </div>
                <div className="cart flex items-center justify-center ">
                  <img src="/imgs/carts4.svg" alt="" />
                </div>
                <div className="cart flex items-center justify-center ">
                <img src="/imgs/carts5.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

    </>
  )
}

export default Footer
// ul>li*4>a{salom}