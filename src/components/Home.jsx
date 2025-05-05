import React, { useEffect, useState } from 'react'
import Sidenav from './partials/Sidenav'
import Topnav from './partials/Topnav'
import axios from '../utils/axios'
import Header from './partials/Header'
import Horizontalcards from './partials/Horizontalcards'
import Dropdown from './partials/Dropdown'
import Loading from './Loading'


function Home() {
    document.title = "CineVerse| Homepage"
    const [wallpaper,setwallpaper] = useState(null);
    const [trending,settrending] = useState(null);
    const [category,setcategory] = useState("all");

    const GetHeaderWallpaper = async () => {
        try{
          const {data} = await axios.get(`/trending/all/day`)
          
         let randomdata = data.results[(Math.random()*data.results.length).toFixed()]
          setwallpaper(randomdata);
        }
        catch(error){
          console.log("Error: ", error)
        }
      };

    const GetTrending = async () => {
        try{
          const {data} = await axios.get(`/trending/${category}/day`)
          settrending(data.results);
        }
        catch(error){
          console.log("Error: ", error)
        }
      };

      
     useEffect(()=>{
        !wallpaper && GetHeaderWallpaper();
       GetTrending();
     },[category])
    

  return wallpaper && trending ? (  
    <>
   <Sidenav/>
    <div className='w-[80%] h-full overflow-auto overflow-x-hidden '>
        <Topnav/>
        <Header data={wallpaper}/>

        <div className='p-5 flex justify-between'>
    <h1 className=' text-3xl text-zinc-300 font-semibold'>Trending</h1>


     <Dropdown title="Filter" options={["tv","movie","all"]} fun={(e)=>setcategory(e.target.value)}  />

    </div>
    

        <Horizontalcards data={trending}  />
    </div>
    </>
   
  ):<Loading/>

}

export default Home