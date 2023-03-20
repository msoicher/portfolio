import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Homepage from "./pages/Homepage";
import Contact from "./pages/Contact";
import styled from "styled-components";

const BodyContainer = styled.main`
  margin: 0 12px;
  
`;

const App = () => (
  <>
    <NavBar />
    <BodyContainer>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BodyContainer>
  </>
);

export default App;
