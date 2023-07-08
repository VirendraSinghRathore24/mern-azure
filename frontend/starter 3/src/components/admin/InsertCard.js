import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios';
import { toast } from 'react-hot-toast';
import Spinner from '../../components/Spinner'

function InsertCard() {

    const [title, setTitle] = useState("");
    const [shortDesc, setShortDesc] = useState("");
    const [loading, setLoading] = useState(false);
    const [type, setType] = useState("");
    const [selectedFile, setSelectedFile] = useState("");
   
    async function submitHandler(e){
        try{
            setLoading(true);
            e.preventDefault();
    
            setType("Card Inserting...")

            const data = new FormData() ;
            data.append('file', selectedFile);
            data.append('title', title);
            data.append('shortdesc', shortDesc);
          
            await axios.post("http://localhost:3002/insertcard", data);
        
            toast.success("Card added Successfully!!!");
        }
        catch(err){
            console.log(err);
            toast.error("Error occurred while adding card");
        }
        setLoading(false);
    }

  return (
    <div className='w-full '>
    {
        loading ? (<div className='mt-80 flex items-center justify-center'>
        <Spinner type={type}/>
        </div>) : (

    <form onSubmit={submitHandler}>
    <div className='flex flex-col mt-[50px]  w-11/12 px-40 h-[666px]'>
        <div>
            <p className='flex text-[30px] justify-center items-center mx-auto'>Add new Card </p>
        </div>
        
        <div className='flex gap-x-20 py-3 mt-5'>
            <p>Title: </p>
            <input name="title" value={title} onChange={(e) => {setTitle(e.target.value)}} type='text' placeholder='Enter title here...(like Food)' className='w-[400px] h-[30px] border-2 border-black '></input>
        </div>
        
        <div className='flex gap-x-7 py-3'>
            <p>Short Desc: </p>
            <textarea name='shortdesc' value={shortDesc} onChange={(e) => {setShortDesc(e.target.value)}} placeholder='Enter short description here...' className='h-[100px] w-[400px] border-2 border-black rounded-md'></textarea>
        </div>
      
      
        <div className='ml-28'>
            <input type='file' onChange={(e) => {setSelectedFile(e.target.files[0])}}/>
        </div>

        <div className='flex p-4 gap-x-80 ml-24'>
            <input type='submit' value="Publish" className='bg-green-500 h-10 w-[200px] font-semibold rounded-md text-richblack-700 hover:scale-110 transition duration-300 ease-in'></input>
        </div>
        
    </div>
   </form>
   )}
    </div>
    
  )
}

export default InsertCard