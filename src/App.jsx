import React from 'react'
import AppLayout from './components/AppLayout'
import {Routes, Route} from "react-router-dom"
import Dashboard from './components/Dashboard'
import Transaction from './components/Transaction'
import Wallet from './components/Wallet'
const App = () => {
  
  return (
    <div>
    <Routes>
       <Route path='/' element={<AppLayout />}>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/transaction' element={<Transaction />} />
        <Route path='/wallet' element={<Wallet />} />
      </Route>
    </Routes>
    </div>
  )
}

export default App
