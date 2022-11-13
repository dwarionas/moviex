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
      <Movies/>
    </>
  )
}

export default Home;