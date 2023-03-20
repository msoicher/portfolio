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
  flex: ${(props) => props.flex};
`;

const H1 = styled.h1`
  margin-bottom: 40px;
`;

const Homepage = (props: any) => (
  <Container ref={props.refProp}>
    <IntroContainer flex={1}>
      <H1>{`Hi! My name is Matt Soicher. Welcome to my website :)`}</H1>
      <>Please note that this website is a work in progress...Very barebones</>
    </IntroContainer>
    <IntroContainer flex={1}>
      <img src={me} />
    </IntroContainer>
  </Container>
);

export default Homepage;
