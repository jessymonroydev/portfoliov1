import React from "react";
import '../../../styles/sectionStyles/index.css';

function IndexLanguageEn(props) {
    const issue = props.issueProp;
    const sectionTwo = props.sectionCode;

    return (
        <div>
            <h1 className={issue === 'light' ? 'h1IndexLight' : issue === 'dark' ? 'h1IndexDark': 'h1IndexLight'} onClick={sectionTwo}>
                Custom Code
            </h1>
            <div className={issue === 'light' ? 'textIndexLight' : issue === 'dark' ? 'textIndexDark' : 'textIndexLight'}>
              👋😊 Hi, I'm Jessy, a fullstack developer who is passionate about creating custom projects that not only work great
              but also look great for users. Let's build something amazing together!
            </div> 
        </div>
    );
}

export default IndexLanguageEn;