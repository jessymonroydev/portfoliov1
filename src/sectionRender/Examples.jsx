import React from "react";
import '../styles/sectionStyles/examples.css';
import SvgMeDark from "../assets/svg/SvgMeDark";
import SvgMeLight from "../assets/svg/SvgMeLight";
import ExamplesLanguageEs from './textFolder/spanish/ExamplesLanguageEs';
import ExamplesLanguagesEn from './textFolder/english/ExamplesLanguageEn';

function Examples(props) {
  const issue = props.issueProp;
  const language = props.languageProp;
    return (
      <div className="Examples">
        {language === 'es' ? <ExamplesLanguageEs languageProp={props.languageProp} issueProp={issue} sectionCode={props.sectionCode} /> : language === 'en' ? <ExamplesLanguagesEn issueProp={issue} sectionCode={props.sectionCode}/> : <ExamplesLanguagesEn issueProp={issue} sectionCode={props.sectionCode}/>}            
        {issue === 'light' ? <SvgMeLight /> : issue === 'dark' ? <SvgMeDark/> : <SvgMeLight />}
      </div> 
    );
}

export default Examples;