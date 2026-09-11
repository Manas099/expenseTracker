import React from 'react'
import {Plus,Pencil,Trash2} from "lucide-react"
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import {AddTransactionDialog} from './Popup/Addtrans' 

export default function Transaction () {
 const [transactions, setTransactions] = useState(() => {
const savedTransactions = localStorage.getItem("transactions")
return savedTransactions ? JSON.parse(savedTransactions) : []
})

const [dialogOpen, setDialogOpen] = useState(false)

const handleAddTransaction = (newTx) => {
 setTransactions((prev) => {
const updatedTransactions = [newTx, ...prev]
localStorage.setItem(
"transactions",
JSON.stringify(updatedTransactions)
)

console.log("Transactions:", updatedTransactions)
return updatedTransactions
})
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
{transactions.map((transaction) => (
<tr
key={transaction.id}
className="border-b border-gray-200 dark:border-gray-700 text-center"
>
<td className="py-3 px-4">
{transaction.date}
</td>
<td className="py-3 px-4">
{transaction.description}
</td>
<td className="py-3 px-4">
{transaction.category}
</td>
<td
className={`py-3 px-4 font-medium {
transaction.type === "Credit"
? "text-green-600"
: "text-red-600"
}`}
>
{transaction.type === "Credit" ? "+" : "-"}₹
{Math.abs(transaction.amount)}
</td>
<td className="py-3 px-4">
<div className="flex justify-center gap-3">
<button
className="cursor-pointer"
onClick={() => console.log("Edit:", transaction)}
>
<Pencil size={18} />
</button>
<button
className="cursor-pointer"
onClick={() => console.log("Delete:", transaction)}
>
<Trash2 size={18} />
</button>
</div>
</td>
</tr>
))}
</tbody>
        </table>
      </div>
      </>
  )
}
