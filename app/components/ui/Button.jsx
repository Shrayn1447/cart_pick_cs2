import React, { Children } from 'react'

const Button = ({children, type , onClick}) => {
  return (
    <button 
    onClick={onClick}
    className={`border rounded p-[10px] w-[100px]
     transition-all
     ml-[10px]
     border-black
      hover:scale-[1.04] duration-200
     text-black font-bold 
    text-[20px] ${type === 'red' ? 'bg-red-300 hover:bg-red-400': ' bg-green-300 hover:bg-green-400'}`}>
        {children}
    </button>
  )
}

export default Button