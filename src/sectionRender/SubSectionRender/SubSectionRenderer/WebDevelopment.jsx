import React from "react";
import '../../../styles/sectionStyles/webDevelopment.css';
import ImageDark from '../../../assets/ImageDark.png';
import ImageLight from '../../../assets/ImageLight.png';
import RendererLanguageEn from "../../textFolder/english/RendererLanguageEn";
import RendererLanguageEs from "../../textFolder/spanish/RendererLanguageEs";

function WebDevelopment(props) {
  const issue = props.issueProp;
  const RendererArrayEn = RendererLanguageEn();
  const RendererArrayEs = RendererLanguageEs();
  const language = props.languageProp;

    return (
      <div className="WebDevelopment">
        <div className={issue === 'light' ? 'webDevelopmentLight': issue === 'dark'? 'webDevelopmentDark': 'webDevelopmentLight'}>
          <div className={issue === 'light' ? 'titleWebDevelopmentLight': issue === 'dark'? 'titleWebDevelopmentDark': 'titleWebDevelopmentLight'}>
          {language === 'en' ? RendererArrayEn.webDevelopmentTitle : language === 'es' ? RendererArrayEs.webDevelopmentTitle : RendererArrayEn.webDevelopmentTitle} 
          </div>
          <div className={issue === 'light' ? 'textWebDevelopmentLight': issue === 'dark'? 'textWebDevelopmentDark': 'textWebDevelopmentLight'}>
          {language === 'en' ? RendererArrayEn.webDevelopmentText : language === 'es' ? RendererArrayEs.webDevelopmentText : RendererArrayEn.webDevelopmentText}
          </div>
        </div>
        {issue === 'light' ? <img className="WDImgLight" src={ImageLight} alt="ImageLight"></img>: issue === 'dark'? <img className="WDImgDark" src={ImageDark} alt="ImageDark"></img>: <img className="WDImgLight" src={ImageLight} alt="ImageLight"></img>}
      </div>  
    );
}

export default WebDevelopment;