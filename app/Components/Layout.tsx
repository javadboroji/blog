import React from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import BreadCrumb from './BreadCrumb/BreadCrumb'
import connectMongoDB from '../Libs/Mongodb'

function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className='flex flex-col justify-between h-[100vh]'>
            <Header />
            <BreadCrumb/>
            <div className='container'>
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout