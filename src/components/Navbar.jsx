import React from 'react'
import styled, {css} from 'styled-components/macro'

import {Link} from 'react-router-dom'
import {menuData} from '../data/MenuData'
import { Button } from './Button';

import {FaBars} from 'react-icons/fa';


const Nav = styled.nav `
    height: 60px;
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
    z-index: 100;
    position: fixed;
    width: 100%;
    box-shadow: 20px 20px 50px rgba(0,0,0,0.5);
    background: rgba(255,255, 255, 0.1);
    border-bottom: 1px solid rgba(255,255,255,0.5);
    backdrop-filter: blur(5px);
`;

const NavLink = css`
    color: #fff;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    text-decoration: none;
`

const Logo = styled.div `
    /* ${NavLink} */
    .brand {
    font-size:  20px;
    font-weight: 300;

    h1 {
        color: #fff;  
    }
   
    a {
        text-decoration: none;
        color: #fff;
    }
}

    .brand span {
        color: crimson;
    }
    /* font-style: italic; */
`;

const MenuBars = styled(FaBars) `
    display:none;

    
    @media screen and (max-width: 768px){
        display: block;
        height: 40px;
        width: 40px;
        cursor: pointer;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-50%, 25%);
    }
`;
const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -48px;

    @media screen and (max-width: 768px){
        display: none;

    }

`;

const NavMenuLinks = styled(Link)`
    ${NavLink}
    transition: 1s;

`;

const NavBtn = styled.div`
    display: flex;
    align-items: center;
    margin-right: 24px; 

    @media screen and (max-width: 768px){
        display: none;
        
    }
`;

const Navbar = ({toggle}) => {
    return (
        <Nav>
            <Logo>
                <h1 className="brand"><a href="/">Furn<span>S</span>tore</a></h1>
            </Logo>
            <MenuBars onClick={toggle}/>
            <NavMenu>
                {
                    menuData.map(({link, title}, index) => (
                        <NavMenuLinks to={link} key={index}>
                            {title}
                        </NavMenuLinks>
                    ))
                }
            </NavMenu>
            <NavBtn>
                <Button to="/contact" >Contact</Button>
            </NavBtn>
        </Nav>
    )
}

export default Navbar
