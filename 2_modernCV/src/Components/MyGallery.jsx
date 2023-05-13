import { motion, AnimatePresence } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Data from './MyJson'
// console.log(Data)

export default function MyGallery() {
    const [Img, setimg] = useState(Data)



    const FilterImg = ((category, e) => {
        const List = document.querySelector('.tabs')
        const Mainlist = List.querySelectorAll('li')
        // console.log(Mainlist)

        Array.from(Mainlist).forEach(ele => {
            ele.classList.remove('active')
        })

        // console.log(e.target.classList);
        e.target.classList.add('active')


        if (category === 'all') {
            return setimg(Data)
        }
        let UpdateImg = Data.filter((current) => {
            return current.category === category
        })

        setimg(UpdateImg)
    })

    return (
        <Wrapp>
            <div className="tabs">
                <ul>
                    <li className='active' onClick={(e) => FilterImg('all', e)}>All</li>
                    <li onClick={(e) => FilterImg('coding', e)}>Coding</li>
                    <li onClick={(e) => FilterImg('frontend', e)}>Frontend</li>
                    <li onClick={(e) => FilterImg('backend', e)}>Backend</li>



                </ul>
            </div>


            <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} transition={{ duration: 1 }} className="work ">
                <AnimatePresence>
                    {
                        Img.map((ele, index) => {

                            return (

                                <motion.div
                                    animate={{ opacity: 1, scale: 1 }}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    exit={{ opacity: 0, scale: 0 }}

                                    transition={{ duration: 1 }}
                                    key={index}
                                    className="item">
                                    <img src={ele.image} alt={ele.category} />
                                </motion.div>



                            )

                        })
                    }
                </AnimatePresence>

            </motion.div>
        </Wrapp>
    )
}

const Wrapp = styled.div`

     ul{
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            list-style: none;
            flex-wrap: wrap;
            text-decoration: none;
            gap: 1rem;


            li{

                color: ${({ theme }) => theme.colors.fade};
                    border-bottom: 1px solid transparent;
                    padding: 10px 15px;
                    font-size: 14px;
                    letter-spacing: 2px;
                    text-decoration: none;
                    cursor: pointer;
                    transition: all .3s ease-in-out;

                    &.active{
                        border-color: ${({ theme }) => theme.colors.info};
                    
                        color: ${({ theme }) => theme.colors.info};
                    }
               
            }
        }   


        .work{
            margin-top: 4rem;
            display: grid;
            grid-template-columns: repeat(3,1fr);
            transition: all .6s ease;

           

            .item{
                transition: all .6s ease;
                cursor: pointer;
            }

                img{
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: all .6s ease;
                }
        
        }

/* @media screen and (max-width:460px){
    display: grid;
    place-items: center;

    .work{
        margin: auto;
        margin-top: 3rem;
        width:300px;

            
    }
} */
`