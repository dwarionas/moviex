import React from 'react';

import vectorLeft from "../../assets/imgs/vectorLeft.svg";
import vectorRight from "../../assets/imgs/vectorRight.svg";

const Title = ({ goPrev, goNext, title }) => {
    return (
        <div className='header flex justify-between pr-[30px]'>
            <span className='text-[22px] text-[#F9F9F9] font-extrabold'>{title}</span>
            <img onClick={goPrev} className='cursor-pointer' src={vectorLeft} alt='vectorLeft'/>
            <img onClick={goNext} className='cursor-pointer' src={vectorRight} alt='vectorRight'/>
            <div className='flex w-[120px]'>
                <span className='m-0 m-auto text-[15px] text-[#F9F9F9] opacity-[0.67] font-semibold'>See More</span>
                <img className='w-[8px]' src={vectorRight} alt='vectorRight'/>
            </div>
        </div>
    );
};

export default Title;