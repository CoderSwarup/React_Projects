import React, { useEffect } from 'react'
import styled from 'styled-components'
import Cap from '@iconscout/react-unicons/icons/uil-graduation-cap'
import SuitCase from '@iconscout/react-unicons/icons/uil-suitcase'

export default function Skills() {

    useEffect(() => {
        const All = () => {
            const data = document.querySelectorAll('.prgress-bar')
            // console.log(data)

            data.forEach((bar) => {
                let Percentage = bar.dataset.per
                let tooltip = bar.children[0]
                tooltip.innerHTML = Percentage
                // bar.style.width = Percentage
                // console.log(tooltip)
            })
        }



        let counterSection = document.querySelector('.skills-wrapper')
        let all = counterSection.querySelectorAll('span')
        Array.from(all).forEach((ele) => {
            ele.style.visibility = "hidden"
        })

        const AniAll = () => {
            Array.from(all).forEach((ele) => {

                ele.style.visibility = "visible"
                ele.style.background = "#4d79f6";
                ele.style.animation = "slide 2s ease  forwards"
            })
        }


        let options = {
            rootMargin: '0px 0px -100px 0px'
        }

        let done = 0
        const SectionObserver = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && done !== 1) {
                done = 1
                AniAll()

            }
        }, options)

        SectionObserver.observe(counterSection)
    }, [])
    return (
        <Wrapper className='container container2 common-padding'>
            <h1 className='section-heading'>Education & Skills</h1>

            <div className="content">
                <div className="left">
                    <div className="inner-left">
                        <div className="heading">
                            <Cap color="#7081b9" size="55   "></Cap>
                            <h2>Education</h2>
                        </div>

                        <div className="timeline_wrapper">
                            <div className="item">
                                <p>2017 - 2022</p>
                                <p className='center'>Highschool</p>
                                <p>Secondary Education</p>
                            </div>
                            <div className="item">
                                <p>2022 - 2023</p>
                                <p className='center'>University</p>
                                <p>Bachelor of Computer Science</p>
                            </div>

                        </div>
                    </div>

                    <div className="inner-right">
                        <div className="heading">
                            <SuitCase color="#7081b9" size="55"></SuitCase>
                            <h2>Experience</h2>
                        </div>

                        <div className="timeline_wrapper">
                            <div className="item">
                                <p>2022 - 2023</p>
                                <p className='center'>Learn Coding</p>
                                <p>C C++ Python</p>
                            </div>
                            <div className="item">
                                <p>2023 -</p>
                                <p className='center'>Learn WebDevelopment</p>
                                <p>HTML Css Js Ract Js</p>
                            </div>

                        </div>
                    </div>
                </div>




                <div className="right">
                    <div className="skills-wrapper">

                        <div className="skill-box">
                            <h4>HTML & CSS3</h4>
                            <div className="progress-wrapper">
                                <MySpan data-per="78" width="78%" className='prgress-bar'><h6 className='tooltip'>70%</h6></MySpan>
                            </div>
                        </div>
                        <div className="skill-box">
                            <h4>C  C++ & Python</h4>
                            <div className="progress-wrapper">
                                <MySpan data-per="70" width="70%" className='prgress-bar'><h6 className='tooltip'>70%</h6></MySpan>
                            </div>
                        </div>
                        <div className="skill-box">
                            <h4>Javascript & React JS</h4>
                            <div className="progress-wrapper">
                                <MySpan data-per="80" width="80%" className='prgress-bar'><h6 className='tooltip'>70%</h6></MySpan>
                            </div>
                        </div>
                        <div className="skill-box">
                            <h4>Git BootStrap Redux JQuery</h4>
                            <div className="progress-wrapper">
                                <MySpan data-per="60" width="60%" className='prgress-bar'><h6 className='tooltip'>70%</h6></MySpan>
                            </div>
                        </div>



                    </div>
                </div>
            </div>
        </Wrapper>
    )
}


const Wrapper = styled.section`
    .content{
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;


        .left{
            display: grid;
            grid-template-columns: 1fr 1fr;

        .heading{
             margin-bottom:2rem;
             text-align: start;

             h2{
                font-size: 1.7rem;
                margin-top: .6rem;
                color: ${({ theme }) => theme.colors.mild};
             }
        }

        p{
            font-size:14px;
            line-height:1.7;
            color: ${({ theme }) => theme.colors.ternary};
        }

        .center{
            color: ${({ theme }) => theme.colors.fade};
        }


        .item{
            margin-bottom: 3rem;
            margin-left: 1.8rem;
            position: relative;

            &::after{
                content: "";
                position: absolute;
                width: 10px;
                height: 10px;
                top: 5px;
                left: 0;
                border: 2px solid ${({ theme }) => theme.colors.info};
                border-radius: 50%;
                margin-left: -25px;
            }
        }
           


        .timeline_wrapper{
            border-left: .7px dotted  ${({ theme }) => theme.colors.danger};
        }
        }




        .right{

            .skill-box{
                margin-bottom: 3rem;

                h4{
                color: ${({ theme }) => theme.colors.ternary};
                font-size: 15px;
                text-transform: uppercase;
                font-weight: 500;
                margin-bottom: 1rem;
            }


                .progress-wrapper{
                    background: #20294a;
                    height: 6px;
                    width: 100%;
                    border: 2px solid #1a253f;
                    box-shadow: 0px 0px 1px .26px #4d79f6;
                    border-radius:10px;
             

                }
            }
            


        }


    }

    
@media screen and (max-width: 998px){
    .content{
    display: block;


    .left{
        width: 90%;
        margin-bottom: 2rem;
    }

    .right{
        width: 90%;
    }
    }
}

@media screen and (max-width: 630px){
    .content{
        .right{
       
            .progress-wrapper{
                margin-top: 3rem;
            }
        }
    }
}
`

const MySpan = styled.span.attrs(props => ({

    width: props.width || "0%"
}))`
    
   
    
        display: block;
        height: 100%;
        width:${props => props.width};
        position: relative;
        transition: width 1s ease-in-out;
        

        @keyframes slide {
            0%{
                width: 0;
            }
            
        }
        .tooltip{
             position: absolute;
             top:-30px;
             right: -15px;
             font-size: 16px;
             color: ${({ theme }) => theme.colors.ternary};
             text-transform:uppercase;

                        }




        
   
`