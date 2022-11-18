import React from 'react';
import { useSelector } from 'react-redux';

import Movies from './Movies';
import Series from './Series';
import SearchPage from './SearchPage';
import Header from './Header';

const Home = () => {
	const currentPage = useSelector(state => state.search.currentPage);

	return (
		<div className='home'>
			<Header/>
			{currentPage === 'movie' ? <Movies/> : <Series/>}
		</div>
	)
}

export default Home;