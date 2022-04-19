import styled from "styled-components";

export default function Header() {
  return (
    <>
      <HeaderBarPseudo />
      <HeaderBar>
        <HeaderList>
          <li>QUIZZIFY</li>
          <Logo>
            <img
              src="src/components/Images/frage-stellen-100 1.svg"
              alt="TitleLogo"
            />
          </Logo>
        </HeaderList>
      </HeaderBar>
    </>
  );
}

const HeaderBar = styled.div`
  z-index: 10;
  width: 100%;
  height: 10rem;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  border-radius: 0 0 8px 8px;
  border: solid white 0.3rem;
  background: rgb(193, 193, 193);
  background: linear-gradient(
    270deg,
    rgba(193, 193, 193, 1) 0%,
    rgba(228, 228, 228, 1) 34%,
    rgba(255, 255, 255, 1) 64%
  );
  opacity: 0.8;
`;

const HeaderBarPseudo = styled.div`
  z-index: 5;
  width: 100%;
  height: 10rem;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-evenly;
  border-radius: 0 0 8px 8px;

  background: rgb(255, 255, 255);
`;
const HeaderList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style-type: none;
  font-weight: 600;
  font-size: 5rem;
`;

const Logo = styled.li`
  img {
    height: 7rem;
    filter: invert(70%) sepia(0%) saturate(4722%) hue-rotate(57deg)
      brightness(85%) contrast(75%);
    transform: rotate(15deg);
  }
`;
