import React from 'react'
import Donut from './Charts/Donut'
import Bar from './Charts/Bar'
const Dashboard = () => {
  return (
    <div>
    <div className='pl-5 pt-5 text-xl bg-white h-16'>
      <h1>Dashboard</h1>
    </div>
    <div className='text-white grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 wrap mt-5 ml-5 pl-2 pr-2'>
      <div className='w-40 h-25 bg-white text-black text-center rounded-md'>
        <h2 className='pt-4'>Total balance</h2>
        <h3 className='pt-5'>$34,200</h3>
      </div>
      <div className='w-40 h-25 bg-white text-black text-center rounded-md'>
        <h2 className='pt-4'>Income</h2>
        <h3 className='pt-5'>+$45,000</h3>
      </div>
      <div className='w-40 h-25 bg-white text-black text-center rounded-md'>
        <h2 className='pt-4'>Expenses</h2>
        <h3 className='pt-5'>-$10,400</h3>
      </div>
      <div className='w-40 h-25 bg-white text-black text-center rounded-md'>
        <h2 className='pt-4'>Monthly Savings</h2>
        <h3 className='pt-5'>+$4,100</h3>
      </div>
    </div>
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 wrap mt-5 ml-5'>
      <div>
      <Donut/>
      </div>
       <div>
        <Bar/>
      </div>
      </div>
    </div>
  
  )
}

export default Dashboard
