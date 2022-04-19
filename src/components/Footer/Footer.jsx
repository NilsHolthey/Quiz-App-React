import styled from "styled-components";

export default function Footer() {
  return (
    <>
      <FooterBarPseudo />
      <FooterBar>
        <FooterList>
          <NavList>
            <img src="src/components/Images/home-96 1.svg" alt="home" />
          </NavList>
          <NavList>
            <img
              src="src/components/Images/frage-stellen-100 1.svg"
              alt="createQuestion"
            />
          </NavList>
          <NavList>
            <img
              src="src/components/Images/bookmark_checked-96 1.svg"
              alt="bookmarks"
            />
          </NavList>
          <NavList>
            <img src="src/components/Images/profile-100 1.svg" alt="profile" />
          </NavList>
        </FooterList>
      </FooterBar>
    </>
  );
}

const FooterBar = styled.div`
  z-index: 10;
  width: 100%;
  height: 10rem;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-evenly;
  border-radius: 8px 8px 0 0;
  border: solid #faf9f9 0.3rem;
  background: rgb(193, 193, 193);
  background: linear-gradient(
    90deg,
    rgba(193, 193, 193, 1) 0%,
    rgba(228, 228, 228, 1) 34%,
    rgba(255, 255, 255, 1) 64%
  );
  opacity: 0.8;
`;
const FooterBarPseudo = styled.div`
  z-index: 5;
  width: 100%;
  height: 10rem;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-evenly;
  border-radius: 8px 8px 0 0;

  background: rgb(255, 255, 255);
`;

const FooterList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style-type: none;
`;

const NavList = styled.li`
  &:nth-child(1n + 2) {
    border-left: solid #96969697 0.4rem;
  }
  &:hover {
    filter: invert(81%) sepia(7%) saturate(2628%) hue-rotate(214deg)
      brightness(83%) contrast(101%);

    cursor: pointer;
  }
  img {
    filter: invert(70%) sepia(0%) saturate(4722%) hue-rotate(57deg)
      brightness(85%) contrast(75%);
    height: 7rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;
