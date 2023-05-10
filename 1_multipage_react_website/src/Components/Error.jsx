import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Button } from '../Style/Button'

export default function Error() {
    return (
        <Wrapper>
            <img src="./images/erroe.svg" alt="" />

            <NavLink to="/" > <Button>Go Home</Button></NavLink>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    width: 100%;
    height:80vh;
    display: grid;
    place-items: center;

    img{
        width: 500px;
    }
`