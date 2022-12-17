import React from 'react'
import { Container } from 'postcss'
import Link from 'next/link'

const About = () => {
  return (
    <div>
    <div id='about' className='w-full md:h-screen text-center bg-orange-500'>
        <div className='max-w-[800px] h-screen pt-44 text-black m-auto md:grid-cols-3 gap-8'>
            <div className='col-span-2'>
            <p className='text-slate-200 text-lg'>ABOUT ME</p>
            <p className='text-4xl p-3'>WHO AM I?</p>
                <p className='pt-11 text-slate-200'>My name is Gilang Prima Ertansyah, usually called ZechtXD. born in Solo on October 28 2004, now I'm 18. For now i live with my parents in Solo.</p>
                <p className='py-4 pb-4 text-slate-200'>For this year i'm focusing my self to front end web developer. I started learning HTML Then CSS and Javascript to makes a websites interactive. I am now spend my time building projects with React JS,Next JS, and learning new technologies.</p>
                <p className='text-gray-800 text-xl'><Link href='/#projects'>Check My Projects</Link></p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default About