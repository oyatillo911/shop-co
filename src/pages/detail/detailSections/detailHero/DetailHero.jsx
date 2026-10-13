import { Button } from '@mui/material'
import React, { useState } from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa6'
import { IoChevronForwardSharp } from 'react-icons/io5'
import { useParams } from 'react-router-dom'

function DetailHero({ productData }) {
    const { id } = useParams()
    const filterData = productData.find((item) => {
        return item.id == id
    })
    const [count, setCount] = useState(1)
    const total = count * filterData.price
    return (
        <>
            <div className="hero mb-[100px]">
                <div className="container w-[1200px] mx-auto mt-[25px] ">
                    <hr className='border-[#0000001A] border-[1px] border-solid ' />
                    <div className="info flex items-center gap-[12px] py-[30px] ">
                        <span className='text-[16px] font-normal text-[#00000099]' >Home</span>
                        <div className="icon flex items-center justify-center w-[16px] h-[16px] ">
                            <IoChevronForwardSharp className='text-[12px] text-[#00000099]' />
                        </div>
                        <span className='text-[16px] font-normal text-[#00000099]' >Shop</span>
                        <div className="icon flex items-center justify-center w-[16px] h-[16px] ">
                            <IoChevronForwardSharp className='text-[12px] text-[#00000099]' />
                        </div>
                        <span className='text-[16px] font-normal text-[#00000099]' >Men</span>
                        <div className="icon flex items-center justify-center w-[16px] h-[16px] ">
                            <IoChevronForwardSharp className='text-[12px] text-[#00000099]' />
                        </div>
                        <span className='text-[16px] font-normal text-[#000000]' >T-shirts</span>
                    </div>
                    <div className="box flex items-start justify-between ">
                        <div className="logo w-[49.2%] flex items-start justify-between ">
                            <div className="small_cards w-[24.92%] flex items-start  flex-col justify-between h-[530px] ">
                                <div className="small bg-[#F0EEED] rounded-[20px]  w-full h-[167px] flex items-center justify-center  ">
                                    <img className='w-full' src="/imgs/one_home2.png" alt="" />
                                </div>
                                <div className="small bg-[#F0EEED] rounded-[20px]  w-full h-[167px] flex items-center justify-center ">
                                    <img className='w-full' src="/imgs/one_home3.png" alt="" />
                                </div>
                                <div className="small bg-[#F0EEED] rounded-[20px]  w-full h-[167px] flex items-center justify-center ">
                                    <img className='w-full' src="/imgs/one_home4.png" alt="" />
                                </div>
                            </div>
                            <div className="main_card  w-[72.78%] h-[530px] bg-[#F0EEED] rounded-[20px]   flex items-center justify-center">
                                <img className='w-[90%] mx-auto h-[70%]  ' src={filterData.image} alt="" />
                            </div>
                        </div>
                        <div className="info w-[48.4%] ">
                            <h1 className='text-[40px] text-[#000000] font-bold capitalize line-clamp-1 ' >{filterData.title}</h1>
                            <div className="rating flex items-center gap-[15px]">
                                <div className="logo  w-[23%] ">
                                    <img className='w-full' src="/imgs/four_cards_rating.svg" alt="" />
                                </div>
                                <div className="info">
                                    <span className='text-[#000000] text-[16px] font-normal ' >5<span className='text-[#666666FF]' >/5</span></span>
                                </div>
                            </div>
                            <div className="price  flex items-center gap-[12px] py-[10px] ">
                                <span className='text-[32px] text-[#000000] font-bold' >${filterData.price}</span>
                                <div className="sale_btn w-[12%]">
                                    <button className='w-full bg-[#FF33331A] text-center rounded-[62px] text-[#FF3333] h-[34px]' >-40%</button>
                                </div>
                            </div>
                            <div className="info pb-[18px]">
                                <p className=' line-clamp-2 text-[#00000099] text-[16px] font-normal ' >{filterData.description}</p>
                            </div>
                            <hr className=' border-[#0000001A] border-[1px] border-solid ' />
                            <div className="box flex items-center  gap-[40px] ">
                                <div className="color w-[24%] py-[18px] flex  flex-col gap-[16px] ">
                                    <span className='text-[16px] text-[#00000099] font-normal' >Select Colors:</span>
                                    <div className="logo w-full ">
                                        <img className='w-full' src="/imgs/colors_detail.svg" alt="" />
                                    </div>
                                </div>
                                <div className="allPrice flex flex-col w-[24%]  gap-[16px]  ">
                                    <span className='text-[16px] text-[#00000099] font-normal' >Total</span>
                                    <div className="total">
                                        <span className='text-[22px] font-medium' >${total}</span>
                                    </div>
                                </div>
                            </div>
                            <hr className=' border-[#0000001A] border-[1px] border-solid ' />
                            <div className="size  flex items-start flex-col gap-[15px] py-[18px] ">
                                <span className='text-[#00000099] text-[16px] font-normal' >Choose Size</span>
                                <div className="btns flex items-center gap-[12px]  w-full">
                                    <div className="btn w-[14.35%]">
                                        <button className='w-full h-[46px] bg-[#F0F0F0] rounded-[62px] text-[#00000099] ' >Small</button>
                                    </div>
                                    <div className="btn w-[17.5%]">
                                        <button className='w-full h-[46px] bg-[#F0F0F0] rounded-[62px] text-[#00000099] ' >Medium</button>
                                    </div>
                                    <div className="btn w-[14.83%]">
                                        <button className='w-full h-[46px] bg-[#F0F0F0] rounded-[62px] text-[#00000099] ' >Large</button>
                                    </div>
                                    <div className="btn w-[17.34%]">
                                        <button className='w-full h-[46px] bg-[#F0F0F0] rounded-[62px] text-[#00000099] ' >X-Large</button>
                                    </div>
                                </div>
                            </div>
                            <hr className=' border-[#0000001A] border-[1px] border-solid ' />
                            <div className="btns w-full flex items-center justify-between pt-[18px] ">
                                <div className="btn w-[28.4%] h-[52px] bg-[#F0F0F0] rounded-[62px] px-[20px] flex items-center justify-between">
                                    <div onClick={() => {
                                        if (count > 1) {
                                            setCount(count - 1)
                                        }
                                    }} className="minus cursor-pointer  w-[24px] h-[24px] flex items-center justify-center ">
                                        <FaMinus className='text-[18px]' />
                                    </div>
                                    <div className="count  w-[30%] text-center">
                                        <span className='w-full' >{count}</span>
                                    </div>
                                    <div onClick={() => {
                                        setCount(count + 1)
                                    }} className="plus cursor-pointer w-[24px] h-[24px] flex items-center justify-center ">
                                        <FaPlus className='text-[18px]' />
                                    </div>
                                </div>
                                <div className="btn w-[66.7%]">
                                    <Button sx={{
                                        width: "100%",
                                        height: "50px",
                                        color: "white",
                                        background: "#000000",
                                        borderRadius: "62px",
                                    }} variant="contained">Add to Cart</Button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DetailHero