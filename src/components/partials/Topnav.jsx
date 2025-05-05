import React, { useState,useEffect } from 'react'
import axios from '../../utils/axios'
import { Link} from 'react-router-dom'
import noimage from '/noimage.jpg'

function Topnav() {
    const [query,setquery] =  useState("");
    const [searches,setsearches] = useState([]);
    const GetSerches = async () => {
        try{
          const {data} = await axios.get(`/search/multi?query=${query}`)
        setsearches(data.results);
        }
        catch(error){
          console.log("Error: ", error)
        }
      };
    
      useEffect(()=>{
        GetSerches();
      },[query])
   
  return (
    <div className="w-[60%] relative flex flex-col mx-auto mt-3 mb-3">
  
  <div className="flex items-center bg-[#27272a] px-5 py-3  rounded-full shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)]">
    <i className="text-zinc-400 text-2xl ri-search-line"></i>
    <input
      onChange={(e) => setquery(e.target.value)}
      value={query}
      className="flex-1 mx-4 bg-transparent text-zinc-100 text-lg placeholder-zinc-400 outline-none"
      type="text"
      placeholder="Search anything..."
    />
    
    {query.length > 0 && (
      <i
        onClick={() => setquery("")}
        className="text-zinc-400 text-2xl ri-close-fill cursor-pointer hover:text-zinc-200 transition"
      ></i>
    )}
  </div>

  
  {query.length > 0 && (
    <div className="w-[95%] max-h-[50vh] absolute z-10 bg-zinc-200 mt-14 overflow-auto rounded-lg shadow-md">
      {searches.map((s, i) => (
        <Link to={`/${s.media_type}/details/${s.id}`}
          key={i}
          className="font-semibold hover:text-zinc-900 hover:bg-zinc-300 duration-300 text-zinc-600 w-full px-4 py-3 flex items-center border-b border-zinc-300"
        >
          <img
            className="w-[10vh] h-[10vh] object-cover rounded mr-4 shadow"
            src={
              s.backdrop_path || s.profile_path
                ? `https://image.tmdb.org/t/p/original/${
                    s.backdrop_path || s.profile_path
                  }`
                : noimage
            }
            alt=""
          />
          <span>
            {s.name || s.title || s.original_title || s.original_name}
          </span>
        </Link>
      ))}
    </div>
  )}
</div>
  )
}

export default Topnav