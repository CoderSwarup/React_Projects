import React, { useRef } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export default function Navbar() {

    const Ref = useRef()
    const Ref2 = useRef()

    const src = {
        img1: "./images/menu.png",
        img2: "./images/cancel.png"
    }
    const show = () => {
        Ref.current.classList.add('show')
        Ref2.current.classList.add('show2')

        let style = document.querySelectorAll('.li')
        // console.log(style)

        Array.from(style).forEach((ele) => {
            ele.addEventListener('click', () => {
                Ref.current.classList.remove('show')
                Ref2.current.classList.remove('show2')
            })
        })
    }
    const show2 = () => {
        Ref.current.classList.remove('show')
        Ref2.current.classList.remove('show2')
    }


    return (
        <MainHeader>
            <nav>
                <div className="logo">
                    <h1>
                        SAMMY
                    </h1>
                </div>

                <div className="navlinks " ref={Ref}>
                    <NavLink to="/" className="li"><li>Home</li></NavLink>
                    <NavLink to="/about" className="li"><li>About</li></NavLink>
                    <NavLink to="/service" className="li"><li>Services</li></NavLink>
                    <NavLink to="/contact" className="li"><li>Contact</li></NavLink>
                </div>
                <div className="menu" ref={Ref2}>
                    <img onClick={show} src={src.img1} alt="" />
                    <img onClick={show2} src={src.img2} alt="" />
                </div>
            </nav>
        </MainHeader>
    )
}


const MainHeader = styled.header`
    padding: 1rem 3rem;
    width: 100%;
    background: ${({ theme }) => theme.colors.bg2};

nav{
display: flex;
justify-content: space-between;
align-items: center;


.navlinks{
    display: flex;
    gap: 4rem;
    font-size: 1.9rem;
    text-decoration: none;

    li{
        color: ${({ theme }) => theme.colors.text};
        list-style: none;
        transition: all .4s ease;
        &:hover ,
        &:visited{
    color:${({ theme }) => theme.colors.helper};
}
    }
   

}


.logo{
    h1{
        transition: all .5s ease-in-out;
        cursor: pointer;
    &:hover{
        color:${({ theme }) => theme.colors.helper};

    }
}
}

.menu{
    position: relative;
    filter: invert(100%);
    display: none;
    img{
        width: 30px;

        &:nth-child(2){
            display: none;
        }
    }
}
}

@media screen and (max-width: ${({ theme }) => theme.media.mobile}) {
   nav{
    .navlinks{
        display:none;
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100vh;
        z-index: 999;
        background: ${({ theme }) => theme.colors.bg};
       display: flex;
       flex-direction: column;
       justify-content: center;
       align-items: center;
       transition: all .5s ease;
    }
    .menu{
        display: block;
        z-index: 1000;

       
    }

    .menu.show2{
        img{
    display: none;
    &:nth-child(2){
    display: block;
}
    }
}




    .navlinks.show{
        left: 0;
     
        }
    }

   }


   @media screen and (max-width: 400px) {
    padding: 1rem .7rem;

nav{
    .logo{
        h1{
            font-size: 4rem;
        }
    }
}
   }
`;

