import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

export default function ScrollTop() {

    const [show, setshow] = useState(false)

    const ToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
    }

    const ScrollHeight = () => {
        const height = window.document.documentElement.scrollTop
        // console.log(cheight)
        if (height > 200) {
            setshow(true)
        } else {
            setshow(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', ScrollHeight)
    }, [])
    return (
        <Wrapper>
            {show && (<button onClick={ToTop}><h2>&uarr;</h2></button>)}
        </Wrapper>
    )
}


const Wrapper = styled.section`
    position: fixed;
    bottom: 50px;
    right: 50px;
z-index:800;
    button{
        width: 5rem;
        height: 5rem;
        border-radius: 50%;
        background-color:  rgb(98 84 243);
        border: none;
        
        h2{
            color:#fff;
            font-size:3rem;
            font-weight: 800;
            animation: move 2s infinite alternate;
        }

    @keyframes move {
        0%{
            transform: translateY(-3px);
        }
        100%{
            transform: translateY(3px);
        }
    }
    }


    @media screen  and (max-width: ${({ theme }) => theme.media.tab}){
        bottom: 10px;
    right: 10px;
}
@media screen  and (max-width:500px){
    
    button{
        width: 4rem;
        height: 4rem;
        h2{
            
            font-size:1.9rem;
          
        }
    }
}


`