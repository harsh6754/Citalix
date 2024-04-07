import React from 'react'
import downArrow from '../assests/downArrow.png';
import upArrow from '../assests/upArrow.png';
import darkDownArrow from '../assests/darkDownArrow.png';
import cardone from '../assests/cardone.png';
import cardtwo from '../assests/cardtwo.png';
import cardthree from '../assests/cardthree.png';
import cardfour from '../assests/cardfour.png';

const Card = () => {
    return (
        <div className='flex space-x-5 items-center w-full justify-evenly drop-shadow-[0_35px_35px_rgba(0,0,0,0.75)]'>
            <div className='p-[35px] '>
                <div className="absolute w-[250.82px] h-[200.33px]">
                    <img src={cardone} alt="card" className='flex h-[180px]' />
                </div>
                <div className='relative top-3 left-6'>
                    <div className='font-semibold text-white'>
                        <p>EFFICIENCY</p>
                    </div>
                    <div className='font-medium text-white'>
                        <p>Lorem Ipsum</p>
                    </div>
                    <div className='flex font-semibold  text-white space-x-2'>
                        <p>1.1921</p>
                        <img src={downArrow} alt="down arrow" className='w-[7.9px] h-[7.9px] mt-2' />
                    </div>
                    <div className='font-medium text-white'>
                        <p>+0.0015 (+0.13%)</p>
                    </div>
                    <div className='font-medium text-white'>
                        <p>0.00 USD</p>
                    </div>
                </div>
            </div>

            <div className='p-[35px] '>
                <div className="absolute w-[250.82px] h-[200.33px]">
                    <img src={cardtwo} alt="card" className='flex h-[180px]' />
                </div>
                <div className='relative top-3 left-6'>
                    <div className='font-semibold text-white'>
                        <p>Time TO MARKET</p>
                    </div>
                    <div className='font-medium text-white'>
                        <p>Lorem Ipsum</p>
                    </div>
                    <div className='flex font-semibold  text-white space-x-2'>
                        <p>327,176</p>
                        <img src={upArrow} alt="down arrow" className='w-[7.9px] h-[7.9px] mt-2' />
                    </div>
                    <div className='font-medium text-white'>
                        <p>-97,914 (-23.03%)</p>
                    </div>
                    <div className='font-medium text-white'>
                        <p>131,040,723,108 JPY</p>
                    </div>
                </div>
            </div>

            <div className='p-[35px] '>
                <div className="absolute w-[250.82px] h-[200.33px]">
                    <img src={cardthree} alt="card" className='flex h-[180px]' />
                </div>
                <div className='relative top-3 left-6'>
                    <div className='font-semibold text-black'>
                        <p> TECH DEBT</p>
                    </div>
                    <div className='font-medium text-black'>
                        <p>Lorem Ipsum</p>
                    </div>
                    <div className='flex font-semibold  text-black space-x-2'>
                        <p>1.1763</p>
                        <img src={darkDownArrow} alt="down arrow" className='w-[7.9px] h-[7.9px] mt-2' />
                    </div>
                    <div className='font-medium text-black'>
                        <p>+0.0015(+0.13%)</p>
                    </div>
                    <div className='font-medium text-black'>
                        <p>0.00 USD</p>
                    </div>
                </div>
            </div>

            <div className='p-[35px] '>
                <div className="absolute w-[250.82px] h-[200.33px]">
                    <img src={cardfour} alt="card" className='flex h-[180px]' />
                </div>
                <div className='relative top-3 left-6'>
                    <div className='font-semibold text-white'>
                        <p>PREDICTABILITY</p>
                    </div>
                    <div className='font-medium text-white'>
                        <p>Lorem Ipsum</p>
                    </div>
                    <div className='flex font-semibold  text-white space-x-2'>
                        <p>0.00313010</p>
                        <img src={downArrow} alt="down arrow" className='w-[7.9px] h-[7.9px] mt-2' />
                    </div>
                    <div className='font-medium text-white'>
                        <p>-0.050430 (-13.88%)</p>
                    </div>
                    <div className='font-medium text-white'>
                        <p>1,566 BTC</p>
                    </div>
                </div>
            </div>

             

        </div>
    )
}

export default Card
