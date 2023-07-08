import React, { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import baseUrl from '../baseUrl';

function BlogPage() {

    const [post, setPost] = useState([]);
    const [loading, setLoading] = useState(false);

    const location = useLocation();
    const sidebartitle = location.pathname.split("/").at(-1);

    async function fetchBlogsData(){
        setLoading(true);
        try{
  
          const result = await fetch(`${baseUrl}/getblog?sidebartitle=${sidebartitle.replace(" ", "-")}`);
          const data = await result.json();

          setPost(data.data);
  
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
    <div className='flex w-full'>
        
        <div className='flex flex-col'>
            <p className='p-2 text-[14px]'><strong className='font-semibold '><NavLink to="/"> Home </NavLink>/ <NavLink to="/food"> Food  </NavLink></strong>  / {post.sidebartitle}</p>
            <div className='flex flex-col p-5'>
                <p className='font-semibold text-2xl underline'>{post.blogtitle}</p>
                <div className="text-justify align-baseline leading-8 text-base font-normal text-[17px] py-3">
                {                
                    <span dangerouslySetInnerHTML={{__html: post.description}} />
                }
                </div>
            </div>
        </div>
    </div>
  )
}

export default BlogPage