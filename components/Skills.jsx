import Image from 'next/image'
import React from 'react'
import colab from '../public/assets/skills/colab.png'
import github1 from '../public/assets/skills/github1.png'
import javascript from '../public/assets/skills/javascript.png'
import nextjs from '../public/assets/skills/nextjs.png'
import node from '../public/assets/skills/node.png'
import postman from '../public/assets/skills/postman.png'
import python from '../public/assets/skills/python.png'
import react from '../public/assets/skills/react.png'
import tailwind from '../public/assets/skills/tailwind.png'
import tensorflow from '../public/assets/skills/tensorflow.png'
import vue from '../public/assets/skills/vue.png'

const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
            <p className='text-xl tracking-widest text-[#5651e5]'>Skills</p>
            <h2 className='py-4'>What I Can Do</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
                {/* JS */}
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={javascript} width='64' height='64' alt='/'/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Javascript</h3>
                        </div>
                    </div>
                </div>
                {/* JS */}
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={python} width='64' height='64' alt='/'/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Python</h3>
                        </div>
                    </div>
                </div>
                {/* Node Js */}
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={node} width='64' height='64' alt='/'/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Node Js</h3>
                        </div>
                    </div>
                </div>
                {/* Next Js */}
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={nextjs} width='64' height='64' alt='/'/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Next Js</h3>
                        </div>
                    </div>
                </div>
                {/* Tensorflow Js */}
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={tensorflow} width='64' height='64' alt='/'/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Tensorflow</h3>
                        </div>
                    </div>
                </div>
                {/* React Js */}
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={react} width='64' height='64' alt='/'/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>React js</h3>
                        </div>
                    </div>
                </div>
                {/* Tailwind Css */}
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={tailwind} width='64' height='64' alt='/'/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Tailwind CSS</h3>
                        </div>
                    </div>
                </div>
                {/* Tailwind Css */}
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={vue} width='64' height='64' alt='/'/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Vue Js</h3>
                        </div>
                    </div>
                </div>
                {/* Github Css */}
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={github1} width='64' height='64' alt='/'/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Github</h3>
                        </div>
                    </div>
                </div>
                {/* Tailwind Css */}
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={postman} width='64' height='64' alt='/'/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Postman</h3>
                        </div>
                    </div>
                </div>
                {/* Tailwind Css */}
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={colab} width='64' height='64' alt='/'/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Google Colab</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills
