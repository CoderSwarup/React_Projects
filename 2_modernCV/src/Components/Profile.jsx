import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import UilCommentDots from '@iconscout/react-unicons/icons/uil-comment-dots'
import UilPhoneVolume from '@iconscout/react-unicons/icons/uil-phone-volume'
import UilEnvolope from '@iconscout/react-unicons/icons/uil-envelope'
import UilFacebook from '@iconscout/react-unicons/icons/uil-facebook'
import UilInsta from '@iconscout/react-unicons/icons/uil-instagram'
import UilWhatsapp from '@iconscout/react-unicons/icons/uil-whatsapp'
import WaterWave from 'react-water-wave';
import { TypeAnimation } from 'react-type-animation'

export default function Profile() {



    return (
        <section className='container container2' >
            <Wrapper  >
                {
                    <WaterWave    >
                        {methods => (
                            <section className='profile'>
                                <div className="left">
                                    <div className="avatar">
                                        <img src="./images/user.jpg" alt="" />
                                        <span>
                                            <UilCommentDots className="UilCommentDots" color="#fff"></UilCommentDots>
                                        </span>
                                    </div>

                                    <div>
                                        <h2>Swarup Bhise</h2>
                                        <p className='cd-healine loading-bar'>
                                            <span className='cd-words-wrapper'>
                                                <TypeAnimation
                                                    sequence={[
                                                        'React Developer', // Types 'One'
                                                        5000,// Waits 1s
                                                        'Web Developer', // Deletes 'One' and types 'Two'
                                                        5000, // Waits 2s
                                                        'C C++ Python', // Types 'Three' without deleting 'Two'
                                                        5000,

                                                    ]}
                                                    wrapper="b"
                                                    cursor={true}
                                                    repeat={Infinity}
                                                    style={{ fontSize: '1.7rem', fontWeight: "500" }}
                                                    className="my"
                                                />

                                            </span>
                                        </p>
                                    </div>
                                </div>



                                <div className="right">
                                    <ul className='contact'>
                                        <li>
                                            <UilPhoneVolume size="20" className="i" ></UilPhoneVolume>
                                            <strong>Phone :  </strong>  +91 293847 3838
                                        </li>
                                        <li>
                                            <UilEnvolope size="20" className="i"></UilEnvolope>
                                            <strong>Email :  </strong>  SwarupBhise999@gamil.com
                                        </li>
                                    </ul>

                                    <ul className='socials'>
                                        <li>
                                            <UilFacebook size="25" className="ii" color="#fff"></UilFacebook>
                                        </li>
                                        <li>
                                            <UilInsta size="25" className="ii" color="#fff"></UilInsta>
                                        </li>
                                        <li>
                                            <UilWhatsapp size="25" className="ii" color="#fff"></UilWhatsapp>
                                        </li>
                                    </ul>
                                </div>


                            </section>
                        )}
                    </WaterWave>
                }

            </Wrapper >


        </section>
    )
}


const Wrapper = styled.main`
 background:${({ theme }) => theme.colors.black};
 clip-path: polygon(0 0,100% 0,100% 80% , 25% 100% , 0 80%);
.profile{
   
    display: flex;
    align-items: center;
    padding: 3rem;
    margin-top: 60px;
    width: 100%;
    padding-bottom: 4rem;


    .left{
        flex: 2;
        display: flex;
        align-items: center;

        h2{
            color:${({ theme }) => theme.colors.fade};
            font-size: 2.4rem;
            font-weight: 600;
            margin-bottom: 1rem;
        }

        p{
            color:${({ theme }) => theme.colors.mild};
            font-size: 1.4rem;
        }

        img{
            width: 120px;
            height: 120px;
            border-radius: 50%;
        }


        .avatar{
            position: relative;
            margin-right:2rem;

            span{
                position: absolute;
                right: 4px;
                bottom: 4px;
                background:${({ theme }) => theme.colors.info} ;
                width: 32px;
                height: 32px;
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
                box-shadow: 0px 0px 20px 0px rgba(32,41,54,0.05);
                cursor: pointer;
            }
        }
      

       div{
        .loading-bar{
            .cd-words-wrapper{
            position: relative;
            &::after{
                position: absolute;
                content: "";
                width: 100%;
                bottom: -.6rem;
                left: 0;
                 height: 5px;
                background: linear-gradient(to right ,${({ theme }) => theme.colors.secondary}, ${({ theme }) => theme.colors.success} );
                /* animation: load 5s ease infinite; */
            }

            b{
                margin-right:.6rem;
                /* transition: all .3s ease; */
            }
            .first{
                display: none;
            }

            .second{
                display:none;
            }
            .third {
                display:none;
            }

            .show{
                display:inline-block;
            }
            @keyframes load {
                0%{
                    width: 0%;
                }
                100%{
                    width: 100%;
                }
            }
        }
        }
      
       }
    }



    .right{
        flex:1;


        .contact{
            list-style: none;
            margin-bottom: 1.6rem;

            li{
                color:${({ theme }) => theme.colors.ternary} ;
                margin-bottom: .7rem;
                font-size: 14px;
                display: flex;
                align-items: center;

                .i{
                    font-size: 2px;
                    margin-right:.6rem;
                }
            }
        }


        .socials{
            display: flex;
            align-items: center;
            gap: 2rem;

            li{
                width: 40px;
                height: 40px;         
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;

                &:nth-child(1){
                    background: ${({ theme }) => theme.colors.secondary} ;
                }

                &:nth-child(2){
                    background: ${({ theme }) => theme.colors.dribbble} ;
                }

                &:nth-child(3){
                    background: ${({ theme }) => theme.colors.green} ;
                }
            }
        }

    }
}


@media screen and (max-width: 998px){
    clip-path:none;
.profile{
    flex-direction: column;
    align-items: flex-start;

    .left{
        margin-bottom: 2rem;
    }

    .right{
        align-self: flex-end;
    }
}


}

@media screen and (max-width:625px){

    .profile{

        .right{
            margin-top: 2rem;
            align-self: flex-start;
        }
    }
}

@media screen and (max-width:380px){
    .profile{
        padding: 1rem;

        .left{
            h2{
                font-size: 2rem;
            }
            img{
                width: 100px;
                height: 100px;
            }

            .my{
                font-size: 1rem !important;
            }
        }
    }

}
`


