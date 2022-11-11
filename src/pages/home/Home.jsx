import React from 'react'

import { Routes, Route } from "react-router-dom";

import Header from './Header';
import Movies from './Movies';
import Series from './Series';
import Streaming from './Streaming';

const Home = () => {
  return (
    <>
      <Header/>
      <Routes>
          <Route path='/' element={<Movies/>} />
          <Route path='streaming' element={<Streaming/>} />
          <Route path='series' element={<Series/>} />
      </Routes>
    </>
  )
}

export default Home;