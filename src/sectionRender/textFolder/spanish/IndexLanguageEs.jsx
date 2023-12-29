import React from "react";
import '../../../styles/sectionStyles/index.css';

function IndexLanguageEs(props) {
    const issue = props.issueProp;
    const sectionTwo = props.sectionCode;

    return (
        <div>
            <h1 className={issue === 'light' ? 'h1IndexLight' : issue === 'dark' ? 'h1IndexDark': 'h1IndexLight'} onClick={sectionTwo}>
                Código Personalizado
            </h1>
            <div className={issue === 'light' ? 'textIndexLight' : issue === 'dark' ? 'textIndexDark' : 'textIndexLight'}>
                👋😊 Hola, soy Jessy, un desarrollador fullstack apasionado por crear proyectos personalizados que no solo funcionan de manera excelente,
                sino que también lucen geniales para los usuarios. ¡Construyamos algo increíble juntos!
            </div>
        </div>
    );
}

export default IndexLanguageEs;