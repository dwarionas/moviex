import React from 'react';

import { Routes, Route } from "react-router-dom";

import Movies from './Movies';
import Series from './Series';
import SearchPage from './SearchPage';

const Home = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Movies/>} />
        <Route path='/series' element={<Series/>} />
        <Route path='/search' element={<SearchPage/>} />
      </Routes>
    </>
  )
}

export default Home;