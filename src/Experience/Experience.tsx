export type ExperienceProps = {
  companyName: string;
  position: string;
  brief: string;
  tenure: string;
};

const Experience = ({
  companyName,
  position,
  brief,
  tenure,
}: ExperienceProps) => (
  <>
    <td>{companyName}</td>
    <td>{position}</td>
    <td>{brief}</td>
    <td>{tenure}</td>
  </>
);

export default Experience;
