import Button from '@/components/Button'
import Link from 'next/link'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

const Header = () => {
    const { systemTheme, theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)
    const [menu, setMenu] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    const navigations = [
        { label: 'Home', path: '/', src: '/iconos/home2.png' },
        { label: 'Projects', path: '#projects', src: '/iconos/portafolio2.png' },
        { label: 'About', path: '#about', src: '/iconos/about2.png' },
        { label: 'Contacts', path: '#contact', src: '/iconos/contacto2.png' },
    ]
    const renderThemeChanger = () => {
        if (!mounted) return null;

        const currentTheme = theme === 'system' ? systemTheme : theme

        if (currentTheme === 'dark') {

            return (
                <Button
                    className='dark:bg-neutral-800'
                    onClick={() => setTheme('light')}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
                    </svg>

                </Button>
            )
        }

        return (
            <Button
                className='bg-gray-200'
                onClick={() => setTheme('dark')}
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clipRule="evenodd" />
                </svg>
            </Button>

        )
    }

    return (
        <>

            <header className='sticky h-12 flex item-center justify-between   items-center  top-0 left-0 right-0 w-full mx-auto py-8 px-4 bg-orange-50 dark:bg-neutral-900 z-50 '>
                <Link href={"/"} className='flex items-center gap-2 ' >                    
                    <Image                        
                        className='bg-orange-50'
                        src='/romero.png'
                        alt='User profile picture'
                        width={30}
                        height={30}
                    />
                    <h3 className='text-stone-900 dark:text-white font-semibold border-l-2 p-2 border-stone-500  dark:border-white text-xl'>ROMER</h3>
                </Link>

                <ul className=' gap-7 items-center text-xl hidden md:flex m-2' >
                    {navigations.map(nav => (
                        <Link
                            key={0}
                            href={nav.path}
                            className='flex items-center gap-4 font-semibold text-gray-200 hover:text-blue-500   hover:underline transition-all duration-200'
                        >                            
                            {nav.label}
                        </Link>
                    ))}
                </ul>

                <div className='flex gap-6 -z-50'>

                    {renderThemeChanger()}

                    <div className='  flex md:hidden items-center' >
                        <Button className=' bg-gray-200 dark:bg-neutral-800 flex items-center transition-all duration-500' onClick={() => setMenu(!menu)}>
                            <Image
                                key={0}
                                className=' w-8 dark:invert'
                                src='/iconos/menu3.png'
                                alt='Menu'
                                width={60}
                                height={60}
                            />
                        </Button>
                    </div>

                </div>
            </header>


            {/* //?------------------------------------------- */}
            {menu ?
                <div className=' relative '>
                    <div
                        className='fixed top-0 left-0 right-0 bottom-0 h-screen w-screen z-40'
                        onClick={() => setMenu(false)}
                    ></div>
                    
                    <div className='fixed  top-14  right-10 w-4 h-4 border rotate-45 rounded bg-black/90 z-50'></div>

                    <div className='fixed top-16  right-8 bg-black/90 border rounded-md py-4 px-8 z-50' >
                        {/* <div className='flex justify-end border'>
                            <Button onClick={() => setMenu(false)}>
                                <Image
                                    key={0}
                                    className='w-8'
                                    src='/iconos/cerrar.png'
                                    alt='Menu'
                                    width={60}
                                    height={60}
                                />
                            </Button>
                        </div> */}
                        <ul className=' gap-7 items-center text-xl grid m-2' >
                            {navigations.map(nav => (
                                <Link
                                    key={0}
                                    href={nav.path}
                                    className='flex items-center gap-4 font-semibold text-gray-200 hover:text-blue-500   hover:underline transition-all duration-200'
                                >
                                    <Image
                                        className='w-8 invert hover:brightness-150 '
                                        src={nav.src}
                                        alt={nav.label}
                                        width={60}
                                        height={60}
                                    />
                                    {nav.label}
                                </Link>
                            ))}
                        </ul>

                        <hr className='my-6' />
                        <ul className='gap-7 items-center text-xl grid m-2'>
                            <Link
                                key={0}
                                href="/"
                                className='flex items-center gap-4 font-semibold text-gray-200 hover:text-blue-500   hover:underline transition-all duration-200'
                            >
                                <Image
                                    className='w-8  hover:brightness-150 '
                                    src='/social/linkedin.png'
                                    alt="Github"
                                    width={60}
                                    height={60}
                                />
                                Linkedin
                            </Link>
                            <Link
                                key={0}
                                href="/"
                                className='flex items-center gap-4 font-semibold text-gray-200 hover:text-blue-500   hover:underline transition-all duration-200'
                            >
                                <Image
                                    className='w-8  hover:brightness-150 '
                                    src='/social/github.png'
                                    alt="Github"
                                    width={60}
                                    height={60}
                                />
                                Github
                            </Link>
                        </ul>
                    </div>
                </div>
                :
                ""
            }
        </>
    )
}

export default Header
