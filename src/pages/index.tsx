import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import { useState } from 'react'
import Button from '@/components/Button'
import ModalProject from '@/modals/ModalProject'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [stateWinProject, SetStateWinProject] = useState(false)
  const [selectProject, setSelectProject] = useState("")

  const [datosUsuario, SetDatosUsuario] = useState({
    company: "",
    email: "",
    msg: "",
  })

  const skills = [
    { name: 'React', path: '/SKILLS/react.png' },
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
    { name: 'Linkedin', path: '/social/linkedin.png', url: "https://www.linkedin.com/in/francisco-angel-romero-tepal-a942b5202/" },
    { name: 'GitHub', path: '/social/github.png', url: "https://github.com/FranckRomer" },
  ];

  const projects = [
    { name: 'Settings', path: '/projects/configuraciones.png', text: "Page of show devices of the buses", url: "/" },
    { name: 'Buses', path: '/projects/camiones.png', text: "Page of show devices of the buses", url: "/" },
    { name: 'Ads', path: '/projects/anuncios.png', text: "Page of show devices of the buses", url: "/" },
    { name: 'Domotica', path: '/projects/domotica.png', text: "Page of show devices of the buses", url: "/" },
  ]

  const services = [
    { name:"Landing Page", text:"Creating a landing-page turnkey website from 14 days", },
    { name:"Web Application", text:"Creating a web application turnkey website from 50 days", },
    { name:"Micro - Services", text:"Creating a web application turnkey website from 50 days", },
    { name:"CRUD Application", text:"Creating a web application turnkey website from 50 days", },
    { name:"API Services", text:"Creating a web application turnkey website from 50 days", },
    { name:"Device Automation", text:"Creating a web application turnkey website from 50 days", },
  ]

  const contactPage = [
    { name: 'Phone', img: '/iconos/telefono.png', text: "(+52) 22-11-16-08-85", link: "/#contact" },
    { name: 'Email', img: '/iconos/email2.png', text: "contact@romer-dev.com", link: "/#contact" },
    { name: 'Linkedin', img: '/social/linkedin.png', text: "Francisco Angel Romero Tepal", link: "https://www.linkedin.com/in/francisco-angel-romero-tepal-a942b5202/" },
    // { name: 'GitHub', img: '/social/github.png', text: "FranckRomer", link: "https://github.com/FranckRomer" },
  ]

  // const allSkills = [
  //   {
  //     name: "Fronted", text: "", skills: [
  //       { name: 'Html', path: '/SKILLS/html.png' },
  //       { name: 'Css', path: '/SKILLS/css.png' },
  //       { name: 'JavaScript', path: '/SKILLS/js.png' },
  //       { name: 'React', path: '/SKILLS/react.png' },
  //       { name: 'Next js', path: '/SKILLS/nextjs.png' },
  //       { name: 'Tailwind', path: '/SKILLS/tailwind.png' },
  //     ]
  //   },
  //   {
  //     name: "Backend", text: "", skills: [
  //       { name: 'JavaScript', path: '/SKILLS/js.png' },
  //       { name: 'Node js', path: '/SKILLS/nodejs.png' },
  //       { name: 'Nest js', path: '/SKILLS/nest.png' },
  //       { name: 'Mongo Db', path: '/SKILLS/mongodb.png' },
  //       { name: 'Postgres', path: '/SKILLS/postgres.png' },
  //     ]
  //   },
  //   {
  //     name: "IoT", text: "", skills: [
  //       { name: 'Arduino', path: '/SKILLS/arduino.png' },
  //       { name: 'C++', path: '/SKILLS/C++.png' },
  //       { name: 'Microchip', path: '/SKILLS/microchip.png' },
  //       { name: 'Raspberry', path: '/SKILLS/raspberry.png' },
  //     ]
  //   },
  //   {
  //     name: "Other", text: "", skills: [
  //       { name: 'Git', path: '/SKILLS/git.png' },
  //       { name: 'Linux', path: '/SKILLS/linux.png' },
  //       { name: 'Matlab', path: '/SKILLS/matlab.png' },
  //       { name: 'Figma', path: '/SKILLS/figma.png' },
  //       { name: 'Notion', path: '/SKILLS/notion.png' },
  //     ]
  //   },
  // ]
  // 
  // 
  // 
  const handleChangeData = (e: any) => {
    SetDatosUsuario({
      ...datosUsuario,
      [e.target.name]: e.target.value
    })
  }
  // *---------------------------------------------


  const enviarDatos = async (e: any) => {
    e.preventDefault()
    console.log(datosUsuario)
    // try {
    //     const response = await axios.post('/api/dana/changeDataTouch', datos)
    //     console.log(response)
    //     if (response.status === 200) {
    //         setVentanaBotones(false)
    //         props.hijoAPadre()
    //     }
    // } catch (error) {
    //     setError(false)
    //     console.log(error);
    //     setTimeout(() => {
    //         console.log("1 Segundo esperado")
    //         setError(true)
    //     }, 150);
    // }
  }

  const setModalProject = (datoshijo: boolean) => {
    SetStateWinProject(false);
  }

  const DescargaCV = async () => {
    console.log("Se descarga el CV");
    // const response = await fetch('/ruta/al/archivo/guia.pdf');
    // const blob = await response.blob();
    // saveAs(blob, 'guia.pdf');

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

      <ModalProject
        Modal={stateWinProject}
        setModal={setModalProject}
        SelecttProyect={selectProject}
      />

      <main className='min-h-screen'>

        {/* //?--------------------------------------------------------------- */}
        <section className=' min-h-90vh dark:bg-azul-negro sm:grid sm:grid-cols-2  mt-8 '>

          <div className='m-auto px-5 text-center '>
            <h2 className='text-2xl my-3'>Hi 🖖,</h2>
            <h1 className='text-6xl font-bold '>{"I'm"} <span className='text-red-400'>Franck</span></h1>
            <h3 className='text-3xl my-3 font-semibold text-purple-900 dark:text-purple-500'>{'< Web Developer />'}</h3>
            <p className='text-gray-700 mb-8 dark:text-white text-xl'>
              Desarrollo de aplicaciones web, algoritmos, bases de datos y automatizacion de dispositivos.
            </p>
            <a
              className='animate-bounce hover:animate-none flex justify-center items-end my-4 mx-auto border-b p-1 w-fit border-black dark:border-gray-200 dark:hover:border-red-500 hover:border-red-500 hover:text-red-500 cursor-pointer hover:scale-125 transition-all duration-300'
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
              <h3 className='font-semibold'>Download CV</h3>
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
              <Button className='bg-red-500 text-white px-6 text-lg '>Contact me!</Button>
            </Link>
          </div>

        </section>

        {/* //?--------------------------------------------------------------- */}

        <hr id='projects' className=' my-10 border-black dark:border-gray-400' />

        {/* //?------------- */}

        <section className='mt-12'>
          <div>
            <h1 className='text-5xl font-bold text-center'>Portfolio</h1>
          </div>
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

          <div className='flex justify-center items-center col-span-2 mb-12 my-12'>
            <Link href={"/contact"}>
              <Button className='bg-red-500 text-white px-6 text-lg '>More projects</Button>
            </Link>
          </div>
        </section>

        {/* //?--------------------------------------------------------------- */}

        <hr id='about' className=' my-20 border-black dark:border-gray-400' />

        {/* //?------------- */}

        <section >
          <div className='grid md:grid-cols-2 my-8'>
            <div className='grid gap-y-8 my-8 mx-4 md:mx-0'>
              <h1 className='text-5xl font-bold tex'>About me</h1>
              <p className='text-xl md:text-xl'>Mi nombre es Francisco Angel Romero Tepal, trabajo en el mundo de la tecnología creando y dando vida a ideas.</p>
              <p className='text-xl md:text-xl'>Soy Desarrollador Full-Stack con conocimientos en <b className='text-purple-900 dark:text-purple-500 font-semibold'> Frontend, Backend y IoT. </b> Desarrollo sitios web, aplicaciones web, herramientas para usuarios y dispositivos de IoT.</p>
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

          {/* <div className='grid md:grid-cols-2 gap-8 '>
              <div className=' mx-4 md:mx-0 grid items-stretch'>
                <h1 className='text-4xl font-bold my-4'>Experience</h1>
                <hr className='border-black dark:border-gray-400'/>
                <div className=' min-h-10r p-4 m-4 border rounded-lg grid-3-4 border-blue-700'>
                  <div>
                    <h3 className='text-2xl font-semibold'>Desarrollo de aplicaciones para IoT.</h3>
                    <p>Grupo Accesa</p>
                    <p>Current: September 2021</p>
                  </div>
                  <div className='m-auto'>
                    <Image
                      className='peer w-20 sm:w-24   hover:scale-125 m-auto'
                      src="/logos/accesa2.png"
                      alt="Grupo Accesa"
                      width={500}
                      height={500}
                    />
                  </div>
                </div>
                <div className='min-h-10r p-4 m-4 border rounded-lg grid-3-4 border-orange-500'>
                  <div>
                    <h3 className='text-2xl font-semibold'>Desarrollo de dispositivos en IoT</h3>
                    <p>Laboratorio Sled</p>
                    <p>Sesson: January 2019 - October 2020</p>
                  </div>
                  <div className='m-auto'>
                    <Image
                      className='peer w-20 sm:w-24  hover:scale-125 m-auto'
                      src="/logos/fce2.png"
                      alt="Grupo Accesa"
                      width={500}
                      height={500}
                    />
                  </div>
                </div>
              </div>

            <div className=' mx-4 md:mx-0 grid items-stretch'>
              <h1 className='text-4xl font-bold my-4'>Education</h1>
              <hr className='border-black dark:border-gray-400'/>
              <div className=' min-h-10r p-4 m-4 border rounded-lg grid-3-4 border-green-500'>
                <div>
                  <h3 className='text-2xl font-semibold'>Platzi</h3>
                  <p>Escuela en linea</p>
                  <p>Current: October 2022</p>
                </div>
                <div className='m-auto'>
                  <Image
                    className='peer w- sm:w-20  hover:scale-125 m-auto'
                    src="/logos/platzi.png"
                    alt="Grupo Accesa"
                    width={500}
                    height={500}
                  />
                </div>
              </div>
              <div className='min-h-10r p-4 m-4 border rounded-lg grid-3-4 border-pink-700'>
                <div>
                  <h3 className='text-2xl font-semibold'>Buap</h3>
                  <p>Benemerita Univercidad Autonoma de Puebla</p>
                  <p>Current: September 2015 - September 2020</p>
                </div>
                <div className='m-auto'>
                  <Image
                    className='peer w-20 sm:w-24  hover:scale-125 m-auto'
                    src="/logos/buap.png"
                    alt="Grupo Accesa"
                    width={500}
                    height={500}
                  />
                </div>
              </div>

            </div> */}

          {/* // */}
          {/* <div>
              <h1 className='text-4xl font-bold text-center'>Skills</h1>
              <hr />
              <div className='grid gap-8 md:grid-cols-1 C'>
                {allSkills.map((data, index1) => (
                  <div key={index1} className='grid gap-y-4 '>
                    <h1 className='text-3xl font-semibold italic  md:m-4 '>{data.name}</h1>
                    <div className='grid grid-auto gap-y-4 md:gap-y-4 w-4/5 m-auto'>
                      {data.skills.map((skill, index) => (
                        <div key={index} className='grid items-stretch'>
                          <Image
                            className='peer w-10 sm:w-12 animate-spin-slow hover:animate-none hover:scale-125 m-auto'
                            src={skill.path}
                            alt={skill.name}
                            width={77}
                            height={77}
                          />
                          <p className='text-xs sm:text-sm text-center mt-2 md:invisible peer-hover:visible'>{skill.name}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div> */}

          {/* </div> */}


        </section>


        {/* //?--------------------------------------------------------------- */}

        {/* <hr className=' my-8' /> */}
        <hr className=' my-20 border-black dark:border-gray-400' />

        <section>
          <h1 className='text-5xl font-semibold text-center'>Services</h1>
          <div className='grid grid-cols-2 gap-12  my-12'>
            {services.map((service, index)=>(
              <div key={index} className='max-w-sm h-72 md:h-auto block border rounded-md m-auto p-6 hover:shadow-md hover:shadow-gray-500 dark:hover:shadow-stone-700 border-gray-600 dark:border-stone-500'>
                <h1 className='text-2xl font-semibold'>{service.name}</h1>
                <p className='text-xl text-gray-800 dark:text-stone-300'>{service.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* //?--------------------------------------------------------------- */}

        <hr className=' my-20 border-black dark:border-gray-400' id='contact' />

        {/* //?------------- */}


        <section className='min-h-screen'>
          <h1 className=' text-4xl font-semibold text-center m-12'>{"Let's work to Together"}</h1>

          <div className=' grid md:grid-cols-2 gap-4 p-4'>
            <div className=' m-auto p-8 rounded-sm border border-emerald-600 w-3/4 bg-black/75 text-white'>
              <h1 className='my-8 text-center text-3xl font-semibold'>Mend me a Messege</h1>
              <form onSubmit={enviarDatos} className="grid gap-y-12 ">
                <input
                  name='company'
                  type="text"
                  placeholder="Company or Name"
                  onChange={handleChangeData}
                  required
                  className='px-4 w-11/12 m-auto bg-transparent border-b outline-none border-gray-200'
                />
                <input
                  name='email'
                  type="text"
                  placeholder="Email"
                  onChange={handleChangeData}
                  required
                  className='px-4 w-11/12 m-auto bg-transparent border-b outline-none border-gray-200'
                />
                <textarea
                  name="msg"
                  id="msg"
                  cols={1}
                  rows={1}
                  placeholder="Write here your messegs"
                  className='h-32 w-11/12 m-auto px-4 bg-transparent border-b outline-none border-gray-200'
                ></textarea>

                <Button type="submit" onClick={enviarDatos}>Send</Button>
              </form>
            </div>

            <div className='grid'>
              <h1 className='text-4xl text-center mb-12 font-semibold '>{"Contact's"}</h1>
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
      </main>

    </>
  )
}



// <div className='grid'>
//               <h1 className='hidden md:block text-4xl font-semibold text-center'>Contacts</h1>
//               <p className='text-center text-xl font-semibold my-12 md:m-0'>
//                 {'“La tecnología esta en una constante evolución, por lo que la mejor forma de estar actualizado es con un constante aprendizaje”'}
//               </p>
//               <div className='hidden md:flex gap-2 items-center m-auto'>
//                 <Image
//                   className='peer w-16 sm:w-20  m-auto'
//                   src="/contact3.png"
//                   alt="Francisco Angel Romero Tepal"
//                   width={500}
//                   height={500}
//                 />
//                 <p className='text-3xl font-semibold'>Francisco Romero</p>
//               </div>
//               <hr />
//               <h1 className='text-3xl font-semibold'>Redes</h1>
//               <div className='flex items-center gap-8 justify-center '>
//                 {contactos.map((contact, index) => (
//                   <Button key={index}>
//                     <Link href={contact.url} className='block justify-center gap-y-4 '>
//                       <Image
//                         className='peer w-8 md:w-12  mx-auto'
//                         src={contact.path}
//                         alt={contact.name}
//                         width={100}
//                         height={100}
//                       />
//                       <p>{contact.name}</p>
//                     </Link>
//                   </Button>
//                 ))}

//               </div>
//             </div>
