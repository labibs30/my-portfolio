import React from 'react'
import avenys from "../public/assets/projects/avenys.jpg"


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
                src={avenys}
                alt='/'
                />
            <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                <h2 className='py-2'>Avenys - Beauty partner</h2>
                <h3>Laravel / Bootsrap </h3>
            </div>
        </div>
        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
            <div className='col-span-4'>
                <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Project</p>
                <h2>Overview</h2>
                <p>
                    Avenys is a web application that provide a list of beauty partners. This application is built using Laravel and Bootsrap for the front-end, PhpMyAdmin for the database.
                    This application is built for my final project in Open Recruitment of Laboratory Administration of Manajemen Cerdas Informasi at my Department.
                    Users can buy the beauty products and book the beauty services. Users can also add the beauty products and services to their cart list.
                    Users can also see the list of their orders and the list of their cart. Administrator can add, edit, and delete the beauty products and services.
                </p>
                <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
                <Link href="https://github.com/labibs30/fp-pweb.git">
                    <button className='px-8 py-2 mt-4'>Code</button>
                </Link>
            </div>
            <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
                <div className='p-2'>
                    <p className='text-center font-bold pb-2'>Technologies</p>
                    <div className='grid grid-cols-3 md:grid-cols-1'>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/> Laravel</p>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/> Bootstrap</p>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/> PhpMyAdmin</p>
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
