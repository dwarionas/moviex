import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'

import { requestSingleItem } from '../redux/slices/singleSlice';

const SingleItem = () => {
    const { id, show } = useParams();
    const dispatch = useDispatch();

    const singleItemState = useSelector(state => state.single.singleItemState);

    React.useEffect(() => {
        if (id && show) {
            dispatch(requestSingleItem({id, genre: show}));
        }
    }, [id, show]);

    return (
        <div className="item">
            {singleItemState && singleItemState.map(item => (
                <>
                    <div className="item flex mt-[30px]" key={item.id}>
                        <img className='w-[300px] ' src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} />
                        <div className='ml-[20px] w-[100%]'>
                            <div className='text-[#F9F9F9] text-[30px]'>{item.title || item.name}</div>
                            <div className="text-[#F9F9F9]">genre genre genre</div>
                            <div className='flex justify-between'>
                                <button className="bg-[#F9F9F9]">Watch</button>
                                <button className="bg-[#F9F9F9]">Heart</button>
                                <button className="bg-[#F9F9F9]">Share</button>
                                <button className="bg-[#F9F9F9]">Other</button>
                            </div>
                        </div>
                    </div>

                    <div className="itemContent flex justify between">
                        <div className='w-[25%]'>
                            <div>Info</div>
                            <div>Release: {item.release_date || item.first_air_date}</div>
                            <div>Budget: {item.budget}</div>
                            <div>Country: {item.production_countries.iso_3166_1 || item.origin_country}</div>
                            <div>Original language: {item.original_language}</div>
                        </div>

                        <div className='w-[75%]'>
                            <div>Storyline</div>
                            <div>{item.overview}</div>
                        </div>

                        {/* <div className='w-[10%]'>
                            <div>Cast</div>
                            <div>Cast 1</div>
                            <div>Cast 2</div>
                            <div>Cast 3</div>
                            <div>Cast 4</div>
                        </div> */}
                    </div>
                </>
            ))}
        </div>
    )
}

export default SingleItem