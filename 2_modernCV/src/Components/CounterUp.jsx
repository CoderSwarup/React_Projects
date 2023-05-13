import React, { useEffect } from 'react'
import styled from 'styled-components'
import UilCell from '@iconscout/react-unicons/icons/uil-cell'
import Smile from '@iconscout/react-unicons/icons/uil-smile'
import Trophy from '@iconscout/react-unicons/icons/uil-trophy'
export default function CounterUp() {


  useEffect(() => {

    let counters = document.querySelectorAll('.counter')

    const RunCounter = () => {
      counters.forEach((count) => {

        count.innerHTML = 0
        let target = +count.dataset.count
        let step = target / 5

        let CountIt = () => {
          let displayedcount = +count.innerText
          if (displayedcount < target) {
            count.innerText = Math.ceil(displayedcount + step)

            setTimeout(CountIt, 700)

          } else {
            count.innerText = target
          }
        }


        CountIt()
      })
    }

    //  similar like window scroll event
    let counterSection = document.querySelector('.counter-section')

    let options = {
      rootMargin: '0px 0px -100px 0px'
    }

    let done = 0
    const SectionObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && done !== 1) {
        done = 1
        RunCounter()
      }
    }, options)

    SectionObserver.observe(counterSection)



  }, [])
  return (
    <Wrapper className='container counter-section common-padding'>

      <div className="block">
        <div className="left">
          <UilCell size="45" color="#1ecab8"></UilCell>
        </div>
        <div className="right">
          <h3><span className='counter' data-count="100">0</span>+</h3>
          <h5>Completed projects</h5>
        </div>
      </div>

      <div className="block">
        <div className="left">
          <Smile size="45" color="#f3c74d"></Smile>
        </div>
        <div className="right">
          <h3><span className='counter' data-count="10">0</span>+</h3>
          <h5>Happy clients</h5>
        </div>
      </div>

      <div className="block">
        <div className="left">
          <Trophy size="45" color="#ff5da0"></Trophy>
        </div>
        <div className="right">
          <h3><span className='counter' data-count="5">0</span>+</h3>
          <h5>Awards received</h5>
        </div>
      </div>


    </Wrapper>
  )
}


const Wrapper = styled.section`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
justify-content: center;
align-items: center;
color: ${({ theme }) => theme.colors.pure};
background: ${({ theme }) => theme.colors.dark_gray};

.block{
  display: flex;
  align-items: center;
gap: 2rem;

h3{
  font-size: 24px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.fade};
}
  
h5{
  font-size: 15px;
  color: ${({ theme }) => theme.colors.fade};
}
}


@media screen and (max-width:800px){
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap:4rem;
  flex-wrap: wrap;
}

@media screen and (max-width:515px){
justify-content: center;

}

@media screen and (max-width:450px){
  .block{
    width: 100%;
    justify-content: flex-start;
    gap: 3rem;
  }
}

`