import styled from "styled-components";

const AboutContainer = styled.div`
  font-size: 18px;
  font-weight: semibold;
  margin-top: 50px;
`;

const H3 = styled.h3`
  margin-top: 0;
  margin-bottom: 30px;
`;

const About = (props: any) => (
  <AboutContainer ref={props.refProp}>
    <H3>About Me</H3>
    <>
      {
        "I'm a frontend developer with over 1.5 years experience building and maintaining applications in the fintech startup space. I graduated in August of 2022 with a BSc. Computer Science, Finance Minor at UNSW"
      }
      <br />
      <br />

      {
        "Outside of work, I enjoy keeping healthy by running, basketball, gym and cycling. I'm a big sports fan of football (soccer), AFL and cricket."
      }
    </>
  </AboutContainer>
);

export default About;
