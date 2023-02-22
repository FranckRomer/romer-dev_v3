import { useEffect, useState } from "react"
import Image from "next/image"
import { Roboto_Flex } from "@next/font/google"


const ModalProject = ({ Modal, setModal, SelecttProyect }: any) => {
    const [modals, setModals] = useState(false)

    useEffect(() => {
        console.log(Modal);
    })
    //
    return (
        <>
            {Modal ?
                <div className="">
                    <div className="fixed top-0 left-0 w-screen h-screen " onClick={() => setModal(false)} ></div>
                    <div className="fixed top-0 left-0 right-0 bottom-0 m-auto p-8  bg-black/90 text-white max-w-4xl h-3/4 overflow-x-hidden overflow-y-scroll z-50">
                        <div onClick={() => setModal(false)} className="flex justify-end">
                            <Image
                                // Absolute URL                    
                            className='peer w-6 sm:w-6 hover:scale-125 '
                                src="/iconos/cerrar.png"
                                alt="cerrar"
                                width={77}
                                height={77}
                            />
                        </div>
                        <h1 className="text-center text-4xl font-semibold">{SelecttProyect}</h1>
                    </div>
                </div>
                : ""
            }

        </>
    )
}

export default ModalProject
