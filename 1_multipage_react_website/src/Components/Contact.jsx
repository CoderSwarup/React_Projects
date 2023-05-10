import React from 'react'
import styled from 'styled-components'
import { Button } from '../Style/Button'

export default function Contact() {
    return (
        <Wrapper>
            <h2 className='head'>Feel Free To Contact Us</h2>
            <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d5635.677874760156!2d74.031513490238!3d15.72341201117901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sbhedshi%20map%20iframe!5e0!3m2!1sen!2sin!4v1678526698298!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            <div className="container">
                <div className="contact-form">
                    <form
                        action="https://formspree.io/f/xjvdoydg"
                        method="POST"
                        className="contact-inputs">
                        <input
                            type="text"
                            name="username"
                            placeholder="username"
                            autoComplete="off"
                            required
                        />

                        <input
                            type="email"
                            name="Email"
                            placeholder="Email"
                            autoComplete="off"
                            required
                        />

                        <textarea
                            name="message"
                            cols="30"
                            rows="6"
                            autoComplete="off"
                            required></textarea>


                        <Button><input type="submit" value="send" /></Button>
                    </form>
                </div>
            </div>
        </Wrapper>
    )
}


const Wrapper = styled.section`
margin: auto;
    margin-top: 8rem;
    text-align: center;
    display: grid;
    place-items:center;
    gap: 2rem;
width: 95%;
padding: 0px 10px;

    .head{
font-size: 3rem;
font-weight: 700;
    }



    .container {
      margin-top: 6rem;
      text-align: center;
      .contact-form {
        width: 500px;
        margin: auto;
        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;
          align-items:center;
          input{
            padding: 5px 10px;
            width: 100%;
          }
          textarea{
            padding: 5px 10px;
            width: 100%;
            resize: none;
          }
          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;
    padding: 0;
    background: transparent;
    border: none;
    font-size:2rem;
    font-weight: 700;
    color: #fff;
    letter-spacing: 2px;
          }
        }
      }
    }


    @media screen  and (max-width: 730px){
   
        .container {
            width: 100%;
      .contact-form {
        width: 90%;}
    }
}
`