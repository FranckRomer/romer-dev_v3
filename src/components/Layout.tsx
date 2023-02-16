import React from 'react'
import Head from 'next/head'
import Header from '@/sections/Header'
import Footer from '@/sections/Footer'

const Layout = ({children}:any) => {
    return (
        <>
            <Head>
                <title>Portfolio</title>
                <meta name='description' content='Create Dark Mode in Next js and tailwind' />
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
