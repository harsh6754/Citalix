import React from 'react';
import Header from '../components/Header';
import plusIcon from '../assests/plusIcon.png';
import {Link} from 'react-router-dom';

import Search from '../components/Search';


const Analytics = () => {
    return (
        <div className='flex'>
            <Header />
            <div className="p-7 text-2xl font-semibold flex-1 h-screen ">
                <div className='flex items-center justify-center'>
                    <Search />
                </div>
                <div className='flex items-center justify-center'>
                    <div className='p-8 m-[8.89px] flex  w-full items-center justify-evenly'>
                        <Link to ="/create-report" className='text-white  bg-[#2F667F] rounded-full py-[9.83px] pr-[23.6px] pl-[15.73px] flex font-medium'>
                            <img src={plusIcon} alt="add icon" className='w-[17.7px] h-[17.7px] mt-1 mr-2' />
                            Create Report
                        </Link>
                        <Link to ="/share-duration" className='text-white  bg-[#2F667F] rounded-full py-[9.83px] pr-[23.6px] pl-[15.73px] flex font-medium'>
                            <img src={plusIcon} alt="add icon" className='w-[17.7px] h-[17.7px] mt-1 mr-2' />
                            Share this Duration
                        </Link>
                        <Link to="/select-duration" className='text-white  bg-[#2F667F] rounded-full py-[9.83px] pr-[23.6px] pl-[15.73px] flex font-medium'>
                            <img src={plusIcon} alt="add icon" className='w-[17.7px] h-[17.7px] mt-1 mr-2' />
                            Select Duration
                        </Link>
                        <Link to="/compare-duration" className='text-white  bg-[#2F667F] rounded-full py-[9.83px] pr-[23.6px] pl-[15.73px] flex font-medium'>
                            <img src={plusIcon} alt="add icon" className='w-[17.7px] h-[17.7px] mt-1 mr-2' />
                            Compare with Duration
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Analytics;
