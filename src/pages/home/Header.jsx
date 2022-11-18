import React from 'react'
import debounce from 'lodash.debounce';
import { useDispatch, useSelector } from 'react-redux';
import { requestSearch, setCurrentPage, setSearchQuery } from '../../redux/slices/searchSlice';

import { useNavigate } from 'react-router-dom'

const Header = () => {
  const currentPage = useSelector(state => state.search.currentPage);

  const [searchString, setSearchString] = React.useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const debounceInput = React.useCallback(
      debounce((e) => {
        setSearchString(e.target.value);
      }, 500), [],
  );

  const onClickSearch = () => {
    if (searchString) {
      dispatch(requestSearch({searchString, currentPage}));
      dispatch(setCurrentPage(currentPage));
      dispatch(setSearchQuery(searchString));
      navigate('/search');
    }
  }

  const activePage = (page) => {
    return currentPage === page ? "text-[#00B9AE] border-y-[#00B9AE] border-b-[3px]" : "text-[#F9F9F9]";
  }
  
  return (
    <div className='Header flex justify-between h-[45px]'>
        <div className='flex h-[42px] mt-[8px]'>
            <div 
              className={`mt-[8px] font-semibold mr-[50px] text-[16px] cursor-pointer ${activePage('movie')}`} 
              onClick={() => dispatch(setCurrentPage('movie'))}
            >
              Movies
            </div>
            <div 
              className={`mt-[8px] font-semibold mr-[50px] text-[16px] cursor-pointer ${activePage('tv')}`} 
              onClick={() => dispatch(setCurrentPage('tv'))}
            >
              Series
            </div>
        </div>
        <div className='flex justify-between outline-0 border-[#2D2E34] border text-[#F9F9F9] mt-[8px] text-[18px] pr-[10px] pl-[10px] w-[307px] h-[40px] rounded-[12px] bg-[#21242D]'>
            <img onClick={onClickSearch} className='w-[20px] cursor-pointer' src='imgs/search.svg' alt='search'/>
            <input onChange={debounceInput} className='bg-[#21242D] outline-0 ' placeholder='Search' />
            <img className='w-[18px] cursor-pointer' src='imgs/filter.svg' alt='filter'/>
        </div>
    </div>
  )
}

export default Header