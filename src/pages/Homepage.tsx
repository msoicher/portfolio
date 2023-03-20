import styled from "styled-components";
import me from "../assets/me.png";

export const Container = styled.div`
  margin-top: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80vh;
`;

const IntroContainer = styled.div<{ flex: number }>`
  flex: ${(props) => props.flex}
`;


const Homepage = (props: any) => (
  <Container ref={props.refProp}>
    <IntroContainer flex={1}>
      <h1>{`Hi! My name is Matt Soicher. Welcome to my website :)`}</h1>
    </IntroContainer>
    <IntroContainer flex={1}>
      <img src={me} />
    </IntroContainer>
  </Container>
);

export default Homepage;
