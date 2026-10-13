import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

function HomeTwoSection({productData}) {
  return (
    <>
    <section>
        <div className="container w-[1200px] mx-auto ">
            <div className="info pb-[55px] pt-[65px] ">
                <h1 className='font-bold text-[48px] text-[#000000] uppercase text-center' >top selling</h1>
            </div>
            <div className="box flex items-center justify-between flex-wrap ">
                   {
                    productData.map((item)=>{
                        return  <Link to={`/detail/${item.id}`} className="cards  w-[23.8%]  mb-[40px] " >
                        <div className="logo w-full h-[295px]  bg-[#F0EEED] rounded-[20px] py-[10%] ">
                            <img className=' object-fill w-[90%] mx-auto h-[100%]  ' src={item.image} alt="" />
                        </div>
                        <div className="info pt-[15px]">
                            <h2 className='text-[#000000] text-[18px] capitalize font-bold line-clamp-1 '>{item.title}</h2>
                            <div className="rating w-[50.85%] py-[8px] ">
                                <img className='w-full' src="/imgs/rating.svg" alt="" />
                            </div>
                            <div className="price">
                                <span className='text-[#000000] text-[22px] font-bold ' >${item.price}</span>
                            </div>
                        </div>
                    </Link>
                    })
                   }
                </div>
                <div className="btn_box   w-full  flex items-center justify-center pt-[30px] pb-[65px] ">
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
        </div>
    </section>
    </>
  )
}

export default HomeTwoSection