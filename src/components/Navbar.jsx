import React from 'react'
import {Search,Sun,Moon} from "lucide-react"
import { useContext } from 'react'
import ThemeDataContext from '../context/Themecontext'


const Navbar = (props) => {
  const [theme, setTheme] = useContext(ThemeDataContext)
  console.log(theme)
  return (
    <div className='flex items-center gap-6 p-4 bg-blue-400 text-white '>
      <img className='h-15 rounded-full'src="https://plus.unsplash.com/premium_photo-1668902224113-cdfdbd4bde52?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGxvZ28lMjBleHBlbnNlJTIwdHJhY2tlcnxlbnwwfHwwfHx8MA%3D%3D" alt="Logo" />
      <h1>Expense Flow</h1>
       <div className="flex items-center pl-240">
       <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
      </button>
      </div>
      <div className='flex items-center gap-2'>
        <h2 >MS</h2>
      </div>



      
    </div>
  )
}

export default Navbar
