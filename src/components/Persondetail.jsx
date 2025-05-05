import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from "react-redux"
import { Link, Outlet, useLocation, useNavigate, useParams } from 'react-router-dom'
import { asyncloadperson, removeperson } from '../actions/personActions'
import Loading from './Loading';
import Horizontalcards from './partials/Horizontalcards'
import Dropdown from '../components/partials/Dropdown'

function Persondetail() {
  const [category,setcategory] = useState("movie")
  const { pathname } = useLocation()
   const navigate = useNavigate();
   const {id} = useParams()
  const {info} =  useSelector(state=>state.person)
   const dispatch = useDispatch()
   
   useEffect(()=>{
     dispatch(asyncloadperson(id));
     return()=>{
       dispatch(removeperson());
     }
   },[id])

   return info? (
    <div className='px-[10%]  w-screen flex flex-col h-[180vh] bg-[#1F1E24]  '>

 <nav className='w-full  text-zinc-100 h-[10vh] flex gap-10 items-center text-xl '>

      <Link onClick={()=>navigate(-1)} class="hover:text-[#6556CD] mr-3 ri-arrow-left-line"></Link>
     

      </nav>
     

    <div className='w-full flex l'>
      {/* Part 2 left poster and details */}
      <div className='w-[20%]' >
      <img className=' shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] h-[40vh] object-cover ' loading="lazy" src={`https://image.tmdb.org/t/p/original/${info.detail.profile_path}`} alt="" />
      <hr className='mt-10 mb-5 border-none h-[1px] bg-zinc-500 ' />
      <div className='text-2xl flex gap-x-5 text-white'>
     
      <a target='_blank' href={`https://www.facebook.com/${info.externalid.facebook_id}`}><i class=" hover:text-[#9f91ff] ri-facebook-fill"></i></a>
      <a target='_blank' href={`https://www.instagram.com/${info.externalid.instagram_id}`}><i class=" hover:text-[#9f91ff] ri-instagram-fill"></i></a>
      <a target='_blank' href={`https://www.x.com/${info.externalid.twitter_id}`}><i class=" hover:text-[#9f91ff] ri-twitter-x-fill"></i></a>
      <a target='_blank' href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}><i class=" hover:text-[#9f91ff]  ri-earth-fill"></i></a>
      
    
      </div>
      {/* Personal info */}
      <h1 className='text-2xl text-zinc-400 font-semibold my-5 '>Person Info</h1>
      <h1 className='text-lg text-zinc-400 font-semibold '>Known For</h1>
      <h1 className=' text-zinc-300  '>{info.detail.known_for_department}</h1>
      <h1 className='text-lg text-zinc-400 font-semibold mt-3 '>Gender</h1>
      <h1 className=' text-zinc-300  '>{info.detail.gender===2 ?"Male":"Female" }</h1>
      <h1 className='text-lg text-zinc-400 font-semibold mt-3 '>Birthday</h1>
      <h1 className=' text-zinc-300  '>{info.detail.birthday}</h1>
      <h1 className='text-lg text-zinc-400 font-semibold mt-3 '>Also Known As</h1>
      <h1 className=' text-zinc-300  '>{info.detail.also_known_as.join(",")}</h1>
      
      </div>

      {/* Part 3 right details and information */}
      <div className='w-[80%] ml-[5%]'>
      <h1 className='text-6xl text-zinc-100 font-black my-5 '>{info.detail.name}</h1>
      <h1 className='text-xl text-zinc-200 font-semibold mt-5 '>Biography</h1>
      <p className='text-zinc-400 mt-3'>{info.detail.biography}</p>

      <h1 className='text-lg text-zinc-200 font-semibold mt-5 '>Known For</h1>
      <Horizontalcards data={info.combinedCredits.cast} />

      <div className='w-full flex justify-between '>
      <h1 className='text-xl text-zinc-200 font-semibold mt-5 '>Acting</h1>
      <Dropdown title="Category" options={["tv","movie"]} func={(e)=> setcategory(e.target.value)} />

      </div>
      <div className='list-disc text-zinc-400 w-full h-[50vh] overflow-x-hidden overflow-y-auto shadow-xl shadow-[rgba(255,255,255,.3)] border-2 border-zinc-700 p-5 mt-5'>
        
        {info[category+"Credits"].cast.map((c,i)=>(
             <li key={i} className='hover:text-white p-5 hover:bg-[#19191d] rounded duration-300 cursor-pointer'>
             <Link to={`/${category}/details/${c.id}`} className=''>
             <span>{c.name||c.title||c.original_title||c.original_name}</span>
             <span className='block mt-3'>{c.character && 
              `Character Name: $ {c.character}`}</span>
             </Link>
             </li>
        )
        )}
        
       
      </div>

      </div>

    </div>




      


      </div>
   ):<Loading/>
 }

export default Persondetail