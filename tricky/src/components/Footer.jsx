import React from 'react'
import styled from 'styled-components'

import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
const Main = styled.div`
background-color: #1f1d1d;
padding-top: 2rem;
padding-bottom:2rem;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
@media screen and (max-width:900px){
    width: 50rem;
    overflow: scroll;
}
@media screen and (max-width:900px) and (min-width:800px){
    width: 60rem;
    overflow: scroll;
}
`
const Sub = styled.div`
padding-left:2rem;
padding-right: 2rem;
padding-top: 2rem;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`
const Heading = styled.div`
h5{
    color: white;
    font-size: 1.3rem;
    letter-spacing: 3px;
    font-family: 'Dancing Script', cursive;
}
`
const MainHeading = styled.div`
margin-top: 1rem;
h3{
    margin-bottom: 1rem;
    font-family: 'Dancing Script', cursive;
    color: #e0b25c;
    font-size: 3rem;
    letter-spacing: 2px;


}
`
const SubHeading = styled.div`
h4{
    color: white;
    font-family: 'Roboto', sans-serif;
    margin-bottom: 1rem;
    letter-spacing: 2px;
}
`
const InputField = styled.div`
padding-bottom: 2rem;
input{
    color: white;
    background: transparent;
    padding-left: 1rem;
    padding-right: 1rem;
    font-family: 'Roboto', sans-serif;
    letter-spacing: 1px;
    border: 2px solid gray;
    width: 27rem;
    height: 2.6rem;
    margin-right: 2rem;
    outline: none;
    border-radius: 5px;
    @media only screen  and (max-width:800px){
        font-size: 2rem;
        width: 29rem;
        height: 5rem;
    }
}
button{
    width: 5rem;
    height: 2.3rem;
    font-family: 'Dancing Script', cursive;
    background-color: #e0b25c;
    outline: none;
    border: none;
    letter-spacing: 2px;
    font-weight: 900;
    cursor: pointer;
    @media only screen  and (max-width:800px){
        width: 10rem;
        height: 4rem;
        font-size: 1.5rem;
    }
    
}
`
const SubMain = styled.div`

background-color: #1f1d1d;
padding-top: 2rem;
display: flex;
justify-content: space-evenly;
@media screen and (max-width:900px){
    width: 50rem;
    overflow: scroll;
}
@media screen and (max-width:900px) and (min-width:800px){
    width: 60rem;
    overflow: scroll;
    
}
`
const SubSecond = styled.div`
margin-left: 1rem;
color: white;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
h4{
    font-weight: 200;
    margin-bottom: 1rem;
   font-size :1.3rem;
   font-family: 'Luxurious Roman', cursive;
   letter-spacing: 1px;
   @media only screen  and (max-width:800px){
    margin-bottom: 1rem;
}
}
h3{
    margin-bottom: 1rem;
   font-size :2rem;
   font-family: 'Luxurious Roman', cursive;
   letter-spacing: 1px;
   color: #e0b25c;
   @media only screen  and (max-width:800px){
    margin-bottom: 1rem;
}

}
p{
    font-family: 'Roboto', sans-serif;
    margin-bottom: 1rem;
    font-weight: 100;
    font-size: 0.9rem;
    word-spacing: 2px;
    @media only screen  and (max-width:800px){
    margin-bottom: 1rem;
}

}
`
const Icon = styled.div`
cursor: pointer;
@media only screen  and (max-width:800px){
    margin-bottom: 1rem;
}
.icon1{
    margin-right: 0.3rem;
    outline: none;
    font-size: 1.2rem;
    &:hover{
    color: #e0b25c;

}
}
.icon2{
    margin-right: 0.3rem;
    outline: none;
    font-size: 1.2rem;
    &:hover{
    color: #e0b25c;
}
}
.icon3{
    margin-left: 0.3rem;
    outline: none;
    font-size: 1.2rem;
    &:hover{
    color: #e0b25c;
}
}
`
const Headings = styled.div`
padding-bottom: 2rem;
color:white;
word-spacing: 1px;
letter-spacing: 1px;
background-color: #1f1d1d;
display: flex;
justify-content: center;
@media screen and (max-width:900px){
    width: 50rem;
    overflow: scroll;
}
@media screen and (max-width:900px) and (min-width:800px){
    width: 60rem;
    overflow: scroll;
}
`
const Footer = () => {
    return (
        <>

            <Main>
                <Sub>
                    <Heading>
                        <h5>Newsletter</h5>
                    </Heading>
                    <MainHeading>
                        <h3>Subscribe To Our Newsletter</h3>
                    </MainHeading>
                    <SubHeading>
                        <h4>And never miss latest Updates!</h4>
                    </SubHeading>
                    <InputField>
                        <input type="email" placeholder='Email Address' />
                        <button>Subscribe</button>
                    </InputField>
                </Sub>
            </Main><hr />
            <SubMain>
                <SubSecond>
                    <h4>Contact Us</h4>
                    <p>9 W 53rd St, NewYork, NY 10019,USA</p>
                    <p>+1 212-344-1230</p>
                    <p>+1 212-555-1230</p>
                </SubSecond>
                <SubSecond>
                    <h3>Tricky Hunter</h3>
                    <p>"Support My Daily Stream On Facebook By Sending Stars"</p>
                    <p>"Keep Supporting Me By subscribing And Follow My Youtube Channel And Facebook Page "</p>
                    <Icon>
                        <a href="https://www.facebook.com/trickyhunter2">
                        <FaFacebookF className='icon1' /></a>
                        <a href="">

                        <FaInstagram className='icon2' />
                        </a>
                        <a href="https://www.youtube.com/c/TrickyHunter2">
                        <FaYoutube className='icon3' />

                        </a>
                    </Icon>
                </SubSecond>
                <SubSecond>
                    <h4>Streaming Hours</h4>
                    <p>Monday-Sunday:</p>
                    <p>11:00 am - 2:00 pm</p>
                    <p>10:00 pm - 1:00 am</p>
                </SubSecond>
            </SubMain>
                <Headings>
                    <p>2022 Tricky Hunter All Right Reserved.</p>
                </Headings>
        </>

    )
}

export default Footer