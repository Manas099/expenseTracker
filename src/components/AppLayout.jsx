import React, { useState } from 'react'
import Navbar from './Navbar'
import  Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
import ThemeDataContext from '../context/Themecontext'

const AppLayout = () => {
    const [theme, setTheme] = useState('light')
  return (
    <div className='w-screen h-screen overflow-x-hidden bg-gray-100 dark:bg-gray-900'>
      <ThemeDataContext.Provider value={[theme, setTheme]}>
        <Navbar/>
      </ThemeDataContext.Provider>
      <div className='flex flex-1 h-full overflow-hidden'>
        <Sidebar/>
        <main className='flex-1 h-full overflow-y-auto w-60'>
            <Outlet />
        </main> 
      </div>
    </div>
  )
}

export default AppLayout
