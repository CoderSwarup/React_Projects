import React from 'react'
import styled from 'styled-components'
import UilCell from '@iconscout/react-unicons/icons/uil-cell'
import UilPrint from '@iconscout/react-unicons/icons/uil-print'

export default function Navbar() {
    return (
        <Wrapper>
            <div className="container inner">
                <div className="logo ">
                    <UilCell size="30" color="#4d79f6" />
                    <h2>SWARUP CV</h2>
                </div>
                <div>
                    <button>
                        <UilPrint size="20" color="#fff" />
                        <p>print</p>
                    </button>
                </div>

            </div>
        </Wrapper >
    )
}


const Wrapper = styled.nav`
background: ${({ theme }) => theme.colors.primary};
padding: 1.6rem 0;

.inner{
    display: flex;
    justify-content: space-between;
    align-items: center;


    .logo{
        display: flex;
        align-items: center;
        gap: 1rem;
        h2{
            text-transform: uppercase;
            color: ${({ theme }) => theme.colors.pure};
            font-size: 2rem;
            letter-spacing: 1px;
            font-weight: 500;
        }
       
    }

    button{
            background:${({ theme }) => theme.colors.secondary};
            border: none;
            padding: 0.6rem 1rem;
            display: flex;
            align-items: center;
            gap: .5rem;
            font-size: 1.5rem;
            border-radius: 5px;
            color: #fff;
            text-transform: capitalize;
            border: 1px solid #fff;
        }

}
`