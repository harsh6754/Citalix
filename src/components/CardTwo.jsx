import React from 'react'

const CardTwo = () => {
  return (
    <div className='flex justify-center items-center space-x-10 '>
        <div className='border border-[#6D6D6D] w-[289.63px] h-[250.45px] rounded-[10px] p-[21.61px] drop-shadow-[0_35px_35px_rgba(0,0,0,0.75)] bg-blue-500'>
            <div className='w-[15.13px] h-[15.13px] rounded-full bg-[#26D75A] ml-auto'></div>
            <p className='font-semibold text-[16px] pb-[10.81px]'>On Time</p>
            <div className='flex'>
                <p>Completed Iteratiions</p>
                <p className='ml-auto font-semibold'>7</p>
            </div>
            <div className='flex'>
                <p>Total Iterations</p>
                <p className='ml-auto font-semibold'>9</p>
            </div>
            <div className='flex'>
                <p>% Iterations Done</p>
                <p className='ml-auto font-semibold'>77.8%</p>
            </div>
        </div>

        <div className='border border-[#6D6D6D] w-[300.63px] h-[250.45px] rounded-[10px] p-[21.61px] drop-shadow-[0_35px_35px_rgba(0,0,0,0.75)] bg-red-400'>
            <div className='w-[15.13px] h-[15.13px] rounded-full bg-[#26D75A] ml-auto'></div>
            <p className='font-semibold text-[16px] pb-[10.81px]'>On Scope</p>
            <div className='flex'>
                <p>Story Points Done</p>
                <p className='ml-auto font-semibold'>3200</p>
            </div>
            <div className='flex'>
                <p>Total Story Points</p>
                <p className='ml-auto font-semibold'>4230</p>
            </div>
            <div className='flex'>
                <p>% Stories Done</p>
                <p className='ml-auto font-semibold'>70.9%</p>
            </div>
        </div>

        <div className='border border-[#6D6D6D] w-[289.63px] h-[250.45px] rounded-[10px] p-[21.61px] drop-shadow-[0_35px_35px_rgba(0,0,0,0.75)] bg-purple-400'>
            <div className='w-[15.13px] h-[15.13px] rounded-full bg-[#FF6E66] ml-auto'></div>
            <p className='font-semibold text-[16px] pb-[10.81px]'>On Velocity</p>
            <div className='flex'>
                <p>Average Velocity</p>
                <p className='ml-auto font-semibold'>428.6</p>
            </div>
            <div className='flex'>
                <p>Required Velocity</p>
                <p className='ml-auto font-semibold'>615.0</p>
            </div>

        </div>
    </div>
  )
}

export default CardTwo
