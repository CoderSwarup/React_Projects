import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Productitem from './Component2/Productitem'

export default function Services() {

    const [Alldata, AllSet] = useState([])

    useEffect(() => {
        const GetData = async () => {
            let data = await fetch("https://fakestoreapi.com/products?limit=6")
            let res = await data.json()
            console.log(res)
            AllSet(res)
        }

        GetData()
    }, [])
    return (
        <Wrapper>
            <h1>Our Services</h1>
            <div className="container">
                {
                    Alldata.map((ele, i) => {
                        return (
                            <Productitem key={i} image={ele.image} data={ele.description} price={ele.price}> </Productitem>
                        )
                    })
                }
            </div>
        </Wrapper>
    )
}


const Wrapper = styled.section`
background-color: rgba(255, 154, 255, 0.221);
border-radius: 10px;
padding: 20px 10px ;
    text-align: center;
    width: 80%;
    display: grid;
    gap: 3rem;
    margin: auto;
    margin-top: 5rem;
    place-items: center;
    .container{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 3rem;
        flex-wrap: wrap;
    }



    @media screen  and (max-width: ${({ theme }) => theme.media.tab}){
        width: 90%;
}



`