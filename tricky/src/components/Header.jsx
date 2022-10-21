import React from 'react'
import styled from 'styled-components'
const Main= styled.div`
padding-top: 1rem;
padding-bottom: 1rem;
display: flex;
justify-content: space-evenly;
align-items: center;
background-color: #1b1b1b;
@media screen and (max-width:900px){
    width: 50rem;
    overflow: scroll;
}
@media screen and (max-width:900px) and (min-width:800px){
    width: 60rem;
    overflow: scroll;
}
`
const Sub= styled.div`
h3{
    font-family: 'Lobster', cursive;
    color: white;
    font-size: 3rem;
    letter-spacing: 2px;
    word-spacing: 2px;
    margin-bottom: 1rem;
    span{
        color: red;
    }
}
h4{
    font-size:2rem;
    margin-bottom: 1rem;
    font-family: 'Anek Telugu', sans-serif;
    color: white;
}
h5{
    font-size: 1.7rem;
    margin-bottom: 1rem;
    font-family: 'Anek Telugu', sans-serif;
    color: white;
}
h6{
    letter-spacing: 1px;
    margin-bottom: 1rem;
    font-size: 1.4rem;
    font-family: 'Anek Telugu', sans-serif;
    color: white;
    span{
        color: red;
    }
}
`
const SSub= styled.div`

img{

    width: 15rem;
    object-fit: contain;
}

`

const Header = () => {
  return (
    <>
    <Main>
        <Sub>
            <h3>WELCOME TO <span>TRICKY HUNTER</span>  FAMILY  </h3>
            <h4>My name is Nouman</h4>
            <h5>And I am from Sargogha</h5>
            <h6>I am a passionate gamer and vloger too <span>...</span></h6>
        </Sub>
        <SSub>
            <img src="/Images/tricky.png" alt="" />
        </SSub>
    </Main>
    
    </>
    )
}

export default Header