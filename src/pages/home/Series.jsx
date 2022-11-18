import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { seriesRequest } from '../../redux/slices/seriesSlice';
import { setCurrentPage } from '../../redux/slices/searchSlice';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import TrendingSlider from '../../sliders/TrendingSlider';
import PopularSlider from '../../sliders/PopularSlider';

import Header from './Header';

const Series = () => {
    const dispatch = useDispatch();
    const { status, trendingState, popularState } = useSelector(state => state.movies);

    React.useEffect(() => {
        dispatch(seriesRequest());
        dispatch(setCurrentPage('tv'));
    }, []);
    

    return (
        <>
            <Header/>
            <div className='movies mt-[20px]'>
                <div className='trending'>
                    <Swiper
                        modules={[Navigation, Pagination]}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        className='trendingSlider w-[100%] h-[400px] overflow-hidden'
                    >
                        {trendingState && trendingState.map(item => (
                            <SwiperSlide className='trendingSlide w-[100%]' key={item.id}>
                                <TrendingSlider 
                                    img={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
                                    name={item.name}
                                    id={item.id}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    {/* <div className='z-50 parent cursor-pointer rounded-xl pl-[15px] pr-[15px] flex justify-between absolute top-[400px] ml-[15px] w-[150px] h-[50px]'>
                        <span className='child text-[32px] font-bold'>+</span>
                        <span className='child text-[18px] font-bold mt-[12px]'>Watchlist</span>
                    </div>
                    <div className='z-50 cursor-pointer bg-[#00B9AE] rounded-xl flex justify-center absolute top-[400px] ml-[773px] w-[150px] h-[50px]'>
                        <span className='text-[#16181E] text-[18px] font-extrabold mt-[12px]'>Watch Now</span>
                    </div> */}
                </div>
            
                <div className="popular">
                    <div className='text-[25px] text-[#F9F9F9] font-bold mt-[18px] mb-[10px]'>Popular on TinyMoviez</div>
                    <Swiper
                        slidesPerView={3}
                    >
                        {popularState && popularState.map(item => (
                            <SwiperSlide key={item.id}>
                                <PopularSlider 
                                    title={item.name}
                                    bg={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
                                    ep={`${item.popularity.toFixed()} Ep`} 
                                    genre='Genre' 
                                    id={item.id}
                                    key={item.id}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </>
    );
};

export default Series;