import React, { useContext } from 'react'
import styled from 'styled-components'
// import { Appcontext } from '../../context';
import { Button } from '../../Style/Button'


export default function HeroSection(props) {
    // const ContextName = useContext(Appcontext);

    return (
        <Wrapper>

            <div className="container left">
                <h1>{props.name}</h1>
                <p>Lorem
                    ipsum dolor sit amet consectetur adipisicing elit. Animi repellendus, porro consequatur a doloremque fugiat accusamus ad ratione suscipit, adipisci sed asperiores necessitatibus voluptatem facilis delectus ab labore error atque sunt magnam. Minus.</p>
                <Button>{props.btn}</Button>
            </div>
            <div className="container right">
                <img src={props.img} alt="" />
            </div>


        </Wrapper>
    )
}

const Wrapper = styled.section`
    display: flex;
    gap: 3rem;
    width: 70%;
    margin: auto;
    margin-top: 4rem;
    align-items: center;


.container{
    width: 50%;
}

.left{
    display: grid;
    place-items: start;
    gap: 2rem;
}

.right{
 display: grid;
 place-items: center;
    img{
        width: 90%;
    }
}




@media screen  and (max-width:910px){
    width: 80%;
}

@media screen  and (max-width:${({ theme }) => theme.media.mobile}){
    width: 100%;
    flex-direction: column;
    .container{
    &:nth-child(1){
        width: 90%;
    }
}

.left{
text-align: center;
    place-items: center;
  
}
}


@media screen  and (max-width:410px){
    .left{
        h1{
            font-size: 4rem;
        }
        p{
            font-size: 1.4rem;
        }
    }
    .right{
width: 100%;
    img{
        margin: auto;
        width: 200px;
    }
}
    
    }
`;