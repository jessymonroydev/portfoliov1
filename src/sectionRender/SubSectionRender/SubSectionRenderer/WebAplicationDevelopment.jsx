import React from "react";
import '../../../styles/sectionStyles/webAplicationDevelopment.css';
import ImageAplicacionLight from '../../../assets/ImageAplicationLight.png';
import ImageAplicacionDark from '../../../assets/ImageAplicationDark.png';
import RendererLanguageEn from "../../textFolder/english/RendererLanguageEn";
import RendererLanguageEs from "../../textFolder/spanish/RendererLanguageEs";

function WebAplicationDevelopment(props) {
  const issue = props.issueProp;
  const RendererArrayEn = RendererLanguageEn();
  const RendererArrayEs = RendererLanguageEs();
  const language = props.languageProp;

    return (
      <div className="WebAplicationDevelopment">
        <div className={issue === 'light' ? 'WebAplicationLight': issue === 'dark' ? 'WebAplicationDark': 'WebAplicationLight'}>
          <div className={issue === 'light' ? 'titleWebAplicationLight': issue === 'dark' ? 'titleWebAplicationDark': 'titleWebAplicationLight'}>
            {language === 'en' ? RendererArrayEn.webAplicationDevelopmentTitle : language === 'es' ? RendererArrayEs.webAplicationDevelopmentTitle : RendererArrayEn.webAplicationDevelopmentTitle}
          </div>
          <div className={issue === 'light' ? 'textWebAplicationLight': issue === 'dark' ? 'textWebAplicationDark': 'textWebAplicationLight'}>
            {language === 'en' ? RendererArrayEn.webAplicationDevelopmentText : language === 'es' ? RendererArrayEs.webAplicationDevelopmentText : RendererArrayEn.webAplicationDevelopmentText} 
          </div>
          </div>
          {issue === 'light' ? <img className="WAImgLight" src={ImageAplicacionLight} alt="ImageLight"></img>: issue === 'dark'? <img className="WAImgDark" src={ImageAplicacionDark} alt="ImageDark"></img>: <img className="WAImgLight" src={ImageAplicacionLight} alt="ImageLight"></img>}
      </div>  
    );
}

export default WebAplicationDevelopment;