
import React from 'react'
import {Link} from "react-router-dom"


function Sidenav() {
  

  return (
    <div className='w-[20%] h-full border-r-2 border-zinc-400 p-10'>
        <h1 className='text-2xl text-white font-bold flex '>
        
        <img className='mr-3 w-[35px] h-[35px]' src="/CineVerse2.png" alt="" /> 
            <span className='text-2xl text-white'>CineVerse</span>
        </h1>
        <nav className='flex flex-col text-zinc-400 text-xl gap-2'>
        <h1 className='text-white font-semibold text-xl mt-10 mb-5 '>New Feeds</h1>
        <Link to="/trending" className='hover:bg-[#6556CD] hover:text-white p-2 rounded-lg duration-300 ' ><i class="mr-2 ri-fire-fill"></i>Trending</Link>
        <Link to="/popular"  className='hover:bg-[#6556CD] hover:text-white p-2 rounded-lg duration-300 ' ><i class="mr-2 ri-bard-fill"></i> Popular</Link>
        <Link to="/movie" className='hover:bg-[#6556CD] hover:text-white p-2 rounded-lg duration-300 ' ><i class="mr-2 ri-movie-ai-fill"></i> Movies</Link>
        <Link to="/tv" className='hover:bg-[#6556CD] hover:text-white p-2 rounded-lg duration-300 ' ><i class="mr-2 ri-tv-2-fill"></i>Tv shows</Link>
        <Link to="/person" className='hover:bg-[#6556CD] hover:text-white p-2 rounded-lg duration-300 ' ><i class="mr-2 ri-team-fill"></i>Actors</Link>
        </nav>
        <hr className='mt-5 text-zinc-100' /> 
        <nav className='flex flex-col text-zinc-400 text-xl gap-2'>
        <h1 className='text-white font-semibold text-xl mt-5 mb-5 '>Website Information</h1>
        <Link to="/about"  className='hover:bg-[#6556CD] hover:text-white p-2 rounded-lg duration-300 ' ><i class=" mr-2 ri-information-fill"></i>About</Link>
        <Link to="/contact" className='hover:bg-[#6556CD] hover:text-white p-2 rounded-lg duration-300 ' ><i class="mr-2 ri-phone-fill"></i>Contact Us</Link>
       
        
        </nav>
    </div>
  )
}

export default Sidenav