import React, { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import ModalProject from '@/modals/ModalProject';
import Button from '@/components/Button';

const ProjectsPage = () => {
    const [stateWinProject, SetStateWinProject] = useState(false)
    const [selectProject, setSelectProject] = useState("")
    const projects = [
        { name: 'Settings', path: '/projects/configuraciones.png', text: "Page for smart home installers ", url: "/" },
        { name: 'Buses', path: '/projects/camiones.png', text: "Page of show devices of the buses", url: "/" },
        { name: 'Ads', path: '/projects/anuncios.png', text: "Ad project", url: "/" },
        { name: 'Smart Home', path: '/projects/domotica.png', text: "Smart home project", url: "/" },
    ]

    const setModalProject = (datoshijo: boolean) => {
        SetStateWinProject(false);
    }

    return (
        <>
            {stateWinProject ?
                <ModalProject
                    Modal={stateWinProject}
                    setModal={setModalProject}
                    SelecttProyect={selectProject}
                />
                : ""
            }
            <main>
                <section>
                    <div>
                        <h1 className='text-5xl font-bold text-center'>Portfolio</h1>
                    </div>
                </section>

                <section className='mt-12'>
                    <div className='grid grid-cols-2 '>
                        {projects.map((project, index) => (
                            <div key={index} className=' relative  w-fit m-auto '>
                                <Image
                                    className='cursor-pointer w-48 sm:w-80 lg:w-96  m-auto hover:opacity-50 peer-hover:opacity-50 transition-all duration-300'
                                    src={project.path}
                                    alt={project.name}
                                    width={500}
                                    height={500}
                                    onClick={() => { SetStateWinProject(true); setSelectProject(project.name) }}
                                />
                                <div className='peer sm:absolute  bottom-0  left-0 right-0 opacity-100 peer-hover:opacity-100 hover:opacity-100 m-4 grid transition-all duration-500'>
                                    <p className=''>{project.text}</p>
                                    <div className='flex justify-between'>
                                        <h1 className='text-3xl'>{project.name}</h1>
                                        <div className='cursor-pointer' onClick={() => { SetStateWinProject(true); setSelectProject(project.name) }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 hover:text-red-400 hover:scale-150">
                                                <path fillRule="evenodd" d="M3.75 12a.75.75 0 01.75-.75h13.19l-5.47-5.47a.75.75 0 011.06-1.06l6.75 6.75a.75.75 0 010 1.06l-6.75 6.75a.75.75 0 11-1.06-1.06l5.47-5.47H4.5a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                   
                </section>
            </main>
        </>
    )
}

export default ProjectsPage