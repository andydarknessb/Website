import React from "react";
import classes from "./Resume.css";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";


const useStyles = makeStyles((theme) => ({
    header: {
      textAlign: "center",
      marginBottom: theme.spacing(2),
      paddingTop: theme.spacing(2),
      fontWeight: theme.typography.fontWeightBold,
    },
  }));
  
  const Resume = () => {
    const localClasses = useStyles();
    return (
        <div className={localClasses.root}>
          <Typography variant="h4" gutterBottom className={localClasses.header}>
            Resume
          </Typography>
    <codersrank-summary
          username="andydarknessb"
          layout="vertical"
        ></codersrank-summary>
            <div className={classes.badges}>
            <Typography variant="h4" gutterBottom style={{ textAlign: "center" }}>
  <Icon style={{ verticalAlign: "middle", marginRight: "8px" }}></Icon>Tech Stack</Typography>

          <img src="https://img.shields.io/badge/c%23-%23239120.svg?style=for-the-badge&logo=c-sharp&logoColor=white" alt="C#" />
          <img src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
          <img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
          <img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" alt="JavaScript" />
          <img src="https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54" alt="Python" />
          <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
          <img src="https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white" alt="Heroku" />
          <img src="https://img.shields.io/badge/.NET-5C2D91?style=for-the-badge&logo=.net&logoColor=white" alt=".NET" />
          <img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB" alt="Express.js" />
          <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" alt="NodeJS" />
          <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="React" />
          <img src="https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white" alt="Redux" />
          <img src="https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="React Native" />
          <img src="https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL" />
          <img src="https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL" />
          <img src="https://img.shields.io/badge/Microsoft%20SQL%20Sever-CC2927?style=for-the-badge&logo=microsoft%20sql%20server&logoColor=white" alt="Microsoft SQL Server" />
          <img src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white" alt="Postman" />
          </div>

          <div style={{ margin: '4em 0'}}>
          <Typography variant="h4" gutterBottom style={{textAlign: 'center'}}>Work Experience</Typography>
          <codersrank-work-experience username="andydarknessb" logos></codersrank-work-experience>
          </div>

          <Typography variant="h4" gutterBottom style={{textAlign: 'center'}}>Education</Typography>
          <codersrank-education
          username="andydarknessb"
          max-items="3"
          education="true"
          certificates="true"
          certificates-link="true"
          certificates-link-text="See certification"
          education-section-title=""
          certificates-section-title=""
          branding="false"
          className={classes.educationWidget}
        ></codersrank-education>
  </div>
);
  };

export default Resume;
