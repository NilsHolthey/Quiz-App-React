import styled from "styled-components";

export default function AnswerButton() {
  return (
    <>
      <AswButton />
    </>
  );
}

const AswButton = styled.button`
  color: #eeecec;
  border-radius: 45px;
  border: 1px solid rgba(255, 255, 255, 0.58);
  box-shadow: 0 0 8px 0 rgb(136, 136, 136);
  background: rgb(83, 116, 75);
  background: radial-gradient(
    circle,
    rgba(83, 116, 75, 0.8) 0%,
    rgba(172, 139, 180, 1) 100%
  );
  padding: 2rem;
  transition: ease-in-out 0.5s;
  text-transform: uppercase;

  &:hover {
    box-shadow: 0px 0px 15px 5px rgba(255, 255, 255, 0.58);
    cursor: pointer;
    color: white;
    border-radius: 15px;
    transform: scale(1.1);
  }
`;
