import Experience from "./Experience";
import { experienceInfo } from "./Info";
import styled from "styled-components";
import { Table } from "react-bootstrap";

const Row = styled.tr`
  text-align: left;
`;

const MyExperience = () => (
  <div>
    <h1>My Experience</h1>
    <div>I've had experience working as a frontend developer at fintech companies in Sydney, Australia. There, I was able to learn exponentially in a challenging environment where I was constantly learning and growing. </div>
    <Table>
      <thead>
        <Row>
          <th>Role</th>
          <th>Company</th>
          <th>Brief</th>
          <th>Tenure</th>
        </Row>
      </thead>
      <tbody>
        {experienceInfo.map((experience) => (
          <Row>
            <Experience {...experience} />
          </Row>
        ))}
      </tbody>
    </Table>
  </div>
);

export default MyExperience;
