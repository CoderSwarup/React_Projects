import React from 'react'
import '../Style.css'
import HeroSection from './Component2/HeroSection'
import Contact from './Contact'
import Services from './Services'

export default function Home() {

    const data = {
        name: "Toxic Sammy",
        btn: "Contact Me",
        img: "./images/hero.svg"
    }


    return (
        <div>
            <HeroSection {...data}></HeroSection>
            <Services></Services>
            <Contact />
        </div>
    )
}
