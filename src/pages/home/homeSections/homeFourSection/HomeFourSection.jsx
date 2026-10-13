import React from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6'

function HomeFourSection() {
  return (
    <>
    <section className='py-[80px]' >
        <div className="container w-[1200px] mx-auto ">
            <div className="info flex items-center justify-between ">
                    <div className="title">
                        <h1 className='text-[48px] text-[#000000] font-bold' >OUR HAPPY CUSTOMERS</h1>
                    </div>
                    <div className="icons flex items-center gap-[15px] ">
                    <div className="icon w-[24px] h-[24px] flex items-center justify-center ">
                    <FaArrowLeft  className='text-[16px] ' />
                    </div>
                    <div className="icon w-[24px] h-[24px] flex items-center justify-center ">
                    <FaArrowRight  className='text-[16px] ' />
                    </div>

                    </div>
            </div>
            <div className="box flex items-center justify-between  pt-[40px] ">
                <div className="cards px-[30px] pt-[30px] border-[#0000001A] border-[1px] border-solid rounded-[20px] w-[32.25%] h-[240px] ">
<div className="rating">
    <img src="/imgs/four_cards_rating.svg" alt="" />
</div>
<div className="info flex items-center gap-[5px] py-[15px] ">
    <h2 className='text-[20px] text-[#000000] font-bold' >Sarah M.</h2>
    <div className="logo w-[24px] h-[24px]  flex items-center justify-center ">
        <img className='w-[80%] h-[80%] mx-auto ' src="/imgs/four_submit.svg" alt="" />
    </div>
</div>
<div className="info">
    <p className='text-[14.5px] text-[#00000099] font-normal' >"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”</p>
</div>
                </div>
                <div className="cards px-[30px] pt-[30px] border-[#0000001A] border-[1px] border-solid rounded-[20px] w-[32.25%] h-[240px] ">
<div className="rating">
    <img src="/imgs/four_cards_rating.svg" alt="" />
</div>
<div className="info flex items-center gap-[5px] py-[15px] ">
    <h2 className='text-[20px] text-[#000000] font-bold' > Alex K.</h2>
    <div className="logo w-[24px] h-[24px]  flex items-center justify-center ">
        <img className='w-[80%] h-[80%] mx-auto ' src="/imgs/four_submit.svg" alt="" />
    </div>
</div>
<div className="info">
    <p className='text-[14.5px] text-[#00000099] font-normal' >"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”</p>
</div>
                </div>
                <div className="cards px-[30px] pt-[30px] border-[#0000001A] border-[1px] border-solid rounded-[20px] w-[32.25%] h-[240px] ">
<div className="rating">
    <img src="/imgs/four_cards_rating.svg" alt="" />
</div>
<div className="info flex items-center gap-[5px] py-[15px] ">
    <h2 className='text-[20px] text-[#000000] font-bold' >James L.</h2>
    <div className="logo w-[24px] h-[24px]  flex items-center justify-center ">
        <img className='w-[80%] h-[80%] mx-auto ' src="/imgs/four_submit.svg" alt="" />
    </div>
</div>
<div className="info">
    <p className='text-[14.5px] text-[#00000099] font-normal' >"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”</p>
</div>
                </div>
            </div>
        </div>
    </section>
    
    </>
  )
}

export default HomeFourSection