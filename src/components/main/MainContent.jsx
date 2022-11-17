import React from 'react'
import qs from 'qs';

import { Routes, Route } from "react-router-dom";

import Home from '../../pages/home/Home';
import Awards from '../../pages/awards/Awards';
import Celebrities from '../../pages/celebrities/Celebrities';
import Discover from '../../pages/discover/Discover';

import SingleItem from '../SingleItem';

import NotFound from '../NotFound';

const MainContent = () => {
    React.useEffect(() => {

    }, []);

    return (
        <div className='MainContent pl-[30px] pt-[5px] pr-[30px] pb-[68px] w-[65%] bg-[#16181E] border-x-[#2D2E34] border-r'>
            <Routes>
                <Route path='/*' element={<Home />} />
                <Route path='awards' element={<Awards/>} />
                <Route path='celebrities' element={<Celebrities/>} />
                <Route path='discover' element={<Discover/>} />
                <Route path='item/:id' element={<SingleItem/>} />
                {/* <Route path='*' element={<NotFound/>} /> */}
            </Routes>
        </div>
    )
}

export default MainContent