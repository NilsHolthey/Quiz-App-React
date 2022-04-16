// import { useState } from "react";
import styled from "styled-components";
import Header from "./components/Header/Header";
import Card from "./components/Card";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <CardWrapper>
        <Card />
        <Card />
        <Card />
        <Card />
      </CardWrapper>
      <Footer />
    </>
  );
}

const CardWrapper = styled.div`
  padding-top: 12rem;
`;

export default App;
