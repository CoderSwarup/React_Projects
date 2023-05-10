import React from 'react'
import styled from 'styled-components'
import { Button } from '../../Style/Button'

export default function Productitem(props) {
    return (
        <Product>
            <ImgContainer>
                <img src={props.image} alt="" />
            </ImgContainer>
            <p>{props.data.slice(0, 170)}</p>
            <Button>{props.price}$</Button>
        </Product>
    )
}


const Product = styled.div`
padding: 9px;
    width:350px;
background: ${({ theme }) => theme.colors.bg};
box-shadow: ${({ theme }) => theme.colors.shadow};
border: ${({ theme }) => theme.colors.border};
display: flex;
align-items: center;
flex-direction: column;
gap: 1.7rem;
justify-content: space-between;
border-radius:20px;
flex-wrap: wrap;

@media screen  and (max-width: 730px){
    width: 280px;
    }

    @media screen  and (max-width: 360px){
    width: 100%;
    }
`

const ImgContainer = styled.div`
    width: 120px;
    height: 120px;
    padding: 5px;
    border-radius: 10px;
position: relative;
    &::before{
        position: absolute;
        content: "";
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background: #00000024;
        width: 0%;
        transition: width .4s ease;
    border-radius: 10px;
    z-index:2;

    }

    &:hover::before{
        width: 100%;
    }
    img{
        width: 100%;
    object-fit: cover;
height: 100%;
        transition: width .4s ease;

}
    


`   