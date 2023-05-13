import React from 'react'
import styled from 'styled-components'

export default function Brands() {
    return (
        <Wrapper className='container container2 common-padding'>

            <div className="wrapper">
                <img src="./images/am.png" alt="" />
                <img src="./images/unique.png" alt="" />
                <img src="./images/jquery.png" alt="" />
                <img src="./images/jr.png" alt="" />
                <img src="./images/wp.png" alt="" />
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    .wrapper{
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
    }
    @media screen and (max-width: 998px){
.wrapper{
    gap: 2rem;
justify-content:center;
}}

`