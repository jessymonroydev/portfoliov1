import React from "react";
import '../styles/sectionStyles/index.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import IndexLanguageEs from "./textFolder/spanish/IndexLanguageEs";
import IndexLanguageEn from "./textFolder/english/IndexLanguageEn";
import Gato from '../assets/Gato.webp';

function Index(props) {
  const issue = props.issueProp;
  const language = props.languageProp;

    return (
      <div className='Index'>
        <div className={issue === 'light' ? 'containerIndexLight' : issue === 'dark' ? 'containerIndexDark' : 'containerIndexLight'}>         
          <div className="indexTextContainer">
            {language === 'es' ? <IndexLanguageEs languageProp={props.languageProp} issueProp={issue} sectionCode={props.sectionCode} /> : language === 'en' ? <IndexLanguageEn issueProp={issue} sectionCode={props.sectionCode}/> : <IndexLanguageEn issueProp={issue} sectionCode={props.sectionCode}/>}            
          </div>
          <div className="catContainer">
            <img className="imageIndexLight" src={Gato} alt="ImageLight" ></img>
          </div>
        </div>
      </div>
    );
}

export default Index;