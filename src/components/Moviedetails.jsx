import React, { useEffect } from 'react'
import {useDispatch, useSelector} from "react-redux"
import { Link, Outlet, useLocation, useNavigate, useParams } from 'react-router-dom'
import { asyncloadmovie, removemovie } from '../actions/movieActions'
import Loading from './Loading';
import Horizontalcards from './partials/Horizontalcards'

function Moviedetails() {
 const { pathname } = useLocation()
  const navigate = useNavigate();
  const {id} = useParams()
 const {info} =  useSelector(state=>state.movie)
  const dispatch = useDispatch()
  console.log(info)
  useEffect(()=>{
    dispatch(asyncloadmovie(id));
    return()=>{
      dispatch(removemovie());
    }
  },[id])
  return info ? (
    <div  style={{
      background:`linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.7),rgba(0,0,0,.9)),url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path})`,
      backgroundPosition:"top 10%",
     backgroundSize: "cover",
     backgroundRepeat:'no-repeat',
     boxShadow: "8px 17px 38px 2px rgba(0, 0, 0, 0.5)"
    
  }}  className='relative w-screen min-h-[150vh] px-[10%]  '>
        {/* part 1 navigation */}
      <nav className='w-full h-[10vh] text-zinc-100 flex gap-10 items-center text-xl '>

      <Link onClick={()=>navigate(-1)} class="hover:text-[#6556CD] mr-3 ri-arrow-left-line"></Link>
      <a target='_blank' href={info.detail.homepage}><i class="hover:text-[#9f91ff] ri-external-link-fill"></i></a>
      <a target='_blank' href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}><i class=" hover:text-[#9f91ff]  ri-earth-fill"></i></a>
      
      <a target='_blank' className='hover:text-[#9f91ff]'  href={`https://www.imdb.com/title/${info.externalid.imdb_id}/`}>imdb</a>

      </nav>
      
       {/* part 2 Posters and Details */}

       <div className='w-full flex'>
       <img className=' shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] h-[65vh] object-cover ' loading="lazy" src={`https://image.tmdb.org/t/p/original/${info.detail.poster_path||info.detail.backdrop_path}`} alt="" />
        <div className='content ml-[5%] text-white'>
          <h1 className='text-5xl font-black text-white'>{info.detail.name||info.detail.title||info.detail.original_title||info.detail.original_name} <small className='text-2xl font-bold text-zinc-200'>({info.detail.release_date.split("-")[0]})</small> </h1>

        <div className='mt-3 mb-5 flex text-white items-center gap-x-5 gap-y-10'>
        <span className='text-white  text-[16px] font-semibold w-[5vh] h-[5vh] bg-yellow-600 rounded-full flex justify-center items-center '>{(info.detail.vote_average*10).toFixed()} <sup>%</sup> </span>
        <h1 className='font-semibold text-xl w-[60px] leading-6'>User Score</h1>
        <h1>{info.detail.release_date}</h1>
        <h1>{info.detail.genres.map((g)=>g.name).join(",")}</h1>
        
        <h1>{info.detail.runtime}min</h1>
        </div>
          
          <h1 className='text-xl font-semibold italic text-zinc-300'>{info.detail.tagline}</h1>

          <h1 className='text-2xl font-semibold mb-3 mt-5 text-white '>Overview</h1>
         <p>{info.detail.overview}</p>

          <h1 className='text-2xl font-semibold mb-3 mt-5 text-white '>Movie Translated</h1>
         <p className='mb-5'>{info.translations.join(", ")}</p>
         
          
         <Link className='bg-[#6556CD] p-3 text-white font-semibold mt-5 rounded-md' to={`${pathname}/trailer`} ><i class="text-xl mr-2 ri-play-fill"></i>Play Trailer</Link>

        </div>
        </div>
 {/* part 3 Available on Platforms */}
        <div className='w-[80%] flex flex-col gap-y-5 mt-5 '>
        
        {info.watchproviders &&
           info.watchproviders.flatrate &&( <div className='flex gap-x-5 items-center text-white'>
            <h1>Available on Platforms</h1>
            {info.watchproviders.flatrate.map((w) => (
             <img title={w.provider_name} className='w-[5vh] h-[5vh] object-fit rounded-md'
             src={`https://image.tmdb.org/t/p/original/${w.logo_path}`} 
             alt="" 
              />
               )) }
           </div>) }
        {info.watchproviders &&
           info.watchproviders.rent &&( <div className='flex gap-x-5 items-center text-white'>
            <h1>Available on Rent</h1>
            {info.watchproviders.rent.map((w) => (
             <img title={w.provider_name} className='w-[5vh] h-[5vh] object-fit rounded-md'
             src={`https://image.tmdb.org/t/p/original/${w.logo_path}`} 
             alt="" 
              />
               )) }
           </div>) }

            


         
        </div>

        {/* part 4 recommendations and similar */}
        <hr className='mt-10 mb-5 border-none h-[1px] bg-zinc-500 ' />
        <h1 className='text-2xl font-semibold text-white'>Recommendations & Similar Stuff</h1>

        <Horizontalcards data={info.recommendations.length>0 ? info.recommendations:info.similar}/>
        

          <Outlet/>
       </div>

       
      

    
  ):<Loading/>
}

export default Moviedetails