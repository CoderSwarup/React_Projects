import React from 'react'
import styled from 'styled-components'

export default function Footer() {
    return (
        <Wrap className='container container2 '>
            <p>© {new Date().getFullYear()}. All rights reserved by Swarup</p>
        </Wrap>
    )
}


const Wrap = styled.section`
background: ${({ theme }) => theme.colors.footer} !important;
text-align: center;
padding: 15px !important;
margin-bottom: 8rem !important;
    p{
        font-size: 18px;
        color: ${({ theme }) => theme.colors.fade};
    }
`