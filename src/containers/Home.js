import React from 'react'
import Header from '../components/Header/Header'
import './Home.css'
import Content from './Content'
import Navbar from '../components/Navigation/Navbar/Navbar'
function Home() {
    return (
        <div className="home">
            <Navbar/>
               <Header />
               <Content/>
        </div>
    )
}

export default Home
