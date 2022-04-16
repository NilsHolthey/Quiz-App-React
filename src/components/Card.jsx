import styled from "styled-components";
import AnswerButton from "./Buttons/AnswerButton";
// import { useState } from "react";

export default function Card() {
  return (
    <>
      <CardContainer>
        <Bookmark
          src="src/components/Images/bookmark_checked-96 1.svg"
          alt="bookmark"
        />
        <p>Question</p>
        <AnswerButton />

        <ul>
          <CategoryItem>catA</CategoryItem>
          <CategoryItem>catB</CategoryItem>
          <CategoryItem>catC</CategoryItem>
          <CategoryItem>catD</CategoryItem>
        </ul>
      </CardContainer>
    </>
  );
}

const CardContainer = styled.section`
  padding-top: 1rem;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 25rem;
  margin: 3rem;
  background: rgba(244, 243, 243, 0.2);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.58);
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
