import React, {useEffect} from 'react'
import Aos from 'aos';
import "aos/dist/aos.css";
import styled from 'styled-components'
import location from '../images/icons/location.png';
import mail from '../images/icons/mail.png';
import call from '../images/icons/call.png';
import one from '../images/icons/1.png';
import two from '../images/icons/2.png';
import three from '../images/icons/3.png';
import four from '../images/icons/4.png';
import five from '../images/icons/5.png';
import bg from '../images/woodbg.jpg';


const ContactSection = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: url(${bg}) #5a280b52  no-repeat;
    background-attachment: fixed;
    /* background: #5a280b52; */
    /* background-image: linear-gradient(to right, rgba(255,0,0,0), rgba(255,0,0,1)); */

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 50%;
        height: 100%;
        background: transparent;
    }

    @media (max-width: 991px){
        section {
            background: #5a280b52;
        }
        section::before{
            display: none;

        }
    }
`

const ContactContainer  = styled.div`
    position: relative;
    min-width: 1100px;
    min-height: 550px;
    display:flex;
    z-index: 2;

    @media (max-width: 1200px) {
        width: 90%;
        min-width: auto;
        margin: 20px;
        box-shadow: 0 20px 50px rgba(0,0,0,0.2);
    }

    @media (max-width: 991px){
        display: flex;
        flex-direction: column-reverse;
    }
`

const ContactInfo = styled.div`
    position: absolute;
    top: 40px;
    width: 350px;
    height: calc(100% - 80px);
    background: #095a55;
    z-index: 1;
    padding: 40px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 0 20px 25px rgba(0,0,0,0.15);

    @media (max-width: 1200px) {
        top: 0;
        height: 550px;
        position: relative;
        box-shadow: none;
    }

    @media (max-width: 991px){
        width: 100%;
        height: auto;
        flex-direction: row;
    }

    @media (max-width: 600px){
        padding: 25px;
        flex-direction: column;
        align-items: flex-start;
    }
`

const ContactInfoContent = styled.div`
    h2 {
        color: #fff;
        font-size: 24px;
        font-weight: 500;

    }

    ul.info {
        position: relative;
        margin: 20px 0;

    }

    ul li {
        position: relative;
        list-style: none;
        display: flex;
        margin: 20px 0;
        cursor: pointer;
        align-items: flex-start;
    }

    ul li span:nth-child(1){
        width: 30px;
        min-width: 30px;

    }

    ul li span:nth-child(1) img{
        max-width: 100%;
        filter: invert(1);
    }

    ul li span:nth-child(2){
        color: #fff;
        margin-left: 10px;
        font-weight: 300;
    }
`

const SciList = styled.ul`
    position: relative;
    display: flex;

    li{
        list-style: none;
        margin-right: 15px;
    }

    li a {
        text-decoration: none;

    }

    li a img {
        filter: invert(1);

    }

    @media (max-width: 991px){
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    @media (max-width: 600px){
        margin-top: 40px;
    }
`


const ContactForm = styled.div`
    position: absolute;
    padding: 70px 50px;
    padding-left: 250px;
    margin-left: 150px;
    width: calc(100% - 150px);
    height: 100%;
    background: #fff;
    box-shadow: 0 50px 50px rgba(0,0,0,0.25);

    @media (max-width: 1200px) {
        position: relative;
        width: calc(100% - 350px);
        padding-left: 0;
        margin-left: 0;
        padding: 40px;
        height: 550px;
    }

    @media (max-width: 991px){
        width: 100%;
        height: auto;
        
    }

    @media (max-width: 600px){
        padding: 25px;
    }
`

const ContactFormContent = styled.div`
    h2 {
        color: #0f3959;
        font-size: 12px;
        font-weight: 400;

    }
`

const ContactFormBox = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding-top: 30px;

    .inputBox {
        position: relative;
        margin-bottom: 35px;
    }

    .inputBox.w50{
        width: 47%;

    }

    .inputBox.w100{
        width: 100%;
    }

    .inputBox input,
    .inputBox textarea {
        width: 100%;
        resize: none;
        padding: 5px 0;
        font-size: 14px;
        font-weight: 300;
        color: #333;
        border: none;
        outline: none;
        border-bottom: 1px solid #777;
    }

    .inputBox span{
        position: absolute;
        left: 0;
        padding: 5px 0;
        pointer-events: none;
        font-size: 18px;
        font-weight: 300;
        transition: 0.3s;

    }

    .inputBox input:focus ~ span,
    .inputBox textarea:focus ~ span,
    .inputBox input:valid ~ span,
    .inputBox textarea:valid ~ span{
        transform: translateY(-10px);
        font-size: 12px;
        font-weight: 400;
        letter-spacing: 1px;
        color: #095a55;
        font-weight: 500;
    }

    .inputBox input[type="submit"] {
        position: relative;
        cursor: pointer;
        background: #095a55;
        color: #fff;
        border: none;
        max-width: 150px;
        padding: 12px;

        &:hover{
            background: #0d948b;
        } 

    }

    @media (max-width: 600px){
        .inputBox.w50 {
            width: 100%;
        }
    }

`

 

function Contact() {
   
    useEffect(() => {
        Aos.init({duration: 3000})
    }, [])

    return (
        <ContactSection>
            <ContactContainer data-aos="fade-right" data-aos-duration="1200">
                <ContactInfo>
                    <ContactInfoContent>
                        <h2>Contact Info</h2>
                        <ul className="info">
                            <li>
                                <span><img src={location} alt="location"/></span>
                                <span>2912 Meadowbrook road<br/>Los Angeles, CA<br/>90017</span>
                            </li>
                            <li>
                                <span><img src={mail} alt="mail"/></span>
                                <span>lorem@ipsum.com</span>
                            </li>
                            <li>
                                <span><img src={call} alt="call"/></span>
                                <span>+91-1111-1111</span>
                            </li>
                        </ul>
                    </ContactInfoContent>
                    <SciList>
                        <li><a href="/"><img src={one} alt="one"/></a></li>
                        <li><a href="/"><img src={two} alt="two"/></a></li>
                        <li><a href="/"><img src={three} alt="three"/></a></li>
                        <li><a href="/"><img src={four} alt="four"/></a></li>
                        <li><a href="/"><img src={five} alt="five"/></a></li>
                    </SciList>
                </ContactInfo>
                <ContactForm>
                    <ContactFormContent>
                        <h2>Send a Message</h2>
                        <ContactFormBox>
                            <div className="inputBox w50">
                                <input type="text" required/>
                                <span>First Name</span>
                            </div>
                            <div className="inputBox w50">
                                <input type="text" required/>
                                <span>Last Name</span>
                            </div>
                            <div className="inputBox w50">
                                <input type="email" required/>
                                <span>Email Address</span>
                            </div>
                            <div className="inputBox w50">
                                <input type="email" required/>
                                <span>Mobile Number</span>
                            </div>
                            <div className="inputBox w100">
                                <textarea required/>
                                <span>write your message here...</span>
                            </div>
                            <div className="inputBox w100">
                                <input type="submit" value="Send"/>
                            </div>
                        </ContactFormBox>
                    </ContactFormContent>
                </ContactForm>
            </ContactContainer>
        </ContactSection>
    )
}

export default Contact
