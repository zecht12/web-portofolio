import Link from 'next/link'
import React, {useState} from 'react'


const NavBar = () => {
    const [nav, setNav] = useState(false)


    const handleNav = () => {
        setNav(!nav)
    }


    return (
    <div>
        <div className={nav ? " bg-orange-500 fixed w-full h-20 z-[100]" : "fixed w-full h-20 shadow-xl z-[100] bg-orange-500"}>
            <div className='flex justify-between items-center w-full h-full px-4 2xl:px-16 '>
                <div className=' font-bold text-xl'>
                    <h1>ZechtXD</h1>
                </div>
            <div>
                <ul className='hidden md:flex'>
                    <Link href='/'>
                        <li className='ml-10 text-sm uppercase hover:border-b '>HOME</li>
                    </Link>
                    <Link href='/#about'>
                        <li className='ml-10 text-sm uppercase hover:border-b '>ABOUT</li>
                    </Link>
                    <Link href='/#skills'>
                        <li className='ml-10 text-sm uppercase hover:border-b '>SKILLS</li>
                    </Link>
                    <Link href='/#projects'>
                        <li className='ml-10 text-sm uppercase hover:border-b '>PROJECT</li>
                    </Link>
                </ul>
                <div onClick={handleNav} className='md:hidden'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </div>
            </div>
            </div>
            
            <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : "" }>
                <div className={nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-orange-500 p-10 ease-in duration-500' : "fixed left-[-100%] top-0 p-10 ease-in duration-500"}>
                    <div>
                        <div className='flex w-full items-center justify-between'>
                            <div className=' font-bold text-xl'>
                                <h1>ZechtXD</h1>
                            </div>
                            <div onClick={handleNav} className='rounded-full bg-slate-300 shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className='py-4 pt-20 flex flex-col'>
                        <ul className='uppercase'>
                            <Link href='/'>
                                <li className='py-4 text-sm'>HOME</li>
                            </Link>
                            <Link href='/#about'>
                                <li className='py-4 text-sm'>ABOUT</li>
                            </Link>
                            <Link href='/#skills'>
                                <li className='py-4 text-sm'>SKILLS</li>
                            </Link>
                            <Link href='/#projects'>
                                <li className='py-4 text-sm'>PROJECT</li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}

export default NavBar