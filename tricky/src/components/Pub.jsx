import React from 'react'
import styled from 'styled-components'
const Main = styled.div`
display: flex;
justify-content: space-evenly;
align-items: center;
background-color: #272020;
@media screen and (max-width:799px){
    width: 50rem;
    overflow: scroll;
}
@media screen and (max-width:900px) and (min-width:800px){
  width: 60rem;
    overflow: scroll;
}
`
const Sub = styled.div`
h5{
  color: white;
  font-family: 'Anek Telugu', sans-serif;
  font-size:1.3rem;
  letter-spacing: 1.4px;
  span{
    color: red;
  }
}
`
const Head= styled.div`
margin-bottom: 1.5rem;
h3{
  font-family: 'Anek Telugu', sans-serif;
  color:white;
  font-size:2rem ;
  span{
    margin-left: 0.3rem;
    color: red;
  }
}
`
const SSub = styled.div`
img{
  width: 20rem;
  object-fit: contain;
}
`

const Pub = () => {
  return (
    <>
      <Main>
        <Sub>
          <Head>
            <h3>About Me<span>....</span></h3>
          </Head>
          <h5> <span>"</span> A True player is that one, who knows to get defeated <br /> for someone else happiness <span>"</span> </h5>
        </Sub>
        <SSub>
          <img src="/Images/about.png" alt="" />
        </SSub>
      </Main>



    </>
  )
}

export default Pub