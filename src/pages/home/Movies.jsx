import React from 'react';
import axios from 'axios';

import Slider from "react-slick";
import MultiSlider from "../../components/sliders/MultiSlider";
import SingleSlider from "../../components/sliders/SingleSlider";

import loki from '../../assets/imgs/loki.svg';

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


    const API_KEY = '3e9b52dbfb07553d4df2f99c97de61e7';

    const [trending, setTrending] = React.useState([]);
    const [popular, setPopular] = React.useState([]);

    const getData = async () => {
        const getTrending = await axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}`);
        const getPopular = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)

        setTrending(getTrending.data.results.slice(0, 7));
        setPopular(getPopular.data.results);
    };
    React.useEffect(() => {
        getData();
    }, []);
    console.log(popular)

    return (
      <>
        <div>
            <img onClick={goPrev} className='absolute top-[220px] left-[338px] cursor-pointer z-50' src={prevbtn} alt='img' />
            <Slider className='z-10 w-[100%] h-[400px] overflow-hidden'  ref={slideRef} {...singleSlider} >
                {trending && trending.map(item => (
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
            <div className='text-[25px] text-[#F9F9F9] font-bold mt-[10px]'>Popular on TinyMoviez</div>
            <Slider  {...multiSlider} >
                {popular && popular.map(item => (
                    <MultiSlider 
                        title={item.title} 
                        back={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`} 
                        // back={loki}
                        ep={`${item.popularity.toFixed()} Ep`} 
                        genre='Genre' 
                    />
                ))}
            </Slider>
        </div>
      </>
    );
};

export default Movies;