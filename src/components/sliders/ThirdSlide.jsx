import React from 'react';

const ThirdSlide = ({ title, img }) => {
    return (
        <div className='flex justify-center'>
            <div className='absolute top-[53px] text-[16px] mr-[25px] font-extrabold text-[#F9F9F9]'>{title}</div>
            <img className='h-[140px] rounded-[12px] mr-[25px]' src={img} alt='img'/>
        </div>
    );
};

export default ThirdSlide;