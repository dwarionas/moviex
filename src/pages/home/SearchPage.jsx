import React from 'react'
import qs from 'qs';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { setSearchParams, requestSearch } from '../../redux/slices/searchSlice';

import backButton from '../../assets/imgs/backButton.svg';

const SearchPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchState = useSelector(state => state.search.searchState);
  const currentPage = useSelector(state => state.search.currentPage);
  const searchQuery = useSelector(state => state.search.searchQuery);

  React.useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      dispatch(setSearchParams(params))
      dispatch(requestSearch({
        searchString: params.query, 
        currentPage: params.genre
      }));
    }
  }, [currentPage, searchQuery]);

  React.useEffect(() => {
    if (currentPage, searchQuery) {
      const queryString = qs.stringify({
        genre: currentPage,
        query: searchQuery
      })

      navigate(`?${queryString}`);
    }
  }, [currentPage, searchQuery]);

  return (
    <div>
      <div onClick={() => navigate(-1)} className='cursor-pointer mt-[10px]'><img src={backButton} /></div>
      <div className="content">
        {searchState && searchState.map(item => (
          <div className="item flex mt-[20px] mb-[20px]"  key={item.id}>
            <Link to={`/item/${item.id}`} className='text-[#F9F9F9]'>
              <img className='w-[300px] ' src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} />
            </Link>
            <div className='ml-[20px]'>
              <Link to={`/item/${item.id}`} className='text-[#F9F9F9]'>{item.title || item.name}</Link>
              <div className='text-[#F9F9F9]'>{item.vote_average}</div>
              <div className='text-[#F9F9F9]'>{item.release_date || item.first_air_date}</div>
              <div className='text-[#F9F9F9]'>{item.id}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SearchPage;