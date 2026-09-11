import React from 'react'
import {LayoutDashboard, ScanLine, Wallet} from "lucide-react"
import {Link} from "react-router-dom"
const Sidebar = () => {
  return (
    <aside className='text-white w-70 bg-blue-400'>
        <Link to="/dashboard" className="pb-4 pl-4 pt-10 flex items-center gap-2">
         <LayoutDashboard />
         <h1>Dashboard</h1>
      </Link>
        <Link to="/transaction" className="pb-4 pl-4 flex items-center gap-2">
        <ScanLine /><h1>Transactions</h1>
        </Link>
        <Link to="/wallet" className="pb-4 pl-4 flex items-center gap-2">
        <Wallet /><h1>Wallet</h1>
        </Link>
    </aside>
    
  )
}

export default Sidebar
