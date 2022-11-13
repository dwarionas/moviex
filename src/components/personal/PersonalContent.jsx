import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { personalRequest } from '../../redux/slices/personalSlice';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Virtual, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/virtual';

import Title from "./Title";
import ContinueSlider from '../../sliders/ContinueSlider';
import TopratedSlider from '../../sliders/TopratedSlider';
import GenresSlider from '../../sliders/GenresSlider';

import notification from '../../assets/imgs/notification.svg'
import vectorDown from '../../assets/imgs/vectorDown.svg'
import profilePicture from '../../assets/imgs/profile-picture.svg'
import wanda from '../../assets/imgs/wanda.svg'
import supernatural from '../../assets/imgs/supernatural.png'



const PersonalContent = () => {
    const dispatch = useDispatch();
    const { status, topratedState, genresState } = useSelector(state => state.personal);
    
    React.useEffect(() => {
        dispatch(personalRequest());
    }, []);

    const slides = Array.from({ length: 10 }).map(
        (el, index) => `Slide ${index + 1}`
    );

    return (
        <div className='RightSide w-[20%] bg-[#21242D] pt-[5px] pl-[10px]'>
            <div className='header flex justify-between mt-[8px] pr-[30px]'>
                <div className='parent w-[40px] h-[40px] bg-[#F9F9F9] rounded-md pt-[10px]'>
                    <img className='child m-0 m-auto cursor-pointer w-[15px]' src={notification} alt='notification'/>
                </div>
                <div className='flex'>
                    <span className='mr-[15px] m-0 m-auto text-[#F9F9F9] text-[16px] font-extrabold cursor-pointer'>Samantha</span>
                    <img className='cursor-pointer mr-[15px]' src={vectorDown} alt='vector'/>
                    <img className='w-[40px]' src={profilePicture} alt='profilePicture'/>
                </div>
            </div>

            <div className='mt-[30px]'>
                <Title title='Continue' prev='continuePrev' next='continueNext' />
                <Swiper 
                    modules={[Virtual, Navigation]} 
                    spaceBetween={10} 
                    slidesPerView={1.3} 
                    virtual 
                    navigation={{
                        prevEl: '.continuePrev',
                        nextEl: '.continueNext',
                    }}
                >
                    {slides.map((item, i) => (
                        <SwiperSlide key={item} virtualIndex={i}>
                            <ContinueSlider
                                index={i}
                                logo={wanda}
                                title='WandaVision'
                                episodesLeft='1 Episode left'
                                
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div className='mt-[30px]'>
                <Title title='Top Rated' prev='topPrev' next='topNext' />
                <Swiper
                    modules={[Navigation]} 
                    slidesPerView={1.3}
                    spaceBetween={10}
                    className='mt-10px]'
                    navigation={{
                        prevEl: '.topPrev',
                        nextEl: '.topNext',
                    }}
                >
                    {topratedState && topratedState.map(item => (
                        <SwiperSlide key={item.id}>
                            <TopratedSlider
                                title={item.title}
                                ep={`${item.popularity.toFixed()} Ep`}
                                genre='Horror, Fantasy'
                                bg={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
                            /> 
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div className='mt-[30px]'>
                <Title title='Genres' prev='genresPrev' next='genresNext' />
                <Swiper
                    modules={[Navigation]}
                    slidesPerView={1.3}
                    spaceBetween={10}
                    className='mt-10px]'
                    navigation={{
                        prevEl: '.genresPrev',
                        nextEl: '.genresNext',
                    }}
                >
                    {genresState && genresState.map(item => (
                        <SwiperSlide key={item.id}>
                            <GenresSlider
                                title={item.name}
                                img={supernatural}
                            /> 
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default PersonalContent;