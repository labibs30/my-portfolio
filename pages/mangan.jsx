import React from 'react'
import mangan from "../public/assets/projects/mangan.png"



import Image from 'next/image'
import { RiRadioButtonFill } from 'react-icons/ri'
import Head from 'next/head'
import Link from 'next/link'
const property = () => {
  return (
    <div className='w-full'>
        <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
            <div className='absolute top-0 left-0 w-full h-[40vh] bg-black/70 z-10'/>
            <Image
                className='absolute z-1'
                layout='fill'
                objectFit='cover'
                src={mangan}
                alt='/'
                />
            <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                <h2 className='py-2'>Mangan - Catering</h2>
                <h3>Vue JS JS / Bootstrap / MySql</h3>
            </div>
        </div>
        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
            <div className='col-span-4'>
                <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Project</p>
                <h2>Overview</h2>
                <p>
                    Mangan is a web application that provide a catering service. This application is built using Vue Js and Bootsrap for the front-end, Express Js for the back-end,
                    and MySql to save collection of data. This application is built as my project on learning Vue JS. Users can order the catering service and see the list of their orders.
                    
                </p>
                <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
                <Link href="">
                    <button className='px-8 py-2 mt-4'>Code</button>
                </Link>
            </div>
            <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
                <div className='p-2'>
                    <p className='text-center font-bold pb-2'>Technologies</p>
                    <div className='grid grid-cols-3 md:grid-cols-1'>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/> Next JS</p>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/> Bootstrap</p>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/> Javascript</p>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/> Open API</p>

                    </div>
                </div>
            </div>
            <Link href='/#projects'>
                <p className='underline cursor-pointer'>Back</p>
            </Link>
        </div>
    </div>
  )
}

export default property
