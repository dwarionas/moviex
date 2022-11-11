import React from 'react';

const SingleSlider = ({ img, title }) => {
    return (
        <div className='mt-[20px]'>
            <span className='absolute top-[50px] ml-[20px] text-[#F9f9f9] font-bold text-[30px]'>{title}</span>
            <img className='w-[100%]' src={img} alt='img' />
        </div>
    );
};

export default SingleSlider;