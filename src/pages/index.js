import Head from "next/head";
import Heading from "../components/Heading";
import { Home, Articles, About, Contact } from "../components/sections";
import styled from "styled-components";
const Wrapper = styled.div`
  width: 100%;
`;
export default function Index() {
  return (
    <Wrapper>
      <Head>
        <title>Easybank</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Heading />
      <Home />
      <About />
      <Articles />
      <Contact />
    </Wrapper>
  );
}