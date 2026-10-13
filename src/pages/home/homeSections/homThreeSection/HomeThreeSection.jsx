import React from 'react'

function HomeThreeSection() {
  return (
    <div>
      <section>
        <div className="container w-[1200px] mx-auto  rounded-[40px] bg-[#F0F0F0] px-[65px] ">
          <div className="info py-[50px] ">
            <h1 className='text-center text-[48px] font-bold text-[#000000] uppercase ' >BROWSE BY dress STYLE</h1>
          </div>
          <div className="box flex items-center gap-[20px] flex-wrap pb-[75px] ">
            <div className="logo w-[36%] ">
              <img className='w-full' src="/imgs/three_section.svg" alt="" />
            </div>
            <div className="logo  w-[61.65%] ">
              <img className='w-full ' src="/imgs/three_section2.svg" alt="" />
            </div>
            <div className="logo  w-[61.65%] ">
              <img className='w-full ' src="/imgs/three_section3.svg" alt="" />
            </div>
            <div className="logo w-[36%] ">
              <img className='w-full' src="/imgs/three_section4.svg" alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomeThreeSection