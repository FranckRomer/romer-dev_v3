import React from 'react'
import Head from 'next/head'
import Header from '@/sections/Header'
import Footer from '@/sections/Footer'

const Layout = ({children}:any) => {
    return (
        <>
            <Head>
                <title>Romer-Dev.com</title>
                <meta name='description' content='Pagina principal de Francisco Angel Romero Tepal' />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className='min-h-screen flex flex-col'>
                <Header/>
                <main className='flex-grow'>
                    {children}
                </main>
                <Footer/>
            </div>
        </>
    )
}

export default Layout
