import Button from '@/components/Button'
import Link from 'next/link'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import ModoOscuro from '@/components/ModoOscuro'
import CambioIdioma from '@/components/CambioIdioma'
import useLanguage from '@/hooks/useLanguage'

const Header = () => {
    const [menu, setMenu] = useState(false)
    const { idioma } = useLanguage()
    const [language, setLanguage] = useState("spanish")
    
    useEffect(() => {
        setLanguage(idioma)        
    })

    const navigations = [
        { label: language === "spanish" ? "Inicio" : "Home" , path: '/', url: "/iconos/home2.png" },
        { label: language === "spanish" ? "Proyectos" :"Projects", path: '/#projects', url: "/iconos/projects.png" },
        { label: language === "spanish" ? "Sobre mi" :'About', path: '/#about', url: "/iconos/about.png" },
        { label: language === "spanish" ? "Contacto" :'Contacts', path: '/#contact', url: "/iconos/contacto2.png" },
    ]

    // 
    return (
        <>
            <header className='sticky h-12 flex item-center justify-between   items-center  top-0 left-0 right-0 w-full mx-auto py-8 px-4 bg-orange-50 dark:bg-neutral-900  z-40 '>
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

                <div className='flex gap-6 '>

                    <ul className=' gap-7 items-center text-xl hidden md:flex ' >
                        {navigations.map((nav, index) => (
                            <Link
                                key={index}
                                href={nav.path}
                                className=' font-semibold text-neutral-700 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-500 hover:underline transition-all duration-200'
                            >
                                {nav.label}
                            </Link>
                        ))}
                    </ul>

                    <ModoOscuro></ModoOscuro>

                    <CambioIdioma></CambioIdioma>

                    <div className=' md:hidden ' onClick={() => setMenu(!menu)}>
                        <Button className=' bg-gray-200 dark:bg-neutral-800 '>
                            <Image
                                key={0}
                                className='w-8 dark:invert'
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
                        className='fixed top-0 left-0 right-0 bottom-0 h-screen w-screen '
                        onClick={() => setMenu(false)}
                    ></div>

                    <div className='fixed md:hidden  w-4 h-4 top-12 right-11 bg-black/90 border rotate-45 rounded-sm z-50'></div>

                    <div className='fixed md:hidden top-14  right-8 bg-black/90 border rounded-md z-50' >
                        <ul className='p-6 gap-4 items-center text-xl grid' >
                            {navigations.map((nav, index) => (
                                <Link
                                    key={index}
                                    href={nav.path}
                                    className='font-semibold text-neutral-400 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-500 hover:underline  transition-all duration-200'
                                >
                                    <div className='flex items-center justify-start gap-2 '>
                                        <Image
                                            key={0}
                                            className='w-8 invert'
                                            src={nav.url}
                                            alt='Menu'
                                            width={60}
                                            height={60}
                                        />
                                        {nav.label}
                                    </div>
                                </Link>
                            ))}
                        </ul>
                        <hr />
                        <div className='p-4 gap-4 items-center text-xl grid'>
                            <Link href={"https://github.com/FranckRomer"} className='font-semibold text-neutral-400 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-500 hover:underline  transition-all duration-200'>
                                <div className='flex items-center justify-start gap-2 '>
                                    <Image
                                        key={0}
                                        className='w-8'
                                        src="/social/github.png"
                                        alt='Menu'
                                        width={60}
                                        height={60}
                                    />
                                    <p>GitHub</p>
                                </div>
                            </Link>
                            <Link href={"https://www.linkedin.com/in/franckromer"} className='font-semibold text-neutral-400 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-500 hover:underline  transition-all duration-200'>
                                <div className='flex items-center justify-start gap-2 '>
                                    <Image
                                        key={0}
                                        className='w-8'
                                        src="/social/linkedin.png"
                                        alt='Menu'
                                        width={60}
                                        height={60}
                                    />
                                    <p>Linkedin</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                :
                ""
            }
        </>
    )
}

export default Header
