import React from "react";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: hsl(0, 0%, 98%);
  width: 100%;
  @media (max-width: 53em) {
    flex-direction: column-reverse;
  }
`;
const InfoContainer = styled.div`
  padding: 0em 8em;

  width: 45%;
  main {
    width: 400px;
    margin: 12em 0em 20em 0em;
  }
  @media (max-width: 65em) {
    padding: 0em 4em;

    main {
      margin: 4em 0em 20em 0em;
    }
  }
  h1 {
    color: hsl(233, 26%, 24%);
    font-size: 3rem;
    font-weight: 400;
  }
  p {
    font-weight: 300;
    line-height: 1.5;
    color: hsl(233, 8%, 62%);
    margin-bottom: 2em;
  }
  @media (max-width: 53em) {
    text-align: center;
    width: 100%;
    main {
      width: 100%;
      margin-top: -10em;
    }
  }
`;
const ImgContainer = styled.div`
  background-image: url("/images/bg-intro-desktop.svg");
  background-position: top -260px left -0%;
  background-size: 160%;
  background-repeat: no-repeat;
  width: 60%;

  img {
    width: 100%;
    max-height: 100%;
    object-fit: cover;
    object-position: 120px -120px;
  }
  @media (max-width: 65em) {
    background-position: top -170px left -0%;
    background-size: 150%;

    img {
      object-position: 100px -100px;
    }
  }
  @media (max-width: 53em) {
    background-image: url("/images/bg-intro-mobile.svg");
    background-position: top -260px left -0%;
    background-size: 160%;
    width: 100%;
    img {
      object-position: 0px -280px;
    }
  }
  @media (max-width: 41em) {
    background-position: top -140px left -0%;
    img {
      object-position: 0px -140px;
    }
  }
`;
const Button = styled.button`
  background: linear-gradient(to right, hsl(136, 65%, 51%), hsl(192, 70%, 51%));
  padding: 0.8em 2em;
  font-size: 18px;
  border-radius: 25px;
  border: 0;
  color: #fff;
  &:hover {
    cursor: pointer;
  }
`;

export default function Home() {
  return (
    <Container id="intro">
      <InfoContainer>
        <main>
          <h1>
            Next generation<br></br> digital banking
          </h1>
          <p>
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>
          <Button>Request Invite</Button>
        </main>
      </InfoContainer>
      <ImgContainer>
        <img src="/images/image-mockups.png" alt="mockUps" />
      </ImgContainer>
    </Container>
  );
}

