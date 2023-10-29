'use client'
import React from 'react'
import Button from './ui/Button'
import { useState } from 'react'
import {BsCheck2} from 'react-icons/bs'
import {AiOutlineCloseCircle} from 'react-icons/ai'
const Card = ({src}) => {
    const [value, setValue] = useState()
  return (
    <div className='flex flex-col w-[300px] relative items-center border border-black bg-gradient-to-r from-blue-200 to-cyan-200 shadow-2xl m-[20px] p-[10px] rounded-xl'>

        <img src={src} alt="" className=' rounded-xl w-[200px]' />
        <div className=' absolute top-0 flex justify-center items-center h-[70%] w-[100%]'>
            {value === false && <AiOutlineCloseCircle color='red' size={200}/>}
            {value &&  <BsCheck2 color='green' size={200}/>}
        </div>
        <div className='flex justify-around m-[10px]'>
        <Button onClick={()=> {setValue(val => val = false)}} type={'red'}>Ban</Button>
        <Button  onClick={()=> {setValue(val => val = true)}}>Pick</Button>
        </div>
    </div>
  )
}

export default Card