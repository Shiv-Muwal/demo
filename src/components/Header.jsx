import React from 'react'
import RightArrow from '../assets/images/png/right-arrow.svg'
const Header = () => {
  return (
    <div className='bg-black'>
        <div className=" max-w-[1140px] mx-auto pt-10 px-6">
    <div className="flex items-center justify-between">
    <div className="flex flex-col justify-center">
       <h4 className='text-green-400 text-2xl font-medium block uppercase text-center'>Good on </h4>
       <h5 className=' bg-green-500 text-4xl block uppercase px-2'>digital</h5>
       </div>
       <div className="flex gap-2 flex-col items-end cursor-pointer">
        <div className="w-[10px] h-[1px] bg-white"></div>
        <div className="w-[18px] h-[1px] bg-white"></div>
       </div>
    </div>
    <h1 className='text-white text-5xl font-bold uppercase max-w-[850px] text-center mx-auto pt-14 leading-[60px]'>elecate you brands to new heights through the power of</h1>
        </div>
        <div className="max-w-[1440px] mx-auto px-6">
    <h2 className=' stroke-white stroke-[1px] mb-10 text-white text-5xl mx-auto text-center pt-3 uppercase relative after:absolute after:w-[440px] after:h-1 after:top-[60%] after:right-0 after:bg-green-400 before:absolute before:w-[440px] before:h-1 before:bg-green-400 before:top-[60%] before:left-0 digital-stroke '>digital advertising</h2>
<button className=' border border-white bg-transparent text-lg font-semibold uppercase py-3  px-4 mx-auto text-white flex gap-3 items-center'>book free consultation <img src={RightArrow} alt="right-arrow" /></button>
        </div>
    </div>
  )
}

export default Header