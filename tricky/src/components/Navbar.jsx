import React from 'react'
import styled from 'styled-components'
const Main = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
background-color: #1b1b1b;
@media screen and (max-width:900px){
    width: 50rem;
    
}
@media screen and (max-width:900px) and (min-width:800px){
    width: 60rem;
    overflow: scroll;
}
`
const Sub = styled.div`
img{
    width: 9rem;
    height: 9rem;
    object-fit: contain;
}
`
const SSub = styled.div`
ul{
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
}
li{
    color: white;
    font-family: 'Anek Telugu', sans-serif;
    margin-left: 1rem;
    margin-right: 2rem;
    font-size: 1.3rem;
    letter-spacing: 1px;
    &:hover{
        color: #f14d4d;
        cursor: pointer;
        transition: 0.3s ease-in;
        text-decoration: underline;
    }
}
`

const Navbar = () => {
    return (
        <>

            <Main>
                <Sub>
                    <img src="/Images/pubgmain.png" alt="" />
                </Sub>
                <SSub>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Gameplay</li>
                        <li>Vlogs</li>
                    </ul>
                </SSub>
            </Main>
        </>
    )
}

export default Navbar