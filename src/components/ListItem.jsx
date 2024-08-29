import React from 'react'
import "../css/ListItem.scss"
import { motion } from "framer-motion";

export default function ListItem({element}) {
    console.log(element)
    var dta=element.dateOfTast
    
  return (
    <motion.div className='list_item'
        initial={{ opacity: 0 , scale:0}}
        animate={{ opacity: 1, scale:1 }}
    >
        <div>
            <p className='name'>{element.name}</p>
            <p className='description'>{element.description}</p>
            <div className='rnd'>{element.nullam}</div>
        </div>
        <div className='date-pp'>
            <div className='date'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM16.2 16.2L11 13V7H12.5V12.2L17 14.9L16.2 16.2Z" fill="#1D2D35"/>
                </svg>
                <p className='dt'>{element.dateOfTast}</p>
                
            </div>
            <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </div>
    </motion.div>
  )
}
