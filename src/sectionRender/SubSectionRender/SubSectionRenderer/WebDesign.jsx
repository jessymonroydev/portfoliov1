import React from "react";
import "../../../styles/sectionStyles/webDesign.css";
import RendererLanguageEn from "../../textFolder/english/RendererLanguageEn";
import RendererLanguageEs from "../../textFolder/spanish/RendererLanguageEs";

function WebDesign(props) {
    const issue = props.issueProp;
    const RendererArrayEn = RendererLanguageEn();
    const RendererArrayEs = RendererLanguageEs();
    const language = props.languageProp;

    return (
        <div className="WebDesign">
                    <div className={issue === 'light' ? 'designLight first': issue === 'dark' ? 'designDark first ': 'designLight first'}>
                        <div className={issue === 'light' ? 'titleDesignLight': issue === 'dark' ? 'titleDesignDark': 'titleDesignLight'}>
                            {language === 'en' ? RendererArrayEn.webDesignTitleOne : language === 'es' ? RendererArrayEs.webDesignTitleOne : RendererArrayEn.webDesignTitleOne} 
                        </div>
                        <div className={issue === 'light' ? 'textDesignLight': issue === 'dark' ? 'textDesignDark': 'textDesignLight'}>
                        {language === 'en' ? RendererArrayEn.webDesignTextOne : language === 'es' ? RendererArrayEs.webDesignTextOne : RendererArrayEn.webDesignTextOne} 
                        </div>
                    </div>
                    <div className={issue === 'light' ? 'designLight second': issue === 'dark' ? 'designDark second': 'designLight second'}>
                        <div className={issue === 'light' ? 'titleDesignLight': issue === 'dark' ? 'titleDesignDark': 'titleDesignLight'}>
                            {language === 'en' ? RendererArrayEn.webDesignTitleTwo : language === 'es' ? RendererArrayEs.webDesignTitleTwo : RendererArrayEn.webDesignTitleTwo} 
                        </div>
                        <div className={issue === 'light' ? 'textDesignLight': issue === 'dark' ? 'textDesignDark': 'textDesignLight'}>
                        {language === 'en' ? RendererArrayEn.webDesignTextTwo : language === 'es' ? RendererArrayEs.webDesignTextTwo : RendererArrayEn.webDesignTextTwo} 
                        </div>
                    </div>
                    <div className={issue === 'light' ? 'designLight third': issue === 'dark' ? 'designDark third': 'designLight third'}>
                        <div className={issue === 'light' ? 'titleDesignLight': issue === 'dark' ? 'titleDesignDark': 'titleDesignLight'}>
                            {language === 'en' ? RendererArrayEn.webDesignTitleThree : language === 'es' ? RendererArrayEs.webDesignTitleThree : RendererArrayEn.webDesignTitleThree}
                        </div>
                        <div className={issue === 'light' ? 'textDesignLight': issue === 'dark' ? 'textDesignDark': 'textDesignLight'}>
                            {language === 'en' ? RendererArrayEn.webDesignTextThree : language === 'es' ? RendererArrayEs.webDesignTextThree : RendererArrayEn.webDesignTextThree} 
                        </div>
                    </div>
                </div>
    );
}

export default WebDesign;