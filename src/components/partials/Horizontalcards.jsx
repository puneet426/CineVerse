import React from 'react'
import { Link } from 'react-router-dom'
import noimage from '/noimage.jpg'

function Horizontalcards({data}) {
  return (
    

   

        <div className='w-[100%]  flex overflow-y-hidden mb-5 p-5'>

        {data.length>0 ? data.map((d,i)=> (
            <Link to={`/${d.media_type}/details/${d.id}`} key={i} className='min-w-[15%] h-[40vh] mr-5 mb-5 bg-zinc-900  '>
                <img className='w-full h-[45%] object-cover' src={d.backdrop_path||d.poster_path ? `https://image.tmdb.org/t/p/original/${d.backdrop_path||d.poster_path}`:noimage} alt="" />
                <div className='text-white p-3 h-[55%] overflow-y-auto'>
                <h1 className=' text-[17px] font-bold '>{d.name||d.title||d.original_title||d.original_name}</h1>
                <p className='text-zinc-300 mt-3 mb-3 '>{d.overview.slice(0,50)}  ...<Link className='text-blue-300'>more</Link></p>
                </div>
              
            </Link>
        )  ): <h1 className='text-2xl text-white font-bold'>Nothing to Show</h1> }

        </div>
   
  )
}

export default Horizontalcards