import { Button } from '@mui/material'
import React from 'react'

function Homehero() {
    return (
        <div>
            <div className="hero  ">
                <div className="hero_top bg-[#F2F0F1]">
                    <div className="container w-[1200px] mx-auto  ">
                        <div className="box flex items-center justify-between ">
                            <div className="hero_info w-[50%]  ">
                                <h1 className='text-[64px] font-bold text-[#000000]' >FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
                                <p className=' text-[14px] w-[87%] font-normal text-[#00000099] ' >Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
                                <div className="btn w-full pt-[30px] pb-[45px]">
                                    <Button sx={{
                                        width: "36%",
                                        height: "52px",
                                        borderRadius: "62px",
                                        background: "#000000",
                                        color: "white",
                                        textTransform:"capitalize"
                                    }} variant="contained">Shop Now</Button>
                                </div>
                                <div className="brands w-full flex items-center justify-between ">
                                    <div className="cards w-[23%] ">
                                        <h2 className=' text-[#000000] text-[40px] font-bold ' >200+</h2>
                                        <span className=' text-[#00000099] text-[14px] font-normal ' >International Brands</span>
                                    </div>
                                    <div className="cards w-[34%] px-[20px] border-r-[#0000001A] border-r-[1px] border-l-[#0000001A] border-l-[1px]  ">
                                        <h2 className=' text-[#000000] text-[40px] font-bold ' >2,000+</h2>
                                        <span className=' text-[#00000099] text-[14px] font-normal ' >High-Quality Products</span>
                                    </div>
                                    <div className="cards w-[34%]  ">
                                        <h2 className=' text-[#000000] text-[40px] font-bold ' >30,000+</h2>
                                        <span className=' text-[#00000099] text-[14px] font-normal ' >Happy Customers</span>
                                    </div>
                                </div>
                            </div>
                            <div className="hero_logo w-[49%]">
                                <img className='w-full' src="/imgs/photo_2026-10-12_11-59-29.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hero_bottom bg-[#000000] py-[40px] ">
                    <div className="container w-[1200px] mx-auto flex items-center justify-between ">
<div className="cards w-[11.5%] h-[34px] ">
    <img className='w-full h-full ' src="/imgs/hero_bottom.svg" alt="" />
</div>
<div className="cards w-[6.4%] h-[38px] ">
    <img className='w-full h-full ' src="/imgs/hero_bottom2.svg" alt="" />
</div>
<div className="cards w-[10.9%] h-[36px] ">
    <img className='w-full  h-full' src="/imgs/hero_bottom3.svg" alt="" />
</div>
<div className="cards w-[13.5%] h-[32px] ">
    <img className='w-full h-full' src="/imgs/hero_bottom4.svg" alt="" />
</div>
<div className="cards w-[14.4%] h-[33px] ">
    <img className='w-full h-full' src="/imgs/hero_bottom5.svg" alt="" />
</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homehero