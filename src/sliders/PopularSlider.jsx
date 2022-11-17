import React from 'react'
import { Link } from 'react-router-dom';

const PopularSlider = ({ title, bg, ep, genre, id }) => {
    return (
        <div className='relative'>
            <div className='absolute top-[6px]'>
                <div>
                    <span className='mt-[15px] ml-[10px] text-[20px] font-extrabold text-[#F9F9F9]'>{title}</span>
                    <div className='flex justify-between '>
                        <span className='text-[#F9F9F9] text-[14px] font-bold opacity-[0.67]'>{ep}</span>
                        <span className='text-[#F9F9F9] text-[14px] font-bold opacity-[0.67]'>{genre}</span>
                    </div>
                </div>
                
            </div>

            <img
                className='w-[95%] h-[95%] rounded-[12px] m-0 m-auto'
                src={bg}
                alt='img'
            />

            <div className='flex justify-between absolute bottom-[7px] ml-[16px]'>
                <div className='parent cursor-pointer pl-[12px] mr-[11px] w-[40px] h-[40px] rounded-[12px]'>
                    <span className='child text-[27px] font-extrabold text-[#F9f9f9]'>+</span>
                </div>
                <div className='cursor-pointer pt-[7px] pl-[30px] bg-[#00B9AE] w-[115px] h-[40px] rounded-[12px] ml-[115px]'>
                    <Link to={`/item/${id}`}><span className='text-[17px] text-[#16181E] font-[800]'>Watch</span></Link>
                </div>
            </div>
        </div>
    );
};


export default PopularSlider