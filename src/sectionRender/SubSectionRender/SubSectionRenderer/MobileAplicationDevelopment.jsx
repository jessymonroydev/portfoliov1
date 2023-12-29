import React from "react";
import '../../../styles/sectionStyles/mobileAplicationDevelopment.css';
import ImageMobileLight from '../../../assets/ImageMobileLight.png';
import ImageMobileDark from '../../../assets/ImageMobileDark.png';
import RendererLanguageEn from "../../textFolder/english/RendererLanguageEn";
import RendererLanguageEs from "../../textFolder/spanish/RendererLanguageEs";

function MobileAplicationDevelopment(props) {
  const issue = props.issueProp;
  const RendererArrayEn = RendererLanguageEn();
  const RendererArrayEs = RendererLanguageEs();
  const language = props.languageProp;

    return (
      <div className="MobileAplication">
        <div className={issue === 'light' ? 'MobileAplicationLight': issue === 'dark' ? 'MobileAplicationDark': 'MobileAplicationLight'}>
          <div className={issue === 'light' ? 'titleMobileAplicationLight': issue === 'dark' ? 'titleMobileAplicationDark': 'titleMobileAplicationLight'}>
            {language === 'en' ? RendererArrayEn.mobileAplicationDevelopmentTitle : language === 'es' ? RendererArrayEs.mobileAplicationDevelopmentTitle : RendererArrayEn.mobileAplicationDevelopmentTitle}
          </div>
          <div className={issue === 'light' ? 'textMobileAplicationLight': issue === 'dark' ? 'textMobileAplicationDark': 'textMobileAplicationLight'}>
          {language === 'en' ? RendererArrayEn.mobileAplicationDevelopmentText : language === 'es' ? RendererArrayEs.mobileAplicationDevelopmentText : RendererArrayEn.mobileAplicationDevelopmentText}
          </div>
        </div>
        {issue === 'light' ? <img className="MAImgLight" src={ImageMobileLight} alt="ImageLight"></img>: issue === 'dark'? <img className="MAImgDark" src={ImageMobileDark} alt="ImageDark"></img>: <img className="MAImgLight" src={ImageMobileLight} alt="ImageLight"></img>}
      </div>  
    );
}

export default MobileAplicationDevelopment;