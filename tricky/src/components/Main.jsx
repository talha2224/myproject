import React from 'react'
import Footer from './Footer'
import Game from './Game'
import Header from './Header'
import Navbar from './Navbar'
import Pub from './Pub'
import Vlog from './Vlog'

const Main = () => {
    return (
        <>
            <Navbar />
            <Header />
            <Pub/>
            <Game/>
            <Vlog/>
            <Footer/>
        </>
        
    )
}

export default Main