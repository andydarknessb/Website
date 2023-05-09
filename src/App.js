import React from "react";
import "./App.css";
import Resume from "./Components/Resume";
import AboutMe from "./Components/AboutMe";
import Projects from "./Components/Projects";
import ContactMe from "./Components/ContactMe";
import { BsFillPersonFill, BsFileText, BsLightningFill, BsEnvelope } from "react-icons/bs";

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
      <div className="container">
        <div className="left">
          {/* Add your profile picture */}
          <img src="andy.jpeg" alt="Profile" className="profile-picture" />
          {/* Add your jobs */}
          <div className="jobs">
            <p>Job 1</p>
            <p>Job 2</p>
            <p>Job 3</p>
          </div>
          {/* Add your LinkedIn and GitHub links */}
          <div className="links">
            <a href="https://www.linkedin.com/in/your_username" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href="https://github.com/your_username" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </div>
        <div className="right">{renderComponent()}</div>
      </div>
    </div>
  );
}

export default App;
