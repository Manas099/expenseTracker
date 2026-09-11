import React from 'react'
import {Plus} from "lucide-react"
import Card from './Card'

const Wallet = () => {
  return (
    <div>
      <div className='flex justify-between items-center bg-white h-16  shadow-md'>
        <div className='pl-5 pt-5 text-xl  w-50'>
          <h1>Wallet</h1>
        </div>
        <div className=' pr-5 pt-5'>
          <button className='flex'>
            <Plus /> Add Budget
          </button>
        </div>
      </div>
      <div className='flex'>
        <Card/>
        <Card/>
        </div>
      
    </div>
  )
}

export default Wallet
