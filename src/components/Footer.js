import Link from "next/link";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: hsl(233, 26%, 24%);
  display: flex;
  padding: 2em 8em;
  .contact-request {
    margin-left: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: hsl(233, 8%, 62%);
    font-weight: 400;
  }
  .contact-request p {
    margin-top: 2em;
  }
  @media (max-width: 65em) {
    padding: 2em 4em;
  }
  @media (max-width: 50em) {
    flex-direction: column;
    align-items: center;
    .contact-request {
    margin-left: 0;}
  }
@media (max-width: 41em) {
    padding: 2em 2em;
}
`;
const DetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  .images {
    display: block;
    margin-top: 2.5em;
  }
  img {
    margin: 5px;
  }

  .contact-links {
    display: flex;
  }
  .margin {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  ul li {
    list-style: none;
    margin-bottom: 1em;
  }
  ul li a {
    color: hsl(0, 0%, 100%);

    font-weight: 300;

    text-decoration: none;
  }
  @media (max-width: 65em) {
    .images {
      margin-top: 2rem;
    }
  }
  @media (max-width: 50em) {
    flex-direction: column;
    align-items: center;
    ul{
        text-align: center;
        padding: 0px;
        margin: 0;
    }
    nav{
        margin: 1em 0em
    }
    .images {
      margin-top: 1rem;
      margin: 1em 0em 1em 0em;

    }
  }
`;
const Button = styled.button`
  background: linear-gradient(to right, hsl(136, 65%, 51%), hsl(192, 70%, 51%));
  padding: 0.8em 2em;
  border-radius: 25px;
  border: 0;
  font-weight: 400;
  font-size: 18px;
  margin-left: auto;
  display: block;
  color: #fff;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 50em) {
      margin: 1em 0em 0em 0em;
  }
`;
export default function Contact() {
  return (
    <Wrapper id="contact">
      <DetailsContainer>
        <div className="margin">
          <img
            src="/images/logo-footer.svg"
            alt="Brand-logo"
            className="brand-logo"
          />
          <div className="images">
            <img src="/images/icon-facebook.svg" alt="facebook-icon" />
            <img src="/images/icon-youtube.svg" alt="youtube-icon" />
            <img src="/images/icon-twitter.svg" alt="twitter-icon" />
            <img src="/images/icon-pinterest.svg" alt="pinterest-icon" />
            <img src="/images/icon-instagram.svg" alt="instagram" />
          </div>
        </div>

        <ul>
          <li>
            <Link href="#about">
              <a>About Us</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Contact</a>
            </Link>
          </li>
          <li>
            <Link href="#blog">
              <a>Blog</a>
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link href="/">
              <a>Careers</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Support</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Privacy Policy</a>
            </Link>
          </li>
        </ul>

      </DetailsContainer>
      <div className="contact-request">
        <Button>Request Invite</Button>
        <p>@Easybank. All Rights Reserved</p>
      </div>
    </Wrapper>
  );
}
