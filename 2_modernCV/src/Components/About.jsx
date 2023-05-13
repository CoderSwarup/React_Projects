import React from 'react'
import styled from 'styled-components'

export default function About() {
    return (
        <Wrapper className='container container2 common-padding'>
            <h1 className='section-heading'>About Us!</h1>

            <div className="content">
                <div className="left">
                    <h2>I'm Swarup B</h2>
                    <p>Full-stack Software Developer and Javascript Enthusiast, Who Likes <br /> Building Things In Javascript. Please visit my channel for awesome stuff</p>
                    <p>
                        🔥 👨🏽‍💻🏅
                    </p>
                    <button>Download CV</button>
                </div>
                <div className="right">
                    <div>
                        <strong>Name</strong>
                        <p>Swarup Bhise</p>
                    </div>
                    <div>
                        <strong>Date of birth</strong>
                        <p>21 December 2004</p>
                    </div>
                    <div>
                        <strong>Spoken Langages</strong>
                        <p>English - Hindi - Marathi</p>
                    </div>
                    <div>
                        <strong>Nationality</strong>
                        <p>India</p>
                    </div>
                    <div>
                        <strong>Interest</strong>
                        <p>Gaming, Coding, Travel</p>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    
.content{
    color: ${({ theme }) => theme.colors.fade};
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    font-size: 1.6rem;

    .left{
        display: grid;
        place-items: start;
        gap: 1.6rem;

        width: 50%;
        h2{
            font-size: 2rem;
            color: ${({ theme }) => theme.colors.info};
        }

       button{
        padding: 4px 8px;
        background: rgba(77, 121, 246, 0.1);
        color: ${({ theme }) => theme.colors.info};
        border: none;
        line-height: 30px;
    
       }
    }


    .right{
        width:50%;
        display: grid;
        place-items: start;
        gap: 1.5rem;
        

        div{
            display: flex;
           
            margin-left: 7rem;



            strong{
                font-size: 1.4rem;
                width: 150px;
                position: relative;
                

                &::after{
                    content: ":";
                    right: 0;
                    top: 0;
                    position: absolute;

                }
            }

            p{
                font-size: 14px;
                margin-left: 20px;
            }
        }
    }

}

@media screen and (max-width:900px){
    
    .content{
        
        gap: .5rem;

        .right{
            width: 90%;
        }
    }
}

@media screen and (max-width:768px){

    .content{
        flex-direction: column;
        justify-content: flex-start;
        gap: 2rem;

        .left{
            width: 80%;
        }

        .right{
            margin-top: 2rem;
            div{
                margin-left: 0;
            }
        }
    }
}

@media screen and (max-width:625px){
    .content{
        .left{
        width: 90%;
      p{
        font-size: 1.4rem;
      }
    }

    }
   
}

@media screen and (max-width:460px){
.content{
    .right{
        width:100%;
      
        

        div{
           



            strong{
                font-size: 1.2rem;
                width: 130px;
                position: relative;
                

                &::after{
                    content: ":";
                    right: 0;
                    top: 0;
                    position: absolute;

                }
            }

            p{
                font-size: 12px;
                margin-left: 10px;
            }
        }
    }

}
}


`