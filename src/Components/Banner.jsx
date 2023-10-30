import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import instance from '../Instance'

import './Banner.css'
function Banner({fetchURL}) {
    const [original,setOriginal] = useState()
    const base_url = "https://image.tmdb.org/t/p/original/";

    console.log(fetchURL);
    const fetchData = async ()=>{
        const {data} = await instance.get(fetchURL)
        setOriginal(data.results[Math.floor(Math.random()*data.results.length)]);

    }
    console.log(original);
    useEffect(()=>{
        fetchData()
    },[])
  return (
    <div style={{height:'600px',backgroundImage:`url(${base_url}${original?.backdrop_path})`,backgroundAttachment:"fixed",
    backgroundSize:"cover"}}>
  
    <div className="banner-content">
        <h1>{original?.name}</h1>
       
        <button className=' me-3 btn btn-danger' >Play<i className='fa-solid fa-play'></i></button>
<button className='btn btn-outline-light '>More Info<i className='fa-solid fa-caret-down'></i></button>
        <h2>{original?.overview.slice(0,200)}...</h2>
</div>
    </div>
  )
}

export default Banner