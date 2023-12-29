import React, { useState } from "react";
import '../styles/sectionStyles/renderer.css';

/* import components */
import WebDesign from "./SubSectionRender/SubSectionRenderer/WebDesign";
import WebAplicationDevelopment from "./SubSectionRender/SubSectionRenderer/WebAplicationDevelopment";
import WebDevelopment from "./SubSectionRender/SubSectionRenderer/WebDevelopment";
import MobileAplicationDevelopment from "./SubSectionRender/SubSectionRenderer/MobileAplicationDevelopment";
import RendererLanguageEn from "./textFolder/english/RendererLanguageEn";
import RendererLanguageEs from "./textFolder/spanish/RendererLanguageEs";

function Renderer(props) {
  const RendererArrayEn = RendererLanguageEn();
  const RendererArrayEs = RendererLanguageEs();
  const language = props.languageProp;
  const sectionKnow = props.sectionKnow;
  const issue = props.issueProp;
  const [renderState, setRenderState] = useState('');
  
  let rendererState = null;

  const handleRenderState = (state) => {
    setRenderState(state);
  }

  if (renderState === '') {
    rendererState = <WebDesign issueProp={issue} languageProp={language}/>;
  } 
  else if (renderState === 'WebDesign') {
    rendererState = <WebDesign issueProp={issue} languageProp={language}/>;
  }
  else if (renderState === 'WebDevelopment') {
    rendererState = <WebDevelopment issueProp={issue} languageProp={language}/>;
  }
  else if (renderState === 'WebAplicationDevelopment') {
    rendererState = <WebAplicationDevelopment issueProp={issue} languageProp={language}/>;
  }
  else if (renderState === 'MobileAplicationDevelopment') {
    rendererState = <MobileAplicationDevelopment issueProp={issue} languageProp={language}/>;
  }
  
    return (
      <div className="Renderer">
        <nav className="RendererContainer">
          <div className={issue === 'light' ? 'buttonLight': issue === 'dark'? 'buttonDark': 'buttonLight'}>
            <div className={issue === 'light' ? 'RendererNavLight': issue === 'dark'? 'RendererNavDark': 'RendererNavLight'}
              onClick={() => {handleRenderState('WebDesign'); sectionKnow();}}>
                {language === 'en' ? RendererArrayEn.webDesignButton : language === 'es' ? RendererArrayEs.webDesignButton : RendererArrayEn.webDesignButton}
            </div>
            <div className={issue === 'light' ? 'boxLight': issue === 'dark'? 'boxDark': 'boxLight'}></div>
          </div>
          <div className={issue === 'light' ? 'buttonLight': issue === 'dark'? 'buttonDark': 'buttonLight'}>
            <div className={issue === 'light' ? 'RendererNavLight': issue === 'dark'? 'RendererNavDark': 'RendererNavLight'} 
              onClick={() => {handleRenderState('WebDevelopment'); sectionKnow();}}>
                {language === 'en' ? RendererArrayEn.webDevelopmentButton : language === 'es' ? RendererArrayEs.webDevelopmentButton : RendererArrayEn.webDevelopmentButton}
              </div>
            <div className={issue === 'light' ? 'boxLight': issue === 'dark'? 'boxDark': 'boxLight'}></div>
          </div>   
          <div className={issue === 'light' ? 'buttonLight': issue === 'dark'? 'buttonDark': 'buttonLight'}>
            <div className={issue === 'light' ? 'RendererNavLight': issue === 'dark'? 'RendererNavDark': 'RendererNavLight'}
              onClick={() => {handleRenderState('WebAplicationDevelopment'); sectionKnow();}}>
                {language === 'en' ? RendererArrayEn.webAplicationDevelopmentButton : language === 'es' ? RendererArrayEs.webAplicationDevelopmentButton : RendererArrayEn.webAplicationDevelopmentButton}
              </div>
            <div className={issue === 'light' ? 'boxLight': issue === 'dark'? 'boxDark': 'boxLight'}></div>
          </div>
          <div className={issue === 'light' ? 'buttonLight': issue === 'dark'? 'buttonDark': 'buttonLight'}>
            <div className={issue === 'light' ? 'RendererNavLight': issue === 'dark'? 'RendererNavDark': 'RendererNavLight'} 
              onClick={() => {handleRenderState('MobileAplicationDevelopment'); sectionKnow();}}>
                {language === 'en' ? RendererArrayEn.mobileAplicationDevelopmentButton : language === 'es' ? RendererArrayEs.mobileAplicationDevelopmentButton : RendererArrayEn.mobileAplicationDevelopmentButton}
              </div>
            <div className={issue === 'light' ? 'boxLight': issue === 'dark'? 'boxDark': 'boxLight'}></div>
          </div>                                     
        </nav>
        <div className={issue === 'light' ? 'renderContainerLight': issue === 'dark'? 'renderContainerDark': 'renderContainerLight'}>{rendererState}</div>
      </div> 
    );
}

export default Renderer;