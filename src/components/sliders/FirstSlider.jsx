import React from 'react';

const FirstSlider = ({ logo, title, episodesLeft }) => {
    return (
        <div  className='outline-0 border-[#2D2E34] border-[2px] p-[8px] mr-[20px] h-[140px] rounded-[12px] bg-[#16181E]'>
            <div className='flex mb-[6px]'>
                <img className='w-[70px] mr-[10px]' src={logo} alt='logo'/>
                <div className='flex flex-col justify-between w-[135px]'>
                    <span className='text-[#F9F9F9]'>{title}</span>
                    <span className='text-[#F9F9F9] opacity-[0.67]'>{episodesLeft}</span>
                    <div className='w-full h-[5px] bg-green-500'/>
                </div>
            </div>
            <div className='flex justify-between'>
                <div className='parent cursor-pointer pt-[7px] pl-[19px] w-[70px] h-[40px] rounded-[12px]'>
                    <span className='child text-[14px] font-extrabold text-[#F9f9f9]'>Drop</span>
                </div>
                <div className='cursor-pointer pt-[7px] pl-[37px] bg-[#00B9AE] w-[135px] h-[40px] rounded-[12px]'>
                    <span className='text-[18px] text-[#16181E] font-[800]'>Watch</span>
                </div>
            </div>
        </div>
    );
};

export default FirstSlider;