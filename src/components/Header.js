import React, { useState, useRef } from "react";
import { useDimensions } from 'src/hooks'
import { motion } from 'framer-motion'
import styled from "styled-components";
import { MenuToggle } from "./MenuToggle";
import MobileHeader from "./MobileHeader";
import Link from "next/link";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-around;
  padding: 1em 0em;
  align-items: center;
  border-left: .1px solid hsl(220, 16%, 96%); 
  border-right: .1px solid hsl(220, 16%, 96%); 

  nav > ul {
    display: flex;
  }
  nav > ul > li {
    list-style-type: none;
    margin: 0em 1em;
    font-weight: 300;
    color: hsl(233, 8%, 62%);
  }
  nav > ul > li a {
      color: hsl(233, 8%, 62%);
      text-decoration: none;
      font-weight: 500;
    }
    @media(max-width:50em){
margin: 0em 1em;
/* padding: 0.5em 0em; */
      justify-content: space-between;
    }
`;



const Button = styled.button`
background: linear-gradient(to right, hsl(136, 65%, 51%), hsl(192, 70%, 51%));
padding: .8em 2em;
font-size: 18px;
border-radius: 25px;
font-weight: 400;
font-family: 'Public Sans', sans-serif;
border: 0;
color: #fff;
&:hover{
cursor: pointer;
  
}
`;

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <HeaderContainer>
        <Link href="/">
        <div>
          <img src="/images/logo.svg" alt="Brand-logo" />
        </div>
        </Link>

        <div className="desktop-only">
          <nav>
            <ul>
              <li>
                <Link href="#intro">
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link href='#about'>
                  <a>About</a>
                </Link>
              </li>
              <li>
                <Link href='#contact'>
                  <a>Contact</a>
                </Link>
              </li>
              <li>
                <Link href="#blog">
                  <a>Blog</a>
                </Link>
              </li>
              <li>
                <Link href="#career">
                  <a>Careers</a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="desktop-only">
          <Button>Request Invite</Button>
        </div>
        <div className="mobile-only">
          <MenuToggle toggle={() => setMobileMenuOpen(b => !b)} open={mobileMenuOpen} />
        </div>
      </HeaderContainer>
      <div className="mobile-only">
        <MobileHeader
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
          toggle={() => setMobileMenuOpen(b => !b)} open={mobileMenuOpen}
        />
      </div>
    </>
  );
}