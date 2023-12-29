import React from "react";
import '../../../styles/sectionStyles/examples.css';

function IndexLanguageEn(props) {
    const issue = props.issueProp;

    return (
        <div className={issue === 'light' ? 'examplesLight' : issue === 'dark' ? 'examplesDark' : 'examplesLight'}>
          <div className={issue === 'light' ? 'titleExamplesLight' : issue === 'dark' ? 'titleExamplesDark' : 'titleExamplesLight'}>
            About Me
          </div>
          <div className={issue === 'light' ? 'textExamplesLight' : issue === 'dark' ? 'textExamplesDark' : 'textExamplesLight'}>
            I am a passionate developer with experience in the IT industry, specializing in web and mobile development.
            I stand out for my ability to implement business automations, create websites, and find creative solutions for various projects.
            <br></br><br></br>
            My focus revolves around MERN technologies and databases. Currently, I am launching 'Vindie,'
            my own company, with the purpose of achieving economic independence and providing high-quality development solutions.
            Additionally, I am known for my commitment to clean code, my ability to tackle challenges creatively, and my passion for
            teaching, having had the opportunity to train colleagues and interns.
            <br></br><br></br>
            With 'Vindie,' I aspire to make a significant contribution to the field of development, explore new technologies, and
            continue showcasing my creativity and problem-solving skills.
          </div>
        </div>
    );
}

export default IndexLanguageEn;