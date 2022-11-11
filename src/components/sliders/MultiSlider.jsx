import React from 'react';

const MultiSlider = ({ title, back, ep, genre }) => {
    return (
        <div>
            <div className='absolute top-[6px] ml-[15px]'>
                <div>
                    <span className='mt-[15px] ml-[10px] text-[20px] font-extrabold text-[#F9F9F9]'>{title}</span>
                    <div className='flex justify-between mt-[110px]'>
                        <span className='text-[#F9F9F9] text-[14px] font-bold opacity-[0.67]'>{ep}</span>
                        <span className='text-[#F9F9F9] text-[14px] font-bold opacity-[0.67]'>{genre}</span>
                    </div>
                </div>
                <div className='flex justify-between mt-[9px]'>
                    <div className='parent cursor-pointer pl-[12px] mr-[11px] w-[40px] h-[40px] rounded-[12px]'>
                        <span className='child text-[27px] font-extrabold text-[#F9f9f9]'>+</span>
                    </div>
                    <div className='cursor-pointer pt-[7px] pl-[30px] bg-[#00B9AE] w-[115px] h-[40px] rounded-[12px]'>
                        <span className='text-[17px] text-[#16181E] font-[800]'>Watch</span>
                    </div>
                </div>
            </div>

            <img
                className='w-[100%] h-[120px] rounded-[12px]'
                src={back}
                alt='img'
            />
        </div>
    );
};

export default MultiSlider;