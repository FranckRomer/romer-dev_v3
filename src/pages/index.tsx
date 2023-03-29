// import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
// import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Button from '@/components/Button'
import ModalProject from '@/modals/ModalProject'
import axios from 'axios'
import useLanguage from '@/hooks/useLanguage'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { idioma } = useLanguage()
  const [stateWinProject, SetStateWinProject] = useState(false)
  const [selectProject, setSelectProject] = useState("")
  const [error, setError] = useState(false)
  const [msgExitoso, setMsgExitoso] = useState(false)
  const [language, setLanguage] = useState("spanish")

  useEffect(() => {
    setLanguage(idioma)
  })

  const [datosUsuario, SetDatosUsuario] = useState({
    company: "",
    email: "",
    msg: "",
  })

  const TextBody =
  {
    home: language == "spanish" ?
      ["Hola 🖖", "Soy", "Francisco", "< Full-Stack Developer />", "Desarrollo de aplicaciones, aplicaciones CRUD, conexion de API REST y automatizacion de dispositivos", "Descarga CV", "Contacta me!"]
      :
      ["Hi 🖖", "I'm", "Franck", "< Full-Stack Developer />", "Web applications, CRUD application, API REST Services and Device automation", "Download CV", "Contact me!"]
    ,
    services: language == "spanish" ?
      ["Servicios", "Paginas Web", "Creación aproximada en 14 dias", "Aplicaciones Web", "Creación aproximada en 70 dias", "Micro - Servicio", "Creación depende del proyecto", "Aplicacion CRUD", "Creación aproximada en 25", "Servicio de API", "Creación aproximada en 50", "Automatizacion de Dispositivos", "Creación aproximada en 30"]
      :
      ["Services", "Landing Page", "Creating a landing-page turnkey website from 14 days", "Web Application", "Creating a web application turnkey website from 70 days", "Micro - Services", "A micro-services depends on the project", "CRUD Application", "Creating a CRUD application on 25 days", "API Services", "Creating a web API turnkey website from 50 days", "Device Automation", "Creating a web automation turnkey website from 30 days"]
    ,
    project: language == "spanish" ?
      ["Portafolio", "Mira el código de este proyecto", "Este Portafolio", "Más Proyectos",]
      : ["Portfolio", "Check the code of this project", "This Portfolio", "More projects",]
    ,
    about: language == "spanish" ?
      ["Sobre mí", "Mi nombre es Francisco  Romero , trabajo en el mundo de la tecnología creando y dando vida a ideas", "Soy desarrollador Full-Stack con conocimientos en ", "Desarrollo sitios web, aplicaciones web, herramientas de ususarios y dispositivos IoT",]
      : ["About me", "My name is Francisco  Romero , I work in the world of technology creating and bringing ideas", "I am a Full-Stack Developer with knowledge in", " I develop websites, web applications, user tools and IoT devices.",]
    ,
    contact: language == "spanish" ?
      ["Trabajemos juntos", "Envia me un mensaje", "Compañia o Nombre", "Correo Electrónico", "Escribe tu mensaje", "Enviar", "Contactos", "Mensaje Exitoso", "Aceptar"]
      : ["Let's work to Together", "Mend me a messege", "Company or Name", "Email", "Write here your messegs", "Send", "Contacts", "Successful Message!", "Acept"]
    ,
  }


  const skills = [
    { name: 'React js', path: '/SKILLS/react.png' },
    { name: 'Microchip', path: '/SKILLS/microchip.png' },
    { name: 'Arduino', path: '/SKILLS/arduino.png' },
    { name: 'Tailwind css', path: '/SKILLS/tailwind.png' },
    { name: 'Nest js', path: '/SKILLS/nest.png' },
    { name: 'Git', path: '/SKILLS/git.png' },
    { name: 'MongoDB', path: '/SKILLS/mongodb.png' },
    { name: 'Figma', path: '/SKILLS/figma.png' },
    { name: 'Next js', path: '/SKILLS/nextjs.png' },
  ];

  const contactos = [
    // { name: 'WhatsApp', path: '/social/whatsapp.png', url: "/" },
    { name: 'Linkedin', path: '/social/linkedin.png', url: "https://www.linkedin.com/in/franckromer" },
    { name: 'GitHub', path: '/social/github.png', url: "https://github.com/FranckRomer" },
  ];

  const projects = [
    { name: TextBody.project[2], path: '/projects/lap/portfolio.png', text: TextBody.project[1], url: "https://github.com/FranckRomer/romer-dev_v3" },
  ]

  const services = [
    { name: TextBody.services[1], text: TextBody.services[2], img: "/services/ventana-web.png" },
    { name: TextBody.services[3], text: TextBody.services[4], img: "/services/trabajo.png" },
    { name: TextBody.services[5], text: TextBody.services[6], img: "/services/frontend.png" },
    { name: TextBody.services[7], text: TextBody.services[8], img: "/services/backend.png" },
    { name: TextBody.services[9], text: TextBody.services[10], img: "/services/analisis-de-los-datos.png" },
    { name: TextBody.services[11], text: TextBody.services[12], img: "/services/domotica.png" },
  ]

  const contactPage = [
    { name: 'Phone', img: '/iconos/telefono.png', text: "(+52) 22-11-16-08-85", link: "/#contact" },
    { name: 'Email', img: '/iconos/email2.png', text: "contact@romer-dev.com", link: "/#contact" },
    { name: 'Linkedin', img: '/social/linkedin.png', text: "Francisco Angel Romero Tepal", link: "https://www.linkedin.com/in/franckromer" },
    // { name: 'GitHub', img: '/social/github.png', text: "FranckRomer", link: "https://github.com/FranckRomer" },
  ]


  const handleChangeData = (e: any) => {
    SetDatosUsuario({
      ...datosUsuario,
      [e.target.name]: e.target.value
    })
  }

  const textAreaChange = (e: any) => {
    SetDatosUsuario({
      ...datosUsuario,
      msg: e
    })
  }

  // *---------------------------------------------


  const enviarDatos = async (e: any) => {
    e.preventDefault()
    console.log(datosUsuario)
    try {
      const response = await axios.post('/api/sendMsg/sendMe', datosUsuario)
      console.log(response)
      if (response.status === 200) {
        setMsgExitoso(true)
        // setVentanaBotones(false)
        // props.hijoAPadre()
      }
    } catch (error) {
      setError(true)
      console.log(error);
      // setTimeout(() => {
      //     console.log("1 Segundo esperado")
      //     setError(true)
      // }, 150);
    }
  }

  const setModalProject = (datoshijo: boolean) => {
    SetStateWinProject(false);
  }


  // ?------------------------------
  return (
    <>
      {/* <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}

      {stateWinProject ?
        <ModalProject
          Modal={stateWinProject}
          setModal={setModalProject}
          SelecttProyect={selectProject}
        />
        : ""
      }

      <main className='min-h-screen'>

        {/* //?--------------------------------------------------------------- */}
        <section className=' min-h-90vh dark:bg-azul-negro sm:grid sm:grid-cols-2  mt-8 '>

          <div className='m-auto px-5 text-center '>
            <h2 className='text-2xl my-3'>{TextBody.home[0]},</h2>
            <h1 className='text-6xl font-bold '>{TextBody.home[1]} <span className='text-red-400'>{TextBody.home[2]}</span></h1>
            <h3 className='text-3xl my-3 font-semibold text-purple-900 dark:text-purple-500'>{'< Full-Stack Developer />'}</h3>
            <p className='text-gray-700 mb-8 dark:text-white text-xl'>
              {/* Desarrollo de aplicaciones web, algoritmos, bases de datos y automatizacion de dispositivos. */}
              {TextBody.home[4]}
            </p>
            <a
              className='animate-bounce hover:animate-none flex justify-center items-end my-6 mx-auto border-b p-1 w-fit border-black dark:border-gray-200 dark:hover:border-red-500 hover:border-red-500 hover:text-red-500 cursor-pointer hover:scale-125 transition-all duration-300'
              download="CV_FranciscoRomero"
              href='/CV_FranciscoRomero.pdf'
            >
              <Image
                className='peer w-8 '
                src="/iconos/pdf.png"
                alt="PDF"
                width={60}
                height={60}
              />
              <h3 className='font-semibold'>{TextBody.home[5]}</h3>
            </a>
            <div className='flex items-center gap-8 justify-center'>
              {contactos.map((contact, index) => (
                <Button key={index} className='peer'>
                  <Link href={contact.url} className='peer block justify-center '>
                    <Image
                      className='peer w-8 mx-auto'
                      src={contact.path}
                      alt={contact.name}
                      width={60}
                      height={60}
                    />
                  </Link>
                  <p className='text-sm text-center mt-2 invisible peer-hover:visible'>{contact.name}</p>
                  {/* <p className='text-center mt-2 invisible peer-hover:visible'>{contact.name}</p> */}
                </Button>
              ))}

            </div>
          </div>


          <div className=" hidden sm:flex md:h-1/2 items-center hover:animate-born my-10 md:my-auto  ">
            <div className=" grid grid-cols-3 w-4/5 md:w-3/4 mx-auto gap-y-8  md:gap-y-16 " >
              {skills.map((skill, index) => (
                <div key={index}>
                  <Image
                    // Absolute URL                    
                    className='peer w-14 sm:w-18 animate-spin-slow hover:animate-none hover:scale-125 m-auto'
                    src={skill.path}
                    alt={skill.name}
                    width={77}
                    height={77}
                  />
                  <p className='text-center mt-2 invisible peer-hover:visible'>{skill.name}</p>
                </div>
              ))}

            </div>
          </div>

          <div className='flex justify-center items-center col-span-2 mb-12 '>
            <Link href={"#contact"}>
              <Button className='bg-red-500 text-white px-6 text-lg '>{TextBody.home[6]}</Button>
            </Link>
          </div>

        </section>

        {/* //?------------------------------  SERVICIOS --------------------------------- */}

        {/* <hr className=' my-8' /> */}
        <hr className=' my-20 border-black dark:border-gray-400' />

        <section>
          <h1 className='text-5xl font-semibold text-center'>{TextBody.services[0]}</h1>
          <div className='grid grid-cols-2 gap-12  my-12'>
            {services.map((service, index) => (
              <div key={index} className='max-w-sm h-72 md:h-60 grid sm:grid-cols-2 items-center border rounded-md m-auto p-6 hover:shadow-md gap-8 hover:shadow-gray-500 dark:hover:shadow-stone-700 border-gray-600 dark:border-stone-500'>
                <div>
                  <h1 className='text-2xl font-semibold'>{service.name}</h1>
                  <p className='text-xl text-gray-800 dark:text-stone-300'>{service.text}</p>
                </div>
                <div className='hidden sm:block'>
                  <Image
                    className='peer w-48 '
                    src={service.img}
                    alt="Grupo Accesa"
                    width={500}
                    height={500}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* //?--------------------------------------------------------------- */}

        <hr id='projects' className=' my-20 border-black dark:border-gray-400' />

        {/* //?------------- */}

        <section className='mt-12'>
          <div>
            <h1 className='text-5xl font-bold text-center'>{TextBody.project[0]}</h1>
          </div>

          <div className='grid '>
            {projects.map((project, index) => (
              <div key={index} className=' relative  w-fit mx-auto my-14'>
                <Link href={project.url}>
                  <Image
                    className='cursor-pointer w-48 sm:w-80 lg:w-96  m-auto hover:opacity-50 peer-hover:opacity-50 transition-all duration-300'
                    src={project.path}
                    alt={project.name}
                    width={500}
                    height={500}
                  // onClick={() => { SetStateWinProject(true); setSelectProject(project.name) }}

                  />
                </Link>
                <div className='peer bottom-0  left-0 right-0 opacity-100 peer-hover:opacity-100 hover:opacity-100 m-4 grid transition-all duration-500'>
                  <p className=''>{project.text}</p>
                  <div className='flex justify-between'>
                    <h1 className='text-3xl'>{project.name}</h1>
                    <Link className='cursor-pointer' href={project.url}>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 hover:text-red-400 hover:scale-150">
                        <path fillRule="evenodd" d="M3.75 12a.75.75 0 01.75-.75h13.19l-5.47-5.47a.75.75 0 011.06-1.06l6.75 6.75a.75.75 0 010 1.06l-6.75 6.75a.75.75 0 11-1.06-1.06l5.47-5.47H4.5a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className='flex justify-center items-center col-span-2 mb-12 my-12'>
            <Link href={"/projects"}>
              <Button className='bg-red-500 text-white px-6 text-lg '>
                {TextBody.project[3]}
              </Button>
            </Link>
          </div>
        </section>

        {/* //?--------------------------------------------------------------- */}

        <hr id='about' className=' my-20 border-black dark:border-gray-400' />

        {/* //?------------- */}

        <section >
          <div className='grid md:grid-cols-2 my-8'>
            <div className='grid gap-y-8 my-8 mx-4 md:mx-0'>
              <h1 className='text-5xl font-bold tex'>{TextBody.about[0]}</h1>
              <p className='text-xl md:text-xl'>
                {/* Mi nombre es Francisco Angel Romero Tepal, trabajo en el mundo de la tecnología creando y dando vida a ideas. */}
                {TextBody.about[1]}
              </p>
              <p className='text-xl md:text-xl'>
                {/* Soy Desarrollador Full-Stack con conocimientos en <b className='text-purple-900 dark:text-purple-500 font-semibold'> Frontend, Backend y IoT. </b> Desarrollo sitios web, aplicaciones web, herramientas para usuarios y dispositivos de IoT. */}
                {TextBody.about[2]} <b className='text-purple-900 dark:text-purple-500 font-semibold'> Frontend, Backend and IoT. </b> {TextBody.about[3]}
              </p>
            </div>
            <div className='m-auto '>
              <Image
                className='peer w-44 sm:w-52 lg:w-72  m-auto hover:opacity-50 peer-hover:opacity-50 transition-all duration-300'
                src="/mi_foto_pro.jpeg"
                alt="Imagen de Francisco Angel Romero Tepal"
                width={500}
                height={500}
              />
              <p className='text-xl text-center mt-2 invisible peer-hover:visible'>Francisco Angel Romero Tepal</p>
            </div>
          </div>

        </section>




        {/* //?--------------------------------------------------------------- */}

        <hr className=' my-20 border-black dark:border-gray-400' id='contact' />

        {/* //?------------- */}


        <section className='min-h-screen'>
          <h1 className=' text-4xl font-semibold text-center m-12'>
            {TextBody.contact[0]}
          </h1>

          <div className=' grid md:grid-cols-2 gap-4 p-4'>
            <div className=' m-auto p-8 rounded-sm border  w-3/4 bg-white/25 dark:bg-black/25 dark:text-white'>
              <h1 className='my-8 text-center text-3xl font-semibold text-blue-400'>
                {TextBody.contact[1]}
              </h1>
              <form onSubmit={enviarDatos} className="grid gap-y-12 ">
                <input
                  name='company'
                  type="text"
                  placeholder={TextBody.contact[2]}
                  onChange={handleChangeData}
                  required
                  className='px-4 w-11/12 m-auto bg-transparent border-b outline-none border-gray-200'
                />
                <input
                  name='email'
                  type="text"
                  placeholder={TextBody.contact[3]}
                  onChange={handleChangeData}
                  required
                  className='px-4 w-11/12 m-auto bg-transparent border-b outline-none border-gray-200'
                />
                <textarea
                  name="msg"
                  id="msg"
                  cols={1}
                  rows={1}
                  placeholder={TextBody.contact[4]}
                  className='h-32 w-11/12 m-auto px-4 bg-transparent border-b outline-none border-gray-200'
                  onChange={(e) => textAreaChange(e.target.value)}
                ></textarea>

                <Button>
                  {TextBody.contact[5]}
                </Button>
              </form>
            </div>

            <div className='grid'>
              <h1 className='text-4xl text-center mb-12 font-semibold '>
                {TextBody.contact[6]}
              </h1>
              {/* <hr /> */}
              {contactPage.map((contact, index) => (
                <Link href={contact.link} className='flex gap-8 items-center mx-auto p-4 border rounded-md my-4 w-full hover:text-blue-500 hover:border-blue-500' key={index}>
                  <Image
                    className='peer w-8 sm:w-10  dark:invert'
                    src={contact.img}
                    alt="Grupo Accesa"
                    width={500}
                    height={500}
                  />
                  <div>
                    <h2 className='text-2xl font-semibold'>{contact.name}</h2>
                    <p className='text-xl'>{contact.text}</p>
                  </div>
                </Link>

              ))}

            </div>
          </div>

        </section>

        <div className='m-auto border w-fit p-4 rounded-md' onClick={() => setMsgExitoso(true)}>
          <Button className='m-auto'>Activar</Button>
        </div>
      </main>


      {msgExitoso ?
        <div className='fixed top-0 left-0 right-0 bottom-0 bg-white/40 dark:bg-black/40 border dark:text-white shadow-xl  z-40 w-fit h-fit m-auto px-12 py-8 rounded-lg backdrop-blur-md '>
          <h1 className='text-2xl m-8 font-semibold '>
            {TextBody.contact[7]}
          </h1>
          <div className='flex' >
            <Button className='m-auto border  px-4 py-2 rounded-md border-green-700 dark:border-green-400' onClick={() => setMsgExitoso(false)}>
              {TextBody.contact[8]}
            </Button>
          </div>
        </div>
        : ""
      }

    </>
  )
}

// Me dedicó principalmente a resolver problemas.
// Doy mantenimiento a equipos electrónico, código  y actualizaciones. Asesorías a clientes y compañeros.
// Desde el momento en que entre la empresa dedico a cambiar y actualizar todos sus equipos y software, debido al desabasto de microcontroladores.
// He creado código para páginas web (HTML, CSS, Javascript, React js, Next js), desarrollo backend (Node, API REST, Javascript, Nest js) y IoT (Arduino, Python).
