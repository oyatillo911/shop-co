import { Button } from '@mui/material'
import React from 'react'

function HomeOneSection() {
  return (
    <div>
        <section >
            <div className="container w-[1200px] mx-auto">
                <div className="info pt-[70px] pb-[50px]">
                    <h1 className='text-[#000000] text-[48px] font-bold text-center'>NEW ARRIVALS</h1>
                </div>
                <div className="box flex items-center justify-between ">
                    <div className="cards  w-[23.8%]  " >
                        <div className="logo w-full bg-[#F0EEED] rounded-[20px]">
                            <img className='w-full' src="/imgs/one_home.png" alt="" />
                        </div>
                        <div className="info pt-[15px]">
                            <h2 className='text-[#000000] text-[18px] capitalize font-bold '>t-shirt with tape details</h2>
                            <div className="rating w-[50.85%] py-[8px] ">
                                <img className='w-full' src="/imgs/rating.svg" alt="" />
                            </div>
                            <div className="price">
                                <span className='text-[#000000] text-[22px] font-bold ' >$120</span>
                            </div>
                        </div>
                    </div>
                    <div className="cards  w-[23.8%]  " >
                        <div className="logo w-full bg-[#F0EEED] rounded-[20px]">
                            <img className='w-full' src="/imgs/one_home2.png" alt="" />
                        </div>
                        <div className="info pt-[15px]">
                            <h2 className='text-[#000000] text-[18px] capitalize font-bold '>SKINNY FIT JEANS</h2>
                            <div className="rating w-[50.85%] py-[8px] ">
                                <img className='w-full' src="/imgs/rating.svg" alt="" />
                            </div>
                            <div className="price">
                                <span className='text-[#000000] text-[22px] font-bold ' >$240</span>
                            </div>
                        </div>
                    </div>
                    <div className="cards  w-[23.8%]  " >
                        <div className="logo w-full bg-[#F0EEED] rounded-[20px]">
                            <img className='w-full' src="/imgs/one_home3.png" alt="" />
                        </div>
                        <div className="info pt-[15px]">
                            <h2 className='text-[#000000] text-[18px] capitalize font-bold '>CHECKERED SHIRT</h2>
                            <div className="rating w-[50.85%] py-[8px] ">
                                <img className='w-full' src="/imgs/rating.svg" alt="" />
                            </div>
                            <div className="price">
                                <span className='text-[#000000] text-[22px] font-bold ' >$180</span>
                            </div>
                        </div>
                    </div>
                    <div className="cards  w-[23.8%]  " >
                        <div className="logo w-full bg-[#F0EEED] rounded-[20px]">
                            <img className='w-full' src="/imgs/one_home4.png" alt="" />
                        </div>
                        <div className="info pt-[15px]">
                            <h2 className='text-[#000000] text-[18px] capitalize font-bold '>SLEEVE STRIPED T-SHIRT</h2>
                            <div className="rating w-[50.85%] py-[8px] ">
                                <img className='w-full' src="/imgs/rating.svg" alt="" />
                            </div>
                            <div className="price">
                                <span className='text-[#000000] text-[22px] font-bold ' >$130</span>
                            </div>
                        </div>
                    </div>
                </div>
             <div className="btn_box   w-full  flex items-center justify-center pt-[35px] pb-[65px] ">
             <div className="btn  w-[17.5%] h-[52px]  ">
                <Button sx={{
                    width:"100%",
                    height:"100%",
                    border:"1px solid #0000001A",
                    borderRadius:"62px",
                    background:"transparent",
                    color:"#000000",
                    textTransform:"capitalize",
                    border:"none"
                }} variant="contained">View All</Button>
                </div>
             </div>
             <hr  className='border-[#0000001A] ' />
            </div>
        </section>
    </div>
  )
}

export default HomeOneSection