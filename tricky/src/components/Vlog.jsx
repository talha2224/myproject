import React from 'react'
import styled from 'styled-components'
const Main = styled.div`
height: 20rem;
@media screen and (max-width:900px){
    width: 50rem;
    overflow: scroll;
}
@media screen and (max-width:900px) and (min-width:800px){
    width: 60rem;
    overflow: scroll;
}
background-color: #241f1f;
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

const Vlog = () => {
  return (
    <>
    <Main>
        <Heading>
            <h3>My Vlogs <span>....</span> </h3>
        </Heading>
        <Sub>
        <Video>
        <iframe  src="https://www.youtube.com/embed/4AmoOYKFTqU" title="YouTube video player" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </Video>
        <Video>
        <iframe src="https://www.youtube.com/embed/x4Wy7yeBaKo" title="YouTube video player" frameBorder="0" allow="accelerometer;clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </Video>
        <Video>
        <iframe  src="https://www.youtube.com/embed/Sgp_qET-bS8" title="YouTube video player" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </Video>
        <Video>
        <iframe src="https://www.youtube.com/embed/s5upUsix0Lw" title="YouTube video player" frameBorder="0" allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </Video>
        </Sub>
    </Main>
    
    </>
  )
}

export default Vlog