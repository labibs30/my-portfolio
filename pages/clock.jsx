import React from 'react'
import amma from "../public/assets/projects/clock.png"

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
                src={amma}
                alt='/'
                />
            <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                <h2 className='py-2'>Simple Clock with Vue Js</h2>
                <h3>Vue JS / Bootsrap</h3>
            </div>
        </div>
        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
            <div className='col-span-4'>
                <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Project</p>
                <h2>Overview</h2>
                <p>
                    This is a simple clock application built using Vue Js and Bootsrap. This application is built as my project on learning Vue JS. Users can see the current time and date.
                    Besides that, users can also create any timer or stopwatch as maybe user needs this feature. Another feature is this clock provide Podomoro timer for student who want to make a timer
                    during their study process.
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
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/> Vue Js</p>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/> Bootsrap</p>
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
