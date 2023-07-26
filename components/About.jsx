import Link from 'next/link'
import React from 'react'

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>   
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='py-4 uppercase text-xl tracking-widest text-[#5651e5]'>About me</p>
                <h2 className='py-4'>Who I Am</h2>
                <p className='py-2 text-gray-600'>Agile, hardworking, curious, and dedicated student, currently studying computer science at Institut 
                  Teknologi Sepuluh Nopember, Surabaya, with a high desire to prepare for a future career. Responsible 
                  to finish all work. Has some experience in working on group to collaborate developing website 
                  applications using several frameworks and machine learning model. Highly interested in backend 
                  development and machine learning as seen from my experience in joining some research project at my 
                  university.
                </p>
                <p className='py-2 text-gray-600'>
                  I am a person who is very interested in the world of technology, especially in the field of
                  programming. I am fast learner and happy to collaborate. I’m currently learning NextJs, ExpressJs, NodeJs, Machine Learning, Python, and React Native.

                </p>    
                <Link href="/#projects">
                  <p className='py-2 text-gray-600 underline cursor-pointer'>Check out some of my latest project.</p>
                </Link>
            </div>
            <div className='w-full h-full m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-700'>
                <img className='rounded-xl' src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1026&q=80" alt="" />
            </div>
        </div>
    </div>
  )
}

export default About
