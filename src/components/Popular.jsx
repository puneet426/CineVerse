import React, { useCallback, useEffect, useState } from 'react'
import {useNavigate } from 'react-router-dom'
import axios from '../utils/axios'
import Cards from './partials/Cards';
import Loading from './Loading'
import InfiniteScroll from 'react-infinite-scroll-component';
import Topnav from './partials/Topnav';
import Dropdown from './partials/Dropdown';

function Popular() {
    const navigate = useNavigate();
    const [category,setcategory] = useState("movie")
    const [popular,setpopular] = useState([])
    const [page,setpage] = useState(1)
    const [hasMore,sethasMore] = useState(true)
    document.title = "CineVerse | Popular " + category.toUpperCase();


    const GetPopular = useCallback(async () => {
        try{
          const {data} = await axios.get(`${category}/popular?page=${page}`)
         
          // setpopular(data.results);
          if(data.results.length>0){
            setpopular((prevState)=>[...prevState,...data.results]);
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
        if(popular.length ===0){
          GetPopular()
        }else{
          setpage(1);
          setpopular([])
          GetPopular();
        }
      }
      

      useEffect(()=>{
        refreshHandler()
      },[category])
      
  return popular.length>0 ? (
    <div className=' w-screen h-screen '>
        <div className='px-[5%] w-full  flex items-center justify-between'>
            
            <h1 className='text-2xl text-zinc-400 font-semibold '><i onClick={()=>navigate(-1)} class="hover:text-[#6556CD] mr-3 ri-arrow-left-line"></i>Popular</h1>
           <div className='flex items-center w-[80%] '>
           <Topnav/>
            <Dropdown title="Category" options={["movies","tv"]} fun={(e)=> setcategory(e.target.value)} />
            
            
           </div>
        </div>

        <InfiniteScroll dataLength={popular.length} next={GetPopular} hasMore={hasMore} loader={<h1>Loading..</h1>}>
        <Cards data={popular} title={category} />
        </InfiniteScroll>

      


    </div>
  ):(
    <Loading/>
  )
}

export default Popular