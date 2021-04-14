import React from 'react'
import styled, { keyframes } from 'styled-components';


const fadeIn = keyframes`
    from {top: -157px; opacity: 0; visibility: hidden;}
    to {top: 50px; opacity: 1; visibility: visible}}
`

const fadeOut = keyframes`
     from {top: 50px; opacity: 1; visibility: visible} 
    to {top: -157px; opacity: 0; visibility: hidden;}
`

const ToastContainer = styled.div`
     position: absolute;
     top: 50px;
     left:0;
     width: 400px;
     height: 150px;
     display: flex;
     flex-direction: column;
     flex-wrap: wrap;
     justify-content: center;
     align-content: space-around;
     z-index: 10;
     border: 2px solid #ccc;
     border-radius: 5px;
     background-image: linear-gradient(to right, rgba(255,0,0,0), rgba(255,0,0,1));
     visibility: ${props => props.show==="true" ? "visible": "hidden"};
     //animation: ${props => props.show==="true" ? `` : ''};

     &.show {
         animation: ${fadeIn} 6.5s 2s, ${fadeOut} 4.5s 3s;
     }


    h1 {
        text-align: center;
        font-size: 18px;
        font-weight: 400;
        color: #fff;
    }

    p {
        text-align: center;
        font-size: 15px;
        font-weight: 300;
        color: #fff;
    }
`


function Toast({show, title, content}) {

    // style={{visibility : `${show==="true"? "visible": "hidden"}`}}
    return (
        <ToastContainer show className={`${show==="true"? "show": ""}`} >
            <h1>{title}</h1>
            <p>{content}</p>
        </ToastContainer>
    )
}

export default Toast
