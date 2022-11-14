import React from 'react'

import { Routes, Route } from "react-router-dom";

import Home from '../../pages/home/Home';
import Awards from '../../pages/awards/Awards';
import Celebrities from '../../pages/celebrities/Celebrities';
import Discover from '../../pages/discover/Discover';

import Movies from '../../pages/home/Movies';
import Series from '../../pages/home/Series';
import SearchPage from '../../pages/home/SearchPage';

import NotFound from '../NotFound';

const MainContent = () => {
    return (
        <div className='MainContent pl-[30px] pt-[5px] pr-[30px] pb-[68px] w-[65%] bg-[#16181E] border-x-[#2D2E34] border-r'>
            <Routes>
                <Route path='/' element={<Home />} >
                    <Route path='/' element={<Movies/>} />
                    <Route path='series' element={<Series/>} />
                    <Route path='search' element={<SearchPage/>} />
                </Route>
                <Route path='awards' element={<Awards/>} />
                <Route path='celebrities' element={<Celebrities/>} />
                <Route path='discover' element={<Discover/>} />
                <Route path='*' element={<NotFound/>} />
            </Routes>
        </div>
    )
}

export default MainContent
