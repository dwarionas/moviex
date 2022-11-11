import React from 'react';

import { Link, useLocation } from 'react-router-dom';

import Icon from "../Icon";

import logo from '../../assets/imgs/logo.svg'

const Navigation = () => {
    const { pathname } = useLocation();
    const splittedLocation = pathname.split("/");

    const activeLink = (location, current) => location === current ? "text-[#00B9AE]" : "text-[#B2B3B6]";
    const activeBorder = (location, current) => location === current ? "border-x-[#00B9AE] border-r-2" : "";

    return (
        <div className='LeftSide pl-[30px] w-[15%] bg-[#21242D] border-x-[#2D2E34] border-r'>
            <Link to='/'><img className='mt-[20px]' src={logo} alt='Logo' /></Link>

            <div className='mt-[20px]'>
                <div className='text-[15px] text-[#B2B3B6]'>Menu</div>

                <div className='mt-[10px]'>
                    <div className={`flex mt-[20px] ${activeBorder(splittedLocation[1], "")}`}>
                        <Icon path='imgs/home.svg' />
                        <div className={`ml-[14px] text-[13px] ${activeLink(splittedLocation[1], "")}`}>
                            <Link to='/'>Home</Link>
                        </div>
                    </div>

                    <div className={`flex mt-[20px] ${activeBorder(splittedLocation[1], "discover")}`}>
                        <Icon path='imgs/discover.svg' />
                        <div className={`ml-[14px] text-[13px] ${activeLink(splittedLocation[1], "discover")}`}>
                            <Link to='discover'>Discover</Link>
                        </div>
                    </div>

                    <div className={`flex mt-[20px] ${activeBorder(splittedLocation[1], "awards")}`}>
                        <Icon path='imgs/award.svg' />
                        <div className={`ml-[14px] text-[13px] ${activeLink(splittedLocation[1], "awards")}`}>
                            <Link to='awards'>Awards</Link>
                        </div>
                    </div>

                    <div className={`flex mt-[20px] ${activeBorder(splittedLocation[1], "celebrities")}`}>
                        <Icon path='imgs/celebrities.svg' />
                        <div className={`ml-[14px] text-[13px] ${activeLink(splittedLocation[1], "celebrities")}`}>
                            <Link to='celebrities'>Celebrities</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mt-[25px]'>
                <div className='text-[15px] text-[#B2B3B6]'>Library</div>

                <div className='mt-[10px]'>
                    <div className='flex mt-[20px]'>
                        <Icon path='imgs/recent.svg' />
                        <div className='ml-[14px] text-[13px] text-[#B2B3B6]'><a href='#'>Recent</a></div>
                    </div>

                    <div className='flex mt-[20px]'>
                        <Icon path='imgs/toprated.svg' />
                        <div className='ml-[14px] text-[13px] text-[#B2B3B6]'><a href='#'>Rated</a>Top </div>
                    </div>

                    <div className='flex mt-[20px]'>
                        <Icon path='imgs/downloaded.svg' />
                        <div className='ml-[14px] text-[13px] text-[#B2B3B6]'><a href='#'>Downloaded</a></div>
                    </div>

                    <div className='flex mt-[20px]'>
                        <Icon path='imgs/playlists.svg' />
                        <div className='ml-[14px] text-[13px] text-[#B2B3B6]'><a href='#'>Playlists</a></div>
                    </div>

                    <div className='flex mt-[20px]'>
                        <Icon path='imgs/watchlist.svg' />
                        <div className='ml-[14px] text-[13px] text-[#B2B3B6]'><a href='#'>Watchlist</a></div>
                    </div>

                    <div className='flex mt-[20px]'>
                        <Icon path='imgs/completed.svg' />
                        <div className='ml-[14px] text-[13px] text-[#B2B3B6]'><a href='#'>Completed</a></div>
                    </div>
                </div>
            </div>

            <div className='mt-[25px]'>
                <div className='text-[15px] text-[#B2B3B6]'>General</div>

                <div className='mt-[10px]'>
                    <div className='flex mt-[20px]'>
                        <Icon path='imgs/settings.svg' />
                        <div className='ml-[14px] text-[13px] text-[#B2B3B6]'><a href='#'>Settings</a></div>
                    </div>

                    <div className='flex mt-[20px]'>
                        <Icon path='imgs/logout.svg' />
                        <div className='ml-[14px] text-[13px] text-[#B2B3B6]'><a href='#'>Log Out</a></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navigation;