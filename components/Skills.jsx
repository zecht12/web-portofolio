import React from 'react'
import Image from 'next/image'
import Html from '../public/assets/skills/html.png'
import Css from '../public/assets/skills/css.png'
import Js from '../public/assets/skills/javascript.png'
import reactImg from '../public/assets/skills/react.png'
import Tw from '../public/assets/skills/tailwind.png'
import Next from '../public/assets/skills/nextjs.png'
import Node from '../public/assets/skills/node.png'
import Git from '../public/assets/skills/github1.png'

const Skills = () => {
  return (
    <div>
    <div id='skills' className='w-full  lg:h-screen p-2 '>
        <div className='flex max-w-[1240px] pt-20 mx-auto flex-col justify-center h-full py-16'>
            <p className='text-2xl text-center text-orange-500'>SKILLS</p>
            <h2 className='py-4 text-4xl text-center font-bold'>What I Can Do</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>

            <div className='p-6 shadow-2xl rounded-xl hover:scale-105'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                <Image src={Html} width="64" height="64" alt="/"/>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h3>HTML</h3>
                </div>
            </div>
            </div>
            <div className='p-6 shadow-2xl rounded-xl hover:scale-105'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                <Image src={Css} width="64" height="64" alt="/"/>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h3>CSS</h3>
                </div>
            </div>
            </div>
            <div className='p-6 shadow-2xl rounded-xl hover:scale-105'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                <Image src={Js} width="64" height="64" alt="/"/>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h3>JavaScript</h3>
                </div>
            </div>
            </div>
            <div className='p-6 shadow-2xl rounded-xl hover:scale-105'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                <Image src={Node} width="64" height="64" alt="/"/>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h3>NodeJs</h3>
                </div>
            </div>
            </div>
            <div className='p-6 shadow-2xl rounded-xl hover:scale-105'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                <Image src={Git} width="64" height="64" alt="/"/>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h3>Github</h3>
                </div>
            </div>
            </div>
            <div className='p-6 shadow-2xl rounded-xl hover:scale-105'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                <Image src={reactImg} width="64" height="64" alt="/"/>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h3>ReactJS</h3>
                </div>
            </div>
            </div>
            <div className='p-6 shadow-2xl rounded-xl hover:scale-105'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                <Image src={Next} width="64" height="64" alt="/"/>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h3>NextJs</h3>
                </div>
            </div>
            </div>
            <div className='p-6 shadow-2xl rounded-xl hover:scale-105'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                <Image src={Tw} width="64" height="64" alt="/"/>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h3>Tailwind</h3>
                </div>
            </div>
            </div>
        </div>
        </div>

    </div>
    </div>
  )
}

export default Skills