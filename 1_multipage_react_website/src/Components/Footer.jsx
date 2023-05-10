import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import { Button } from '../Style/Button';

export default function Footer() {
    return (
        <Wrapper>

            <div className="footertop">
                <p>
                    Newly Get Started? <br />
                    Talk to us Today
                </p>
                <Button>Get Started</Button>
            </div>
            <div className="footerbottom">
                <div className=" center top">
                    <div className="item1">
                        <h3>Coder Swarup</h3>
                        <p>Hello i am coder Sammy <br /> I am Learning Web Development</p>
                    </div>
                    <div className="item1">
                        <p>Suncribe To get  Important Update</p>
                        <button className='btn'>Follow Emai</button>
                        <NavLink to="/contact">  <Button>
                            Subcribe
                        </Button></NavLink>
                    </div>
                    <div className="item1">
                        <p> Follow Us</p>
                    </div>
                    <div className="item1">
                        <p>Call Us</p>
                        <p>+91 830867534</p>
                    </div>
                </div>


                <div className="line"></div>


                <div className=" center bottom">
                    <div className="item1">
                        <p> @{new Date().getFullYear()} Swarup CopyRight Reserved</p>
                    </div>
                    <div className="item1">
                        <p>PRIVACY POLICI </p>
                        <p>TERMS & CONTIONS</p>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}


const Wrapper = styled.section`
margin-top: 3rem ;
display: grid;
place-items: center;
width: 100%;



.footertop{
width: 50%;
background: ${({ theme }) => theme.colors.bg2};
padding: 30px 50px;
display: flex;
justify-content: space-between;
align-items: center;
border-radius: 15px;
transform: translateY(50%);
/* border: 2px solid ${({ theme }) => theme.colors.border}; */
}

.footerbottom{
    width: 100%;
     background: ${({ theme }) => theme.colors.footer};
     color: ${({ theme }) => theme.colors.white};
     display: grid;
      place-items: center;
      padding: 100px 0 20px;
      gap:2rem;

     h1{
         color: ${({ theme }) => theme.colors.white};
     }

     p{
        color: ${({ theme }) => theme.colors.white};
        margin:0;
     }

     .center {
        width: 85%;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
    }

    .top{
        .btn{
            padding: 10px 23px;
            color: #00000085;
            border: none;
        }

     

        .item1{
            display: flex;
            flex-direction: column;
            gap: 2rem;
            align-items: flex-start;
        }
    }


    .line{
        width: 100%;
        height: .15rem;
        background: #fff;
    }

    .bottom{
        gap:12rem;
    }
     
}


@media screen and (max-width: ${({ theme }) => theme.media.tab}){
   
.footertop{
width: 80%;
padding: 30px 20px;
}



.footerbottom{


     h1{
         color: ${({ theme }) => theme.colors.white};
     }

     p{
        color: ${({ theme }) => theme.colors.white};
        margin:0;
     }

     .center {
        width: 90%;
       flex-wrap: wrap;
       gap: 3rem;
    }

    .top{
        .btn{
            padding: 10px 23px;
            color: #00000085;
            border: none;
        }
        .item1{
       width: 280px;
        }
    }


    .line{
        width: 100%;
        height: .15rem;
        background: #fff;
    }

    .bottom{
        gap:3rem;
    }
     
}
}



@media screen and (max-width: 550px) {
    .footertop{
width: 90%;
text-align: center;
gap: 2rem;
padding:  10px;
flex-direction: column;
}
}
`;