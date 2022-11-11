import React from 'react';

const SecondSlider = ({ back, title, ep, genre }) => {
    return (
        <div>
            <div className='absolute top-[6px] ml-[10px]'>
                <div>
                    <span className='text-[16px] font-extrabold text-[#F9F9F9]'>{title}</span>
                    <div className='flex justify-between mt-[25px]'>
                        <span className='text-[#F9F9F9] text-[14px] font-bold opacity-[0.67]'>{ep}</span>
                        <span className='text-[#F9F9F9] text-[14px] font-bold opacity-[0.67]'>{genre}</span>
                    </div>
                </div>
                <div className='flex justify-between mt-[10px]'>
                    <div className='parent cursor-pointer pl-[27px] mr-[11px] w-[70px] h-[40px] rounded-[12px]'>
                        <span className='child text-[27px] font-extrabold text-[#F9f9f9]'>+</span>
                    </div>
                    <div className='cursor-pointer pt-[7px] pl-[37px] bg-[#00B9AE] w-[125px] h-[40px] rounded-[12px]'>
                        <span className='text-[18px] text-[#16181E] font-[800]'>Watch</span>
                    </div>
                </div>
            </div>

            <img
                className='h-[140px] rounded-[12px]'
                src={back}
                alt='img'
            />
        </div>
    );
};

export default SecondSlider;