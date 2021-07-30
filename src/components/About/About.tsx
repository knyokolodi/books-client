import { AboutContainer, AboutTitle, AboutSubTitle, AboutList, AboutListItem } from './About.style';

const About = () => {
  return (
    <AboutContainer>
      <AboutTitle>About Books App</AboutTitle>
      <AboutSubTitle>This is fullstack app developed using below technologies: </AboutSubTitle>

      <AboutList>
        <AboutListItem>Express.js</AboutListItem>
        <AboutListItem>SQL</AboutListItem>
        <AboutListItem>Typescript</AboutListItem>
        <AboutListItem>React.js</AboutListItem>
        <AboutListItem>Styled Components</AboutListItem>
        <AboutListItem>Axios</AboutListItem>
        <AboutListItem>React Hook Form</AboutListItem>
      </AboutList>
    </AboutContainer>
  );
};

export default About;
