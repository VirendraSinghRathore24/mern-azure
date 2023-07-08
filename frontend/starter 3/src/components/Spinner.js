import React from 'react'
import "./Spinner.css"

function Spinner() {
  return (
    <div className='flex flex-col items-center justify-center'>
        <div className='spinner'>
        </div>
        <h1 className='text-[24px] text-blue-500'>Inserting is in progress, Please wait...</h1>
    </div>
  )
}

export default Spinner