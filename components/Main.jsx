import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsWhatsapp} from 'react-icons/bs'
import { FaGithub, FaInstagram} from 'react-icons/fa'

export const Main = () => {
  return (
  <div>
    <div id='main' className='w-full h-100vh text-center pt-48 pb-24'>
        <div className='max-w-[1230px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <h1 className='text-4xl text-gray-800 font-bold'>HI, I'M <span className='text-orange-500'>ZECHTXD</span></h1>
                <h1 className='text-4xl text-gray-800 font-bold py-4'>A FRONT END WEB DEVELOPER</h1>
                <p className='text-gray-700 text-xl py-6 font-bold max-w-[70%] m-auto'>I'm a front end web developer especially in build and designing web. Recently I'm focused on building responsive front-end web applications and improve more my skills.</p>
                <div className='flex items-center justify-around max-w-[330] m-auto py-14'>
                    <div className='rounded-full justify-center items-center shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 '>
                        <a href='https://instagram.com/gilangprimae?igshid=YmMyMTA2M2Y='><FaInstagram/></a>
                    </div>
                    <div className='rounded-full justify-center items-center shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 '>
                        <a href='https://github.com/zecht12'><FaGithub/></a>
                    </div>
                    <div className='rounded-full justify-center items-center shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 '>
                        <a href="https://www.gilangprimae13@gmail.com"><AiOutlineMail/></a>
                    </div>
                    <div className='rounded-full justify-center items-center shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 '>
                        <a href='https://wa.me/6285865130221'><BsWhatsapp/></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
  )
}

export default Main