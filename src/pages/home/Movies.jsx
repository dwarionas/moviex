import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { moviesRequest } from '../../redux/slices/moviesSlice';

import Slider from "react-slick";
import MultiSlider from "../../components/sliders/MultiSlider";
import SingleSlider from "../../components/sliders/SingleSlider";

import prevbtn from '../../assets/imgs/prevbtn.svg'
import nextbtn from '../../assets/imgs/nextbtn.svg'


const Movies = () => {
    const singleSlider = {
        arrows: false,
        dots: true,
        infinite: false,
        speed: 200,
        slidesToShow: 1,
        slidesToScroll: 1,
        dotsClass: 'slick-dots',
        appendDots: dots => (
            <div
                style={{
                    borderRadius: "5px",
                    translate: '0px -50px',
                }}
            >
                <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
        )
    }
    const multiSlider = {
        dots: false,
        speed: 200,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        adaptiveHeight: true,
        className: ''
    };
    const slideRef = React.useRef();
    const goNext = () => slideRef.current.slickNext();
    const goPrev = () => slideRef.current.slickPrev();


    const dispatch = useDispatch();
    const { status, trendingState, popularState } = useSelector(state => state.movies)

    React.useEffect(() => {
        dispatch(moviesRequest());
    }, []);
    

    return (
      <>
        <div>
            <img onClick={goPrev} className='absolute top-[220px] left-[338px] cursor-pointer z-50' src={prevbtn} alt='img' />
            <Slider className='z-10 w-[100%] h-[400px] overflow-hidden'  ref={slideRef} {...singleSlider} >
                {trendingState && trendingState.map(item => (
                    <SingleSlider img={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} title={item.title} key={item.id} />
                ))}
            </Slider>
            
            <div className='z-50 parent cursor-pointer rounded-xl pl-[15px] pr-[15px] flex justify-between absolute top-[355px] ml-[20px] w-[150px] h-[50px]'>
                <span className='child text-[32px] font-bold'>+</span>
                <span className='child text-[18px] font-bold mt-[12px]'>Watchlist</span>
            </div>
            <div className='z-50 cursor-pointer bg-[#00B9AE] rounded-xl flex justify-center absolute top-[355px] ml-[615px] w-[150px] h-[50px]'>
                <span className='text-[#16181E] text-[18px] font-extrabold mt-[12px]'>Watch Now</span>
            </div>
            <img onClick={goNext} className='absolute top-[220px] right-[450px] cursor-pointer z-50' src={nextbtn} alt='img' />
        </div>

        <div>
            <div className='text-[25px] text-[#F9F9F9] font-bold mt-[20px] mb-[15px]'>Popular on TinyMoviez</div>
            <Slider  {...multiSlider} >
                {popularState && popularState.map(item => (
                    <MultiSlider 
                        title={item.title} 
                        back={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} 
                        ep={`${item.popularity.toFixed()} Ep`} 
                        genre='Genre' 
                        key={item.id}
                    />
                ))}
            </Slider>
        </div>
      </>
    );
};

export default Movies;