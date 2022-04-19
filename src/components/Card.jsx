import styled, { css } from "styled-components";
// import AnswerButton from "./Buttons/AnswerButton";
import React, { useState } from "react";

export default function Card({ question, answer, category, difficulty }) {
  const [showAnswer, setShowAnswer] = useState(true);
  const [visible, setVisible] = useState(false);
  const [bookmarkColor, setBookmarkColor] = useState(false);

  return (
    <>
      <CardContainer>
        <h1>True or False?</h1>

        <Bookmark
          bool={bookmarkColor}
          onClick={() => {
            setBookmarkColor(!bookmarkColor);
          }}
          src="src/components/Images/bookmark_checked-96 1.svg"
          alt="bookmark"
        />
        <p>{question.replace(/&quot;|&#039;|&ldquo;|&rdquo;/g, "'")}</p>
        {visible && <Answer>{answer} </Answer>}
        <AswButton
          type="button"
          onClick={() => {
            setShowAnswer(!showAnswer);
            setVisible(!visible);
          }}
        >
          {showAnswer ? "show answer" : "hide answer"}
        </AswButton>

        <ul>
          <CategoryItem>{category}</CategoryItem>
          <CategoryItem>{difficulty}</CategoryItem>
        </ul>
      </CardContainer>
    </>
  );
}

const CardContainer = styled.section`
  padding-top: 1rem;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  min-height: 35rem;
  margin: 3rem;

  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.58);
  h1 {
    color: #969696;
    border-radius: 8px;
    border: solid white 0.1rem;
    box-shadow: 0 0 5px 0 rgb(198, 196, 196);
    background: rgba(240, 238, 238, 0.491);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);

    padding-left: 1.75rem;
    padding-right: 1.75rem;
    padding-bottom: 0.5rem;
    padding-top: 0.5rem;
    margin: 1.5rem;
  }

  ul {
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    margin: 2rem;
    padding: 0;
  }
  p {
    font-size: 1.5rem;
    color: #626161;
    font-weight: bolder;
    text-align: center;
    margin: 2rem;
  }
`;

const Bookmark = styled.img`
  position: absolute;
  top: -20px;
  right: 20px;
  height: 6rem;
  filter: invert(91%) sepia(0%) saturate(1567%) hue-rotate(210deg)
    brightness(95%) contrast(98%);
  transition: 0.5s;
  &:hover {
    cursor: pointer;
    filter: invert(70%) sepia(0%) saturate(4722%) hue-rotate(57deg)
      brightness(85%) contrast(75%);
  }

  ${({ bool = false }) => {
    if (bool) {
      return css`
        filter: invert(70%) sepia(0%) saturate(4722%) hue-rotate(57deg)
          brightness(85%) contrast(75%);
      `;
    }
  }}
`;

const CategoryItem = styled.li`
  color: #969696;
  border-radius: 8px;
  border: solid white 0.1rem;
  box-shadow: 0 0 5px 0 rgb(198, 196, 196);
  background: rgba(240, 238, 238, 0.491);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);

  padding-left: 1.75rem;
  padding-right: 1.75rem;
  padding-bottom: 0.5rem;
  padding-top: 0.5rem;
  margin: 1.5rem;
  gap: 0.5rem;
  display: flex;
  justify-content: space-evenly;
  font-size: 1.5rem;
  opacity: 0.7;
`;

const AswButton = styled.button`
  color: #eeecec;
  border-radius: 45px;
  border: 1px solid rgba(255, 255, 255, 0.58);
  box-shadow: 0 0 8px 0 rgb(136, 136, 136);
  background: #be9ed5;
  _background: radial-gradient(
    circle,
    rgba(153, 114, 181, 1) 37%,
    rgba(162, 251, 217, 1) 79%,
    rgba(182, 255, 180, 1) 100%
  );
  padding: 2rem;
  transition: ease-in-out 0.5s;
  text-transform: uppercase;

  &:hover {
    box-shadow: 0px 0px 25px 15px rgba(255, 255, 255, 0.58);
    cursor: pointer;
    color: white;
  }
`;

const Answer = styled.p`
  border-radius: 8px;
  border: solid white 0.1rem;
  box-shadow: 0 0 5px 0 rgb(198, 196, 196);
  background: rgba(240, 238, 238, 0.491);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  padding-left: 1.75rem;
  padding-right: 1.75rem;
  padding-bottom: 0.5rem;
  padding-top: 0.5rem;
`;
