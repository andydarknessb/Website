import React from "react";
import "./App.css";
import Resume from "./Components/Resume";
import AboutMe from "./Components/AboutMe";
import Projects from "./Components/Projects";
import ContactMe from "./Components/ContactMe";
import { BsFillPersonFill, BsFileText, BsLightningFill, BsEnvelope } from "react-icons/bs";
import useTypingEffect from './Components/useTypingEffect';
import IconButton from '@material-ui/core/IconButton';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';
import Grid from "@material-ui/core/Grid";

function App() {
  const [activeComponent, setActiveComponent] = React.useState("aboutme");

  const renderComponent = () => {
    switch (activeComponent) {
      case "aboutme":
        return <AboutMe />;
      case "resume":
        return <Resume />;
      case "projects":
        return <Projects />;
      case "contactme":
        return <ContactMe />;
      default:
        return <AboutMe />;
    }
  };

  

  const jobs = ['Software Engineer', 'Web Developer', 'Fantasy Football Champion'];
  const typingSpeed = 100;
  const delayBetweenTexts = 1000;
  const displayedJob = useTypingEffect(jobs, typingSpeed, delayBetweenTexts);
  

  return (
    <div className="App">
      <div className="navbar">
        <div className="nav-item" onClick={() => setActiveComponent("aboutme")}>
          <BsFillPersonFill />
        </div>
        <div className="nav-item" onClick={() => setActiveComponent("resume")}>
          <BsFileText />
        </div>
        <div className="nav-item" onClick={() => setActiveComponent("projects")}>
          <BsLightningFill />
        </div>
        <div className="nav-item" onClick={() => setActiveComponent("contactme")}>
          <BsEnvelope />
        </div>
      </div>
      <Grid container className="container">
        <Grid item xs={12} md={6} className="left">
          <div className="profile-container">
            <img src="andy.jpeg" alt="Profile" className="profile-picture" />
            <Typography variant="h4" mt={2} style={{ textAlign: 'center' }}>
              Cory Anderson
            </Typography>
          </div>
          <div className="jobs">
            <p>{displayedJob}</p>
          </div>
          <Box mt={4} display="flex" flexDirection="column" alignItems="center">
            <div className="links">
            <IconButton
  edge="end"
  color="inherit"
  aria-label="LinkedIn"
  onClick={() => window.open('https://www.linkedin.com/in/cory-anderson-1b1492117/', '_blank')}
>
  <LinkedInIcon style={{ color: 'blueviolet' }} />
</IconButton>
<IconButton
  edge="end"
  color="inherit"
  aria-label="GitHub"
  onClick={() => window.open('https://github.com/andydarknessb', '_blank')}
>
  <GitHubIcon style={{ color: 'blueviolet' }} />
</IconButton>
            </div>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} className="right">
          {renderComponent()}
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
