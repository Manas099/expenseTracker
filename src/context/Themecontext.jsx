import { useState } from "react"
import { createContext } from "react"

const ThemeDataContext = createContext('light')

// const ThemeContext = (props) =>{

//     return (
//         <div>
//                 {props.children}
//         </div>
//     )
// }

export default ThemeDataContext