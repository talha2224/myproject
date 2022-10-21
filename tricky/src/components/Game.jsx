import React from 'react'
import styled from 'styled-components'
const Main = styled.div`
height: 20rem;
background-color: #353535;
@media screen and (max-width:900px){
    width: 50rem;
    overflow: scroll;
}
@media screen and (max-width:900px) and (min-width:800px){
    width: 60rem;
    overflow: scroll;
}
`
const Heading = styled.div`
h3{
    letter-spacing: 1.3px;
    padding-left: 1rem;
    padding-top: 1rem;
    color: white;
    font-family: 'Anek Telugu', sans-serif;
    font-size: 1.5rem;
    margin-bottom: 1.4rem;
    span{
        color: red;
    }
}
`
const Sub = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
flex-wrap: wrap;
`
const Video = styled.div`
padding-bottom:1.5rem;
iframe{
    padding-left: 1rem;
    width: 19rem;
    height: 10rem;

}
`

const Game = () => {
  return (
    <>
    <Main>
        <Heading>
            <h3>Intense Gameplays <span>....</span> </h3>
        </Heading>
        <Sub>
        <Video>
        <iframe  src="https://www.youtube.com/embed/3KkHJ8Vsw0I" title="YouTube video player" frameBorder="0" allow="accelerometer;clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </Video>
        <Video>
        <iframe src="https://www.youtube.com/embed/NjvuAkCAl5c" title="YouTube video player" frameBorder="0" allow="accelerometer;clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </Video>
        <Video>
        <iframe src="https://www.youtube.com/embed/bxvADj0mE4I" title="YouTube video player" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </Video>
        <Video>
        <iframe  src="https://www.youtube.com/embed/bgsGW9GObZE" title="YouTube video player" frameBorder="0" allow="accelerometer;clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </Video>
        </Sub>
    </Main>
    
    </>
  )
}

export default Game