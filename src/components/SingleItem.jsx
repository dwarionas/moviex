import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

import { useParams } from 'react-router-dom'

import { requestSingleItem } from '../redux/slices/singleSlice';

const SingleItem = () => {
    const { id } = useParams();
    const dispatch = useDispatch();

    const singleItemState = useSelector(state => state.single.singleItemState);

    React.useEffect(() => {
        dispatch(requestSingleItem(id));
    }, [id]);

    return (
        <div className="parent">
            {singleItemState && singleItemState.map(item => (
                <div className="item flex mt-[20px] mb-[20px]" key={item.id}>
                <img className='w-[300px] ' src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} />
                <div className='ml-[20px]'>
                    <div className='text-[#F9F9F9]'>{item.title}</div>
                    <div className='text-[#F9F9F9]'>{item.vote_average}</div>
                    <div className='text-[#F9F9F9]'>{item.release_date}</div>
                    <div className='text-[#F9F9F9]'>{item.id}</div>
                </div>
                </div>
            ))}
        </div>
    )
}

export default SingleItem