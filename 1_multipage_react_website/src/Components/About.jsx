import React from 'react'
import HeroSection from './Component2/HeroSection'

export default function About() {
    const data = {
        name: "Swarup Bhise",
        btn: "Subscribe",
        img: "./images/about1.svg"
    }
    return (
        <>
            <HeroSection {...data}> </HeroSection>
        </>
    )
}
