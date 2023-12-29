import React from "react";
import '../../../styles/sectionStyles/examples.css';

function IndexLanguageEs(props) {
    const issue = props.issueProp;

    return (
        <div className={issue === 'light' ? 'examplesLight' : issue === 'dark' ? 'examplesDark' : 'examplesLight'}>
          <div className={issue === 'light' ? 'titleExamplesLight' : issue === 'dark' ? 'titleExamplesDark' : 'titleExamplesLight'}>
            Sobre mí
          </div>
          <div className={issue === 'light' ? 'textExamplesLight' : issue === 'dark' ? 'textExamplesDark' : 'textExamplesLight'}>
            Soy un apasionado del desarrollo con experiencia en la industria de TI,
            especializado en el desarrollo web y móvil. Destaco por mi habilidad para implementar
            automatizaciones empresariales, crear páginas web y encontrar soluciones creativas para diversos proyectos.
            <br></br><br></br>
            Mi enfoque se centra en tecnologías MERN y bases de datos.
            Actualmente, estoy lanzando 'Vindie', mi propia empresa, con el propósito de
            lograr independencia económica y proporcionar soluciones de desarrollo de alta calidad. Además,
            destaco por mi compromiso con el código limpio, mi capacidad para abordar desafíos con creatividad y
            mi gusto por enseñar, habiendo tenido la oportunidad de capacitar a colegas y practicantes.
            <br></br><br></br>
            Con 'Vindie', aspiro a contribuir significativamente al campo del desarrollo, explorar nuevas
            tecnologías y continuar demostrando mi creatividad y habilidades en la resolución de problemas.
          </div>
        </div>
    );
}

export default IndexLanguageEs;