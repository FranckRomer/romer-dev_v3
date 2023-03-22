import React, { useEffect, useState } from "react"
import Button from "./Button"
import Image from "next/image"
import { useLocalStorage } from "@/hooks/useLocalStorage"
import { useRouter } from "next/router"

const CambioIdioma = () => {
    const [language , setLanguage] = useLocalStorage("idioma", 'spanish')
    const [mounted, setMounted] = useState(false)
    const router = useRouter()

    useEffect(() => {
        setMounted(true)
    }, [])

    const CambiarIdioma = (data:string) =>{
        setLanguage(data)
        router.reload()
    }

    const renderIdiomButton = () => {
        if (!mounted) return null;
        if (language == "spanish") {
            return (
                <Button className='bg-gray-200 dark:bg-neutral-800' onClick={() => CambiarIdioma("english")}>
                    <Image
                        className='cursor-pointer w-6  h-6 m-auto transition-all duration-300'
                        src="/iconos/espaniol.png"
                        alt="Español"
                        width={500}
                        height={500}
                    />
                </Button>
            )
        }
        return (
            <Button className='bg-gray-200 dark:bg-neutral-800' onClick={() => CambiarIdioma("spanish")}>
                <Image
                    className='cursor-pointer w-6  h-6  m-auto transition-all duration-300'
                    src="/iconos/ingles.png"
                    alt="Ingles"
                    width={500}
                    height={500}
                />
            </Button>

        )
    }
    return (
        <>
            {renderIdiomButton()}

        </>
    )
}

export default CambioIdioma