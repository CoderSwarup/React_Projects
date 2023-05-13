import React from 'react'
import styled from 'styled-components'
import Phone from '@iconscout/react-unicons/icons/uil-phone-volume'
import UilEnvolope from '@iconscout/react-unicons/icons/uil-envelope'
import Location from '@iconscout/react-unicons/icons/uil-location-point'


export default function Contact() {
    return (
        <Wrap className='container container2 common-padding'>
            <h1 className='section-heading'>Contact Me</h1>


            <div className="contact-section">
                <div className="left">

                    <div className="block">
                        <Phone size="35" color="#2b55cc"></Phone>
                        <div>
                            <h2>Free Call To Me:</h2>
                            <p>(+1) 234-567-8910</p>
                        </div>
                    </div>
                    <div className="block">
                        <UilEnvolope size="35" color="#2b55cc"></UilEnvolope>
                        <div>
                            <h2>Mail Me:</h2>
                            <p>swarupbhise12345678912@gmail.com</p>
                        </div>
                    </div>
                    <div className="block">
                        <Location size="35" color="#2b55cc"></Location>
                        <div>
                            <h2>Find Me:</h2>
                            <p>513 Bhedshi , India</p>
                        </div>
                    </div>
                </div>

                <div className="right">
                    <form onSubmit={(e) => { e.preventDefault() }}>

                        <div className="top">
                            <div>
                                <h3>Name</h3>
                                <input type="text" />
                            </div>
                            <div>
                                <h3>Email</h3>
                                <input type="email" />
                            </div>
                        </div>
                        <div className="text">
                            <h3>Message</h3>
                            <textarea name="" id="" cols="30" rows="10"></textarea>
                        </div>
                        <input type="submit" />
                    </form>
                </div>
            </div>

        </Wrap>
    )
}

const Wrap = styled.section`
.contact-section{
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    grid-gap:1.7rem;
    align-items: start;

    .left{
        margin-top: 2rem;
        display: grid;
        gap: 3rem;


        .block{
            display: flex;
            align-items: center;
            gap: 2rem;

            h2{
                font-size: 1.7rem;
                margin-bottom: .6rem;
                color: ${({ theme }) => theme.colors.mild};
            }

            p{
                font-size: 1.3rem;
                color: ${({ theme }) => theme.colors.fade};
            }

        }
    }

    form{
        display: grid;
        place-items: start;
        gap: 1.7rem;

        h3{
                font-size: 16px;
                color: ${({ theme }) => theme.colors.mild};
                letter-spacing: 1px;
                margin-bottom: .7rem;
            }

        .top{
            width: 100%;
            display: flex;
           align-items: center;
           gap: 40px;

           div{
            width: 50%;

            
            input{
               padding: 6px 15px;
                width: 100%;
                background: transparent;
                outline: none;
                border: 1px solid ${({ theme }) => theme.colors.mild};
                transition: all .3s ease-in-out;
                color:${({ theme }) => theme.colors.pure} ; 

                &:focus{
                    border: 1.5px solid ${({ theme }) => theme.colors.info};
                }
            }
           }
        }



        .text{
            width: 100%;
            textarea{
                width: 100%;
                resize: none;
                color:${({ theme }) => theme.colors.pure} ;
                background: transparent;
                outline: none;
                padding: 10px;
                border: 1px solid ${({ theme }) => theme.colors.mild};
                transition: all .3s ease-in-out;
                &:focus{
                    border: 1.5px solid ${({ theme }) => theme.colors.info};
                }

            }

        }

        input[type="submit"]{
            background: ${({ theme }) => theme.colors.secondary};
            padding: 7px 14px;
            line-height: 20px;
            font-size: 17px;
            outline: none;
            font-weight: 600;
            color:${({ theme }) => theme.colors.pure} ;
            border: none;
            transition: all .4s ease;
            &:hover{
                transform: scale(.94);
            }
        }
    }
}


@media screen and (max-width:768px){
    .contact-section{
        display: block;

        .left{
       display: flex;
       flex-wrap: wrap;
       margin-bottom:4rem;
    }
}}

@media screen and (max-width:460px){
    .contact-section{
form{
    .top{
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        width: 100%;

           div{
            width: 100%;

            
            input{
               padding: 6px 15px;
                width: 100%;
                background: transparent;
                outline: none;
                border: 1px solid ${({ theme }) => theme.colors.mild};
                transition: all .3s ease-in-out;
                color:${({ theme }) => theme.colors.pure} ; 

                &:focus{
                    border: 1.5px solid ${({ theme }) => theme.colors.info};
                }
            }
           }
        }
}
}
}   
`