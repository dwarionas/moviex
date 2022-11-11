import React from 'react';
import axios from 'axios';

import Slider from "react-slick";
import MultiSlider from "../../components/sliders/MultiSlider";
import SingleSlider from "../../components/sliders/SingleSlider";

import crown from '../../assets/imgs/crown.png'
import loki from '../../assets/imgs/loki.svg'
import chornobyl from '../../assets/imgs/chornobyl.svg'
import ricknmorty from '../../assets/imgs/ricknmorty.svg'

import star from '../../assets/imgs/star.svg'
import semistar from '../../assets/imgs/semistar.svg'

import prevbtn from '../../assets/imgs/prevbtn.svg'
import nextbtn from '../../assets/imgs/nextbtn.svg'


const Movies = () => {
    const singleSlider = {
        arrows: false,
        dots: true,
        infinite: false,
        speed: 500,
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
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: false,
        adaptiveHeight: true,
    };

    const slideRef = React.useRef();
    const goNext = () => slideRef.current.slickNext();
    const goPrev = () => slideRef.current.slickPrev();

    const API_KEY = 'd3a35789';
    const [res, setRes] = React.useState([]);
    React.useEffect(() => {
        const getData = async () => {
            const { data } = await axios.get(`http://www.omdbapi.com/?apikey=${API_KEY}&s=Big Bang Theory`);

            setRes(data);
        };

        getData();
    }, []);

    console.log(res)

    return (
      <>
        <div>
            <img onClick={goPrev} className='absolute top-[220px] left-[338px] cursor-pointer z-50' src={prevbtn} alt='img' />
            <Slider className='z-10'  ref={slideRef} {...singleSlider} >
                <SingleSlider img={crown} title='The Crown' />
                <SingleSlider img={crown} title='The Crown 2' />
                <SingleSlider img={crown} title='The Crown 3' />
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
                <MultiSlider title='Loki' back={ricknmorty} ep='6 Ep' genre='Genre' />
                <MultiSlider title='Loki' back={ricknmorty} ep='6 Ep' genre='Genre' />
                <MultiSlider title='Loki' back={ricknmorty} ep='6 Ep' genre='Genre' />
                <MultiSlider title='Loki' back={ricknmorty} ep='6 Ep' genre='Genre' />
                <MultiSlider title='Loki' back={loki} ep='6 Ep' genre='Genre' />
                <MultiSlider title='Loki' back={loki} ep='6 Ep' genre='Genre' />
                <MultiSlider title='Loki' back={loki} ep='6 Ep' genre='Genre' />
                <MultiSlider title='Loki' back={loki} ep='6 Ep' genre='Genre' />
            </Slider>
        </div>
      </>
    );
};

export default Movies;