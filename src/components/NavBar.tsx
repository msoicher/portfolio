import styled from "styled-components";

const Container = styled.header`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  height: 40px;
`;

const Link = styled.a`
  color: black;
  padding: 14px;
  text-decoration: none;
  font-size: 17px;
  &:hover {
    background-color: #ddd;
    color: black;
    font-size: 18px;
  }
`;

const NavBar = () => (
  <Container>
    <Link href="/">Home</Link>
    <Link href="/about">About</Link>
    <Link href="/contact">Contact</Link>
  </Container>
);

export default NavBar;
