import React, { useRef, useState } from 'react'
import axios from 'axios';
import { toast } from 'react-hot-toast';
import Spinner from '../../components/Spinner'
//import { useLocation } from 'react-router-dom';
import JoditEditor from 'jodit-react';

function InsertBlog() {

    const [description, setDescription] = useState("");
    const [loading, setLoading] = useState(false);
    const [type, setType] = useState("");
    
    const [sidebarTitle, setSidebarTitle] = useState("");
    const [blogTitle, setBlogTitle] = useState("");
    
    const editor = useRef(null);

    async function submitHandler(e){
        e.preventDefault();
        try{
            setLoading(true);
            e.preventDefault();
    
            setType("Food blog is inserting...")
            const data = new FormData() ;
          
            data.append('sidebartitle', sidebarTitle.replace(" ", "-"));
            data.append('description', description);
            data.append('blogtitle', blogTitle);
    
            await axios.post("http://localhost:3002/insertblog", data);
        
            toast.success("Blog inserted Successfully!!!");
        }
        catch(err){
            console.log(err);
        }
        setLoading(false);
    }
    
  return (
    <div className='w-full'>
    {
        loading ? (<div className='mt-80 flex items-center justify-center'>
        <Spinner type={type}/>
        </div>) : (

    <form onSubmit={submitHandler}>
    <div className='flex flex-col mt-[100px]  w-11/12 px-40 h-[666px]'>
    <div>
        <p className='flex text-[30px] justify-center items-center mx-auto'>Food Blog writing...</p>
    </div>
        

        <div className='flex gap-x-6 py-3'>
            <p>Sidebar Title: </p>
            <input name="title" value={sidebarTitle} onChange={(e) => {setSidebarTitle(e.target.value)}} type='text' placeholder='Enter sidebar title' className='w-[400px] h-[30px] border-2 border-black '></input>
        </div>

        <div className='flex gap-x-12 py-3'>
            <p>Blog Title: </p>
            <input name="title" value={blogTitle} onChange={(e) => {setBlogTitle(e.target.value)}} type='text' placeholder='Enter blog title' className='w-[400px] h-[30px] border-2 border-black '></input>
        </div>
        
        <div className='flex gap-x-7 py-3'>
        <p>Description: </p>
        <div className='w-[1000px]'>
            <JoditEditor
                ref={editor}
                value={description}
                onChange={newContent => setDescription(newContent)}              
            />
           </div>
        </div>

        <div className='flex p-4 gap-x-80 ml-24'>
            <input type='submit' value="Publish" className='bg-green-500 h-10 w-[200px] font-semibold rounded-md text-richblack-700 hover:scale-110 transition duration-300 ease-in'></input>
        </div>
    </div>
   </form>
   )
    }
    </div>
    
  )
}

export default InsertBlog