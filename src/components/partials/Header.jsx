import React from 'react'
import { Link } from 'react-router-dom'

function Header({data}) {
    
  return (
    <div
    
     style={{
        background:`linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.7),rgba(0,0,0,.9)),url(https://image.tmdb.org/t/p/original/${data.backdrop_path})`,
        backgroundPosition:"top 10%",
       backgroundSize: "cover",
       backgroundRepeat:'no-repeat',
       boxShadow: "8px 17px 38px 2px rgba(0, 0, 0, 0.5)"
      
    }} className='w-full h-[70vh] flex flex-col justify-end items-start   p-[5%]'>
        <h1 className='w-[70%] text-5xl font-black text-white'>{data.name||data.title||data.original_title||data.original_name}</h1>
        <p className='w-[70%] mt-3 mb-3 text-zinc-300'>{data.overview.slice(0,200)}  ...<Link to={`/${data.media_type}/details/${data.id}`} className='text-blue-300'>more</Link></p>
        <p className='text-white flex'>
        <i class="text-yellow-600 ri-megaphone-fill"></i>{data.release_date||"No Information"}
        <i class="ml-5 text-yellow-600 ri-album-fill"></i>{data.media_type.toUpperCase()}
        </p>
        <Link to={`/${data.media_type}/details/${data.id}/trailer`} className='bg-[#6556CD] p-2 text-white font-semibold mt-5 rounded-md'>Watch Trailer</Link>
    </div>
  )
}

export default Header