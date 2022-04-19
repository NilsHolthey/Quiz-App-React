// import { useState } from "react";
import styled from "styled-components";
import Header from "./components/Header/Header";
import Card from "./components/Card";
import Footer from "./components/Footer/Footer";
import { useEffect, useState } from "react";
import fetchQuestions from "./components/Fetch";
import { nanoid } from "nanoid";

function App() {
  const url = "https://opentdb.com/api.php?amount=10&type=boolean";
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetchQuestions(url, (data) => {
      setQuestions(data.results);
    });
  }, []);
  return (
    <>
      <Header />
      <CardWrapper>
        {questions.map(({ question, correct_answer, category, difficulty }) => {
          return (
            <Card
              key={question}
              question={question}
              answer={correct_answer}
              category={category}
              difficulty={difficulty}
            ></Card>
          );
        })}
      </CardWrapper>
      <Footer />
    </>
  );
}

const CardWrapper = styled.div`
  padding-top: 12rem;
  background-image: url("src/components/Images/BackgroundDouble.svg");
  background-repeat: no-repeat;
  background-attachment: fixed;
`;

export default App;
