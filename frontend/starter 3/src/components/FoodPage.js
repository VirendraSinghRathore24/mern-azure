import React, { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import FoodCard from './FoodCard';
import Spinner from './Spinner';
import baseUrl from '../baseUrl';

function FoodPage() {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [category, setCategory] = useState("All Food Reciepies");

    const location = useLocation();
    const sidebartitle = location.pathname.split("/").at(-1);

    async function fetchBlogsData(){
        setLoading(true);
        try{
  
          const result = await fetch(`${baseUrl}/getcardsbycategory`);
          const data = await result.json();

          console.log(data);

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

   async function selectHandler(e)
   {
      setCategory(e.target.value);

      const result = await fetch(`http://localhost:3002/getcardsbycategory?category=${e.target.value}`);
          const data = await result.json();

          console.log(data);

          setPosts(data.data);
   }

  return (
    <div >
    <p className='p-2'><strong><Link to="/">Home</Link> </strong> / Food</p>
    <div className='flex flex-col'>
        <div className='flex items-center gap-x-12 p-10 justify-center mx-auto'>
            <p>Category: </p>
            <select name="category" id='category' value={category}  onChange={selectHandler}  className='outline rounded-sm px-1 w-[400px] h-10'>           
            <option value="All-Food-Reciepies">All Baby Food Reciepies</option>
            <option value="Food-By-Months">Baby Food Reciepies by Months</option>
            <option value="Food-By-Puree">Baby Food Reciepies by Purees</option>
            </select>
        </div>
        
        <div>
            <p className='p-5 text-2xl'>{category.replaceAll("-", " ")}</p>
            <div className='grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 px-20 py-5 gap-x-10 gap-y-10'>
            {
                loading ? (<Spinner/>) :(
                posts.map((post, index) => (
                    <FoodCard key={index} post={post}/>
                )))
               } 
            </div>
        </div>

    </div>
    </div>
  )
}

export default FoodPage