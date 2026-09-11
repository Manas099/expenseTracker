import React from 'react'
import {Plus,Pencil,Trash2} from "lucide-react"
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import {AddTransactionDialog} from './Popup/Addtrans' 

export default function Transaction () {
  const [transactions, setTransactions] = useState([])
  const [dialogOpen, setDialogOpen] = useState(false)

const handleAddTransaction = (newTx) => {
  setTransactions((prev) => [newTx, ...prev])
 }
  return (
    <><div className='flex justify-between items-center bg-white h-16  shadow-md'>
      <div className='pl-5 pt-5 text-xl  w-50'>
        <h1>Transaction</h1>
      </div>
      <div className="p-4">
      <div className="flex items-center justify-between mb-4">
        <Button onClick={() => setDialogOpen(true)}>
          <Plus className="w-4 h-4 mr-2" />
          Add Transaction
        </Button>
      </div>
      <AddTransactionDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        onAdd={handleAddTransaction}
      />
    </div>
    </div>
    <div>
      <input type="text" placeholder='Search Description' className='border-2 placeholder-white border-gray-300 rounded-md p-2 m-5 w-70' />
      <select className='border-2 text-white border-gray-300 rounded-md p-2 m-5 w-70'>
        <option value='all'>All Categories</option>
      </select>
      </div>
      <div className='pl-10 pr-10 pt-5 w-full overflow-x-auto'>
        <table className='bg-white w-full table-fixed border-collapse border border-gray-400'>
          <thead>
            <tr className='border-b border-gray-200 dark:border-gray-700'>
              <th className='py-3 px-4 text-sm font-medium border-gray-300 '>Date</th>
              <th className='py-3 px-4 text-sm font-medium border-gray-300 '>Description</th>
              <th className='py-3 px-4 text-sm font-medium border-gray-300 '>Category</th>
              <th className='py-3 px-4 text-sm font-medium border-gray-300 '>Amount</th>
              <th className='py-3 px-4 text-sm font-medium border-gray-300 '>Action</th>
            </tr>
          </thead>
          <tbody>
               <tr className='border-b border-gray-200 dark:border-gray-700 text-center'>
              <td>06/28</td>
              <td>Monthly pay </td>
              <td> Salary</td>
              <td> +$5000 </td>
              <td className='flex pl-4 justify-center gap-2 pr-4'> <Pencil /> <Trash2 /></td>
            </tr>
            <tr className='border-b border-gray-200 dark:border-gray-700 text-center'>
              <td>06/27</td>
              <td>Uber Rider</td>
              <td>Transit</td>
              <td> -$24</td>
              <td className='flex pl-4 justify-center gap-2 pr-4'> <Pencil /> <Trash2 /></td>
            </tr>
           </tbody>
          
        </table>
      </div>
      </>
  )
}
