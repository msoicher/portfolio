import me from "../assets/me.png";
import styled from "styled-components";

const IntroContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 80vh;
`;

const Homepage = () => (
  <IntroContainer>
    <h1>Coming soon...</h1>
  </IntroContainer>
);

export default Homepage;
