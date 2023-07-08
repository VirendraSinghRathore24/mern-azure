import React, { useEffect, useState } from 'react'
import Spinner from "../components/Spinner"
import { NavLink } from 'react-router-dom'
import Card from './Card'

function HomePage() {
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);

    async function fetchBlogsData(){
        setLoading(true);
        try{
  
          const result = await fetch("http://localhost:3002/cards");
          const data = await result.json();
           
            console.log(result);
            setPosts(data.data);
  
        }
        catch(err){
          console.log(err);
        }
        setLoading(false);
      }
      
      useEffect(() => {
        fetchBlogsData();
      },[])

  return (
    <div className='pointer-events-none'>
        <div className=''>
        <div className='flex relative'>
            <img src='https://res.cloudinary.com/dixqxdivr/image/upload/v1688580884/rudra2_yhh4ch.jpg' className='pointer-events-auto w-full h-[420px] '/>
            
            
        </div>
           
            
        </div>
        <div>
        <p className='text-md font-light py-3 px-10'><strong className='font-semibold text-richblack-700'>To Know More About Baby Food Reciepies, Cloths, Toys and many more... </strong></p>
            <div className='grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 px-20 py-5 gap-x-10 gap-y-10'>
            {
                loading ? (<Spinner/>) :(
                posts.map((post, index) => (
                    <Card key={index} post={post}/>
                )))
               } 
            </div>
        </div>
    </div>
  )
}

export default HomePage