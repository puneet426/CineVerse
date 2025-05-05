import React from 'react'
import loader from "/loader.gif"

function Loading() {
  return (
    <div className='w-screen h-screen flex items-center justify-center bg-black '>
        <h1 className='text-2xl font-black text-white'>CineVerse</h1>
        <img className='h-[50%]' src={loader} alt="" />
    </div>
  )
}

export default Loading