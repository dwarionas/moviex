import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

const TrendingSlider = ({ img, name, id }) => {
  const currentPage = useSelector(state => state.search.currentPage);

  return (
    <>
        <span className='absolute mt-[20px] ml-[20px] text-[#F9f9f9] font-bold text-[30px]'>{name}</span>
        <div className='z-50 parent cursor-pointer rounded-xl pl-[15px] pr-[15px] flex justify-between absolute top-[330px] ml-[15px] w-[150px] h-[50px]'>
            <span className='child text-[32px] font-bold'>+</span>
            <span className='child text-[18px] font-bold mt-[12px]'>Watchlist</span>
        </div>

        <img src={img} alt="img" />

        <div className='z-50 cursor-pointer bg-[#00B9AE] rounded-xl flex justify-center absolute top-[330px] ml-[763px] w-[150px] h-[50px]'>
            <Link to={`/${currentPage}/${id}`}><span className='text-[#16181E] text-[18px] font-extrabold mt-[12px]'>Watch Now</span></Link>
        </div>
    </>
  )
}

export default TrendingSlider