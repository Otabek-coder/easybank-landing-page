import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-around;
  padding: 1em 0em;
  align-items: center;

  nav > ul {
    display: flex;
  }
  nav > ul > li {
    list-style-type: none;
    margin: 0em 1em;
    font-weight: 300;
    color: hsl(233, 8%, 62%);
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
  return (
    <HeaderContainer>
      <div>
        <img src="/images/logo.svg" alt="Brand-logo" />
      </div>

      <nav>
        <ul>
          <li> Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Blog</li>
          <li>Careers</li>
        </ul>
      </nav>

      <Button>Request Invite</Button>
    </HeaderContainer>
  );
}
