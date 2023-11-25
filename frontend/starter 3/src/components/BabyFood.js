import React from 'react'

function BabyFood() {
  return (
    <div>
         <div className='p-4'>
         <div className='flex flex-col items-center'>
            <h2>Download the PDF file for 6 Month Baby Food Reciepe by Sanju Shekhawat :</h2>
            <div className='bg-blue-500 mt-4 h-[30px] w-[280px] font-semibold text-center rounded-lg text-white hover:scale-110 transition duration-300 ease-in'>
                <a 
                    href="/6 Month Baby Food Reciepe.pdf"
                    download="6 Month Baby Food Reciepe"
                    target="_blank"
                    rel="noreferrer"
                >
                    <button>Click here to Download the PDF</button>
                </a>
            </div>
        </div>
        </div>
                <div>
                <div className='p-4 flex items-center justify-center'>
                     <img src="../../images/All1.png" loading='lazy' className=' rounded-md'/>
                </div>
                    <div className='grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 px-10 py-5 gap-x-10 gap-y-10'>
                            <img src="../../images/Week1.png" loading='lazy' className=' rounded-md'/>
                            <img src="../../images/Week2.png" loading='lazy' className=' rounded-md'/>
                            <img src="../../images/Week3.png" loading='lazy' className=' rounded-md'/>
                            <img src="../../images/Week4.png" loading='lazy' className=' rounded-md'/>
                        
                    </div>
                </div>
    </div>
  )
}

export default BabyFood