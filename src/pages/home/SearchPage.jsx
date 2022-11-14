import React from 'react'
import { useSelector } from 'react-redux';

const SearchPage = () => {
  const searchState = useSelector(state => state.search.searchState);

  return (
    <div>
      {searchState && searchState.map(item => (
        <img src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} />
      ))}
    </div>
  )
}

export default SearchPage