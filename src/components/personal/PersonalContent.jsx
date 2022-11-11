import React from 'react';

import Slider from "react-slick";

import FirstSlider from "../sliders/FirstSlider";
import Title from "./Title";
import SecondSlider from "../sliders/SecondSlider";
import ThirdSlide from "../sliders/ThirdSlide";

import notification from '../../assets/imgs/notification.svg'
import vectorDown from '../../assets/imgs/vectorDown.svg'
import profilePicture from '../../assets/imgs/profile-picture.svg'
import wanda from '../../assets/imgs/wanda.svg'
import hulk from '../../assets/imgs/hulk.svg'
import supernatural from '../../assets/imgs/supernatural.png'



const PersonalContent = () => {
    const settings = {
        dots: false,
        infinite: false,
        slidesToShow: 1.3,
        slidesToScroll: 1,
        arrows: false
    };

    const continueRef = React.useRef();
    const continueNext = () => continueRef.current.slickNext();
    const continuePrev = () => continueRef.current.slickPrev();

    const topRef = React.useRef();
    const topNext = () => topRef.current.slickNext();
    const topPrev = () => topRef.current.slickPrev();

    const genresRef = React.useRef();
    const genresNext = () => genresRef.current.slickNext();
    const genresPrev = () => genresRef.current.slickPrev();

    return (
        <div className='RightSide w-[20%] bg-[#21242D] pt-[5px] pl-[25px]'>
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
                <Title goNext={continueNext} goPrev={continuePrev} title='Continue' />
                <Slider className='mt-[10px]' ref={continueRef} {...settings}>
                    <FirstSlider
                        index={1}
                        logo={wanda}
                        title='WandaVision'
                        episodesLeft='1 Episode left'
                    />

                    <FirstSlider
                        index={2}
                        logo={hulk}
                        title='Hulk'
                        episodesLeft='1 Episode left'
                    />

                    <FirstSlider
                        index={3}
                        logo={wanda}
                        title='WandaVision'
                        episodesLeft='1 Episode left'
                    />

                    <FirstSlider
                        index={4}
                        logo={hulk}
                        title='Hulk'
                        episodesLeft='1 Episode left'
                    />

                </Slider>
            </div>

            <div className='mt-[30px]'>
                <Title goNext={topNext} goPrev={topPrev} title='Top Rated' />
                <Slider className='mt-10px]' ref={topRef} {...settings}>
                    <SecondSlider
                        title='Supernatural'
                        ep='320 Ep'
                        genre='Horror, Fantasy'
                        back={supernatural}
                    />
                    <SecondSlider
                        title='Rick and Morty'
                        ep='49 Ep'
                        genre='Horror, Fantasy'
                        back={supernatural}
                    />
                    <SecondSlider
                        title='Supernatural'
                        ep='320 Ep'
                        genre='Horror, Fantasy'
                        back={supernatural}
                    />
                    <SecondSlider
                        title='Rick and Morty'
                        ep='49 Ep'
                        genre='Horror, Fantasy'
                        back={supernatural}
                    />
                </Slider>
            </div>

            <div className='mt-[30px]'>
                <Title goNext={genresNext} goPrev={genresPrev} title='Genres' />
                <Slider className='mt-[10px]' ref={genresRef} {...settings}>
                    <ThirdSlide title='Sitcom' img={supernatural} />
                    <ThirdSlide title='Detective' img={supernatural} />
                    <ThirdSlide title='Documentary' img={supernatural} />
                    <ThirdSlide title='Drama' img={supernatural} />
                </Slider>
            </div>
        </div>
    );
};

export default PersonalContent;