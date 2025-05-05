import React from 'react'
import {Link} from "react-router-dom"
import noimage from '/noimage.jpg'

function Cards({data,title}) {
  console.log(title)
  return (
    <div className='flex flex-wrap w-full h-full px-[5%] mt-[5px] bg-[#1F1E24] '>
        {data.map((c,i)=> (
            <Link to={`/${c.media_type || title}/details/${c.id}`} className=' relative w-[25vh] mr-[5%] mb-[5%]  ' key={i}>
                <img className=' shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] h-[40vh] object-cover ' loading="lazy" src={c.poster_path||c.backdrop_path||c.profile_path ? `https://image.tmdb.org/t/p/original/${c.poster_path||c.backdrop_path||c.profile_path}`:noimage} alt="" />
           <h1 className='text-xl text-zinc-300 mt-3 font-semibold'>
           {c.name||c.title||c.original_title||c.original_name}
           </h1>

          {c.vote_average &&
          <div className='text-white absolute right-[-10%] bottom-[25%] text-[16px] font-semibold w-[5vh] h-[5vh] bg-yellow-600 rounded-full flex justify-center items-center '>{(c.vote_average*10).toFixed()} <sup>%</sup> </div>
          }

          

            </Link>
        ) )}
    </div>
  )
};

export default Cards;
