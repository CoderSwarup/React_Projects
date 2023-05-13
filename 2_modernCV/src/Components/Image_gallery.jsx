import React, { useEffect } from 'react'
import styled from 'styled-components'
import Feedback from '@iconscout/react-unicons/icons/uil-feedback'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



// import required modules
import { Autoplay } from "swiper";
import MyGallery from './MyGallery';

export default function Image_gallery() {
    useEffect(() => {


    })

    return (
        <Gallery className='container container2 common-padding'>
            <h1 className='section-heading'>My Works & Review</h1>

            <div className="wrapper">

                <div className="slider-wrapper  s">
                    <p>  <Feedback size="35" color="#4d79f6"></Feedback></p>

                    <div className="slider">
                        <Swiper
                            spaceBetween={0}
                            centeredSlides={false}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: false,
                            }}
                            navigation={false}
                            modules={[Autoplay]}
                            className="mySwiper"
                        >

                            <SwiperSlide>
                                <div className="slide">
                                    <p>Where does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.</p>
                                    <div><img src="./images/1.jpg" alt="" /></div>
                                    <h2>- Michael C. Rios</h2>
                                    <h6>CEO Facebook</h6>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="slide">
                                    <p>Where does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.</p>
                                    <div><img src="./images/1.jpg" alt="" /></div>
                                    <h2>- Michael C. Rios</h2>
                                    <h6>CEO Facebook</h6>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="slide">
                                    <p>Where does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.</p>
                                    <div><img src="./images/1.jpg" alt="" /></div>
                                    <h2>- Michael C. Rios</h2>
                                    <h6>CEO Facebook</h6>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="slide">
                                    <p>Where does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.</p>
                                    <div><img src="./images/1.jpg" alt="" /></div>
                                    <h2>- Michael C. Rios</h2>
                                    <h6>CEO Facebook</h6>
                                </div>
                            </SwiperSlide>
                        </Swiper>



                    </div>

                </div>

                <div className="img-gallery s">
                    <MyGallery></MyGallery>
                </div>
            </div>

        </Gallery>
    )
}

const Gallery = styled.section`

.wrapper{
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    grid-gap: 18px;
    justify-content: center;


    .s{
        display: grid;
        place-items: center;
    }

    .slider-wrapper{
        width: 100%;
    .mySwiper{
       max-width: 500px;
        transition: all .5s ease;
    }

        p{
            text-align: center;
        }

        .slider{
            position: relative;

            .slide{
                 display: flex;
                 flex-direction: column;
                  align-items: center;
                  justify-content: center;
                  
                p{
                    font-size: 1.7rem;
                    color:${({ theme }) => theme.colors.ternary};
                    line-height: 1.6;
                    text-align: center;
                    margin-top: 2rem;
                }

                img{
                    margin-top: 2rem;
                    width: 60px;
                    height: 60px;
                    border-radius: 50%;
                    object-fit: cover;
                }

                h2{
                    font-size: 1.7rem;
                    color: ${({ theme }) => theme.colors.info};
                    margin-top: 1rem;
                }

                h6{
                    font-size: 1.3rem;
                    color: ${({ theme }) => theme.colors.ternary};
                    margin-top: 1rem;

                }
            }
        }

    }







    .img-gallery{
       
        
     }
}


@media screen and (max-width: 998px){

    .wrapper{
        display: block;

        .s{
            margin-top: 2rem;
        }
    }
}

@media screen and (max-width:625px){

    .wrapper{
        .slider-wrapper{
            .mySwiper{
       width: 400px;

    }
        }
    }
    
}

@media screen and (max-width:480px){

.wrapper{
    .slider-wrapper{
        .mySwiper{
   width: 300px;

}
.slider{
    .slide{
        p{
    font-size: 1.7rem;
}
    }
}
    }
}

}

@media screen and (max-width:370px){

.wrapper{
    .slider-wrapper{
        .mySwiper{
   width: 200px;

}
    }
}

}
`
