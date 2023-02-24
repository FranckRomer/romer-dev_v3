import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"


const ModalProject = ({ Modal, setModal, SelecttProyect }: any) => {
    const [project, setProject] = useState(
        {
        name: "No existe",
        text: "",
        img: "",
        skills: [
            { name: "React", img: "/SKILLS/react.png" },
            { name: "Nest", img: "/SKILLS/nest.png" },
        ],
        links: [
            { name: "Git", img: "/social/github.png", url: "/" },
        ],
    }
    )
    const proyects = [
        {
            name: "Settings",
            text: "Esta es una pagina de configuraciones con el proposito de modificar parametros en los dispositivos electronicos. La pagina cuenta con un inicio de usuarios administrativos e instaladores para recopilar que usuario que ah realizado un cambio o ajuste",
            img: "/projects/configuraciones.png",
            skills: [
                { name: "React", img: "/SKILLS/react.png" },
                { name: "Next js", img: "/SKILLS/nextjs.png" },
                { name: "Arduino", img: "/SKILLS/arduino.png" },
                { name: "MongoDB", img: "/SKILLS/mongodb.png" },
                { name: "Css", img: "/SKILLS/css.png" },
            ],
            links: [
                { name: "Git", img: "/social/github.png", url: "/" },
            ],
        },
        {
            name: "Buses",
            text: "Este es un proyecto de visualizacion de los estados de los autobuses. En un principio comenzo como una pagina de visualizacion para los instaladores, posterior mente fue usada para administrativos y operadores, por lo que se agrego un apartado para configurar datos.",
            img: "/projects/camiones.png",
            skills: [
                { name: "React", img: "/SKILLS/react.png" },
                { name: "Nest", img: "/SKILLS/nest.png" },
                { name: "Arduino", img: "/SKILLS/arduino.png" },
                { name: "MongoDB", img: "/SKILLS/mongodb.png" },
                { name: "Css", img: "/SKILLS/css.png" },
            ],
            links: [
                { name: "Git", img: "/social/github.png", url: "/" },
            ],
        },
        {
            name: "Ads",
            text: 'Proyecto de anuncios para camiones, con el nombre de "proxima parada", muestra la ruta del autobus, en que parada se encuentra actualmente y cada cierto tiempo configurable se muestran anuncios patrocinados.',
            img: "/projects/anuncios.png",
            skills: [
                { name: "React", img: "/SKILLS/react.png" },
                { name: "Next js", img: "/SKILLS/nextjs.png" },
                { name: "Css", img: "/SKILLS/css.png" },
                { name: "Raspberry", img: "/SKILLS/raspberry.png" },
                { name: "Python", img: "/SKILLS/python.png" },
            ],
            links: [
                { name: "Git", img: "/social/github.png", url: "/" },
            ],
        },
        {
            name: "Domotica",
            text: "Proyecto de domotica, con el proposito de automatizar hogares se creo tanto los dispositivos, arquitectura, paginas de usario y paginas de administrativos para lograr el cometido.",
            img: "/projects/domotica.png",
            skills: [
                { name: "React", img: "/SKILLS/react.png" },
                { name: "Nest", img: "/SKILLS/nest.png" },
            ],
            links: [
                { name: "Git", img: "/social/github.png", url: "/" },
            ],
        },


    ]

    useEffect(() => {
        let proyectoEncontrado = proyects.find(proyectfind => proyectfind.name === SelecttProyect);
        console.log(proyectoEncontrado);
        if (proyectoEncontrado !== undefined) {
            setProject(proyectoEncontrado)
        } else {
            // alert("EL proyecto aun no esta registrado para este uso")
            console.log("Esto proyecto no existe");
        }
    })

    //
    return (
        <>
            {Modal ?
                <div className="">
                    <div className="fixed top-0 left-0 w-screen h-screen " onClick={() => setModal(false)} ></div>

                    <div className="border fixed top-0 left-0 right-0 bottom-0 m-auto p-8 bg-white/95  dark:bg-black/90 text-black dark:text-white w-full max-w-4xl h-4/5 overflow-x-hidden overflow-y-scroll rounded-md z-50">
                        <div onClick={() => setModal(false)} className="flex justify-end">
                            <Image
                                className='peer w-6 sm:w-6 hover:scale-125 '
                                src="/iconos/cerrar.png"
                                alt="cerrar"
                                width={77}
                                height={77}
                            />
                        </div>
                        <h1 className="text-center text-4xl font-semibold">{project.name}</h1>
                        <div className="grid md:grid-cols-2 my-8 gap-y-6 ">
                            <p className="text-xl text-justify m-auto">
                                {project.text}
                            </p>
                            <Image
                                className='peer w-4/5 m-auto hover:scale-150'
                                src={project.img}
                                alt={project.name}
                                width={500}
                                height={500}
                            />
                        </div>

                        <div className="grid sm:grid-cols-2 gap-14 gap-y-4">
                            <div className="">
                                <h2 className="text-3xl my-4">
                                    Herramientas
                                </h2>
                                <div className='grid grid-auto gap-y-4 md:gap-y-12 gap-6 '>
                                    {project.skills.map((skill, index) => (
                                        <div key={index} className='grid '>
                                            <Image
                                                className='peer w-10 sm:w-12 animate-spin-slow hover:animate-none hover:scale-125 m-auto'
                                                src={skill.img}
                                                alt={skill.name}
                                                width={77}
                                                height={77}
                                            />
                                            <p className='text-xs sm:text-sm text-center mt-2 md:invisible peer-hover:visible'>{skill.name}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h2 className="text-3xl my-4">Links</h2>
                                <div className='grid grid-auto gap-y-4 md:gap-y-12 gap-6 '>
                                    {project.links.map((link, index) => (
                                        <Link href={link.url} key={index} className='grid '>
                                            <Image
                                                className='peer w-10 sm:w-12 animate-spin-slow hover:animate-none hover:scale-125 m-auto'
                                                src={link.img}
                                                alt={link.name}
                                                width={77}
                                                height={77}
                                            />
                                            <p className='text-xs sm:text-sm text-center mt-2 md:invisible peer-hover:visible'>{link.name}</p>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
                : ""
            }

        </>
    )
}

export default ModalProject
