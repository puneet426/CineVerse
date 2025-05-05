import React, { useCallback, useEffect, useState } from 'react'
import {useNavigate } from 'react-router-dom'
import axios from '../utils/axios'
import Cards from './partials/Cards';
import Loading from './Loading'
import InfiniteScroll from 'react-infinite-scroll-component';
import Topnav from './partials/Topnav';
import Dropdown from './partials/Dropdown';

function People() {

    const navigate = useNavigate();
    const [category,setcategory] = useState("popular")
    const [person,setperson] = useState([])
    const [page,setpage] = useState(1)
    const [hasMore,sethasMore] = useState(true)
    document.title = "CineVerse | Persons " 


    const GetPerson = useCallback(async () => {
        try{
          const {data} = await axios.get(`/person/${category}?page=${page}`)
         
          // setperson(data.results);
          if(data.results.length>0){
            setperson((prevState)=>[...prevState,...data.results]);
            setpage(page+1)
          }
          else{
            sethasMore(false)
          }
        }
        catch(error){
          console.log("Error: ", error)
        }
      },[category,page])

      

      const refreshHandler = ()=>{
        if(person.length ===0){
          GetPerson()
        }else{
          setpage(1);
          setperson([])
          GetPerson();
        }
      }
      

      useEffect(()=>{
        refreshHandler()
      },[category])

  return person.length>0 ? (
    <div className=' w-screen h-screen '>
        <div className='px-[5%] w-full  flex items-center justify-between'>
            
            <h1 className='text-2xl text-zinc-400 font-semibold '><i onClick={()=>navigate(-1)} class="hover:text-[#6556CD] mr-3 ri-arrow-left-line"></i>Actors<small className='ml-2 text-sm text-zinc-600'>({category})</small></h1>
           <div className='flex items-center w-[80%] '>
           <Topnav/>
             
            
            
           </div>
        </div>

        <InfiniteScroll dataLength={person.length} next={GetPerson} hasMore={hasMore} loader={<h1>Loading..</h1>}>
        <Cards data={person} title="person" />
        </InfiniteScroll>

      


    </div>
  ):(
    <Loading/>
  )
}

export default People