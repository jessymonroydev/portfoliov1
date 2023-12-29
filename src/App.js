import React, { useEffect, useState } from 'react';
import { Element, scroller } from 'react-scroll'
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import { FaLinkedin} from "react-icons/fa";
import { FaSquareXTwitter, FaSquareGithub } from "react-icons/fa6";
import FlagUnited from './assets/FlagUnited.png';
import GatoFecheron from './assets/GatoFacheron.jpg'

/* Styles */
import './App.css';
import './styles/menuStyles/menu.css';
import './styles/menuStyles/menuGeneral.css';

/* Import section components */
import Contact from './sectionRender/Contact';
import Examples from './sectionRender/Examples';
import Renderer from './sectionRender/Renderer';
import Index from './sectionRender/Index';

function App() {
  const [issue, setIssue] = useState();
  const [userLanguage, setUserLanguage] = useState();
  const [modalMenu, setModalMenu] = useState(null);
  const [tempButton, setTempButton] = useState();
  const [tempPage, setTempPage] = useState();
  const linkedin = 'https://www.linkedin.com/in/jessy-david-monroy-hern%C3%A1ndez-2810192a6/';
  const twitter = 'https://twitter.com/JessyMonro63848';
  const github = 'https://github.com/Estadovariable';
  const moon = <svg width="29" height="29" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="25" cy="25" r="25" fill="#040033"/>
                <circle cx="25" cy="25" r="18.75" fill="white" stroke="black" stroke-width="0.5"/>
                <circle cx="33" cy="15" r="2.75" fill="#A9A9A9" stroke="black" stroke-width="0.5"/>
                <circle cx="29" cy="21" r="0.75" fill="#D9D9D9" stroke="black" stroke-width="0.5"/>
                <circle cx="37.5" cy="25.5" r="4.25" fill="#A9A9A9" stroke="black" stroke-width="0.5"/>
                <circle cx="28" cy="30" r="1.75" fill="#A9A9A9" stroke="black" stroke-width="0.5"/>
              </svg>;
  const sun = <svg width="29" height="29" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="22.5" cy="22.5" r="22.5" fill="#003FA5"/>
                <circle cx="22.5" cy="22.5" r="17.5" fill="#FFC436"/>
              </svg>

  let renderModalMenu = null;
  let renderSelectOne = null;
  let renderPlanetSeletor = null;

  const scrollTo = (elementName) => {
    scroller.scrollTo(elementName, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };

  const handleClick = () => {
    const button = document.querySelector('.menu');
    button.classList.toggle('opened');
    button.setAttribute('aria-expanded', button.classList.contains('opened'));
  };

  const handleModalMenu = () => {
    if (modalMenu === 'Open') {
        setModalMenu('Close');
    } else {
      setModalMenu('Open');
    }
  };
  

  if (modalMenu === 'Open') {
    renderModalMenu =
      <div className='mainModalMenuSummer'>
        <div className='decorationContainer'>
        <div className={issue === 'light' ? 'menuDecorationLight' : issue === 'dark' ? 'menuDecorationDark' : 'menuDecorationLight'}></div>
          <nav className={issue === 'light' ? 'menuNavLight': issue === 'dark' ? 'menuNavDark' : 'menuNavLight'}>
            <div className='containerButtonSelectComponent'> 
              <div className='sunMenuSummer'>                
                <div className={issue === 'light' ? 'buttonMenuLight': issue === 'dark'? 'buttonMenuDark': 'buttonMenuLight'}>
                  <div className={issue === 'light' ? 'menuButtonLight': issue === 'dark'? 'menuButtonDark': 'menuButtonLight'}
                    onClick={() => {scrollTo('sectionOne'); handleModalMenu(); handleClick();}}>
                      {userLanguage === 'es' ? 'Inicio' : userLanguage === 'en' ? 'Index' : 'Index'}
                  </div>
                  <div className={issue === 'light' ? 'boxMenuLight': issue === 'dark'? 'boxMenuDark': 'boxMenuLight'}></div>
                </div>
                <div className={issue === 'light' ? 'buttonMenuLight': issue === 'dark'? 'buttonMenuDark': 'buttonMenuLight'}>
                  <div className={issue === 'light' ? 'menuButtonLight': issue === 'dark'? 'menuButtonDark': 'menuButtonLight'}
                    onClick={() => {scrollTo('sectionTwo'); handleModalMenu(); handleClick();}}>
                      {userLanguage === 'en' ? 'Information' : userLanguage === 'es' ? 'Información' : 'Information'}
                    </div>
                    <div className={issue === 'light' ? 'boxMenuLight': issue === 'dark'? 'boxMenuDark': 'boxMenuLight'}></div>
                </div>              
                <div className={issue === 'light' ? 'buttonMenuLight': issue === 'dark'? 'buttonMenuDark': 'buttonMenuLight'}>
                  <div className={issue === 'light' ? 'menuButtonLight': issue === 'dark'? 'menuButtonDark': 'menuButtonLight'}
                    onClick={() => {scrollTo('sectionSix'); handleModalMenu(); handleClick();}}>
                      {userLanguage === 'en' ? 'About Me' : userLanguage === 'es' ? 'Sobre Mí' : 'About Me'}
                  </div>
                  <div className={issue === 'light' ? 'boxMenuLight': issue === 'dark'? 'boxMenuDark': 'boxMenuLight'}></div>
                </div>
                <div className={issue === 'light' ? 'buttonMenuLight': issue === 'dark'? 'buttonMenuDark': 'buttonMenuLight'}                  >
                  <div className={issue === 'light' ? 'menuButtonLight': issue === 'dark'? 'menuButtonDark': 'menuButtonLight'}
                    onClick={() => {scrollTo('sectionSeven'); handleModalMenu(); handleClick();}}>
                      {userLanguage === 'en' ? 'Contact Me' : userLanguage === 'es' ? 'Contáctame' : 'Contact Me'}
                  </div>
                  <div className={issue === 'light' ? 'boxMenuLight': issue === 'dark'? 'boxMenuDark': 'boxMenuLight'}></div>
                </div>
                <div>
                <div className={issue === 'light' ? 'socialMediaMenuLight': issue === 'dark'? 'socialMediaMenuDark': 'socialMediaMenuLight'}>
                  <a className={issue === 'light' ? 'contactMenuRedirectLight': issue === 'dark'? 'contactMenuRedirectDark': 'contactMenuRedirectLight'} href={linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                  <a className={issue === 'light' ? 'contactMenuRedirectLight': issue === 'dark'? 'contactMenuRedirectDark': 'contactMenuRedirectLight'} href={twitter} target="_blank" rel="noopener noreferrer"><FaSquareXTwitter /></a>
                  <a className={issue === 'light' ? 'contactMenuRedirectLight': issue === 'dark'? 'contactMenuRedirectDark': 'contactMenuRedirectLight'} href={github} target="_blank" rel="noopener noreferrer"><FaSquareGithub /></a>                      
                </div>
              </div>
              </div>           
            </div>
          </nav>          
        </div>
        <div>{renderSelectOne}</div>
      </div>
  }

  const handleTempButton = () => {
    setTempButton(tempState => (tempState === 'tempButtonSun' ? 'tempButtonMoon' : 'tempButtonSun'));
    setTempPage(tempPageState => (tempPageState === 'tempPageSun' ? 'tempPageMoon' : 'tempPageSun'));
    setIssue(issue === 'light' ? 'dark' : 'light');
  }

  if (tempButton === 'tempButtonSun') {
    renderPlanetSeletor = sun;
  } 
  else {
    renderPlanetSeletor = moon;
  }

  const handleUserLanguage = () => {
    setUserLanguage(prevLanguage => (prevLanguage === 'en' ? 'es' : 'en'));
  }

  useEffect(() => {
    document.body.className = issue;
  }, [issue]);

  useEffect(() => {
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme)').matches) {
        const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        setIssue(systemTheme === 'dark' ? 'dark' : systemTheme === 'light' ? 'light' : 'light')
        setTempButton(systemTheme === 'dark' ? 'tempButtonMoon' : systemTheme === 'light' ? 'tempButtonSun': 'tempButtonSun');
        setTempPage(systemTheme === 'dark' ? 'tempPageMoon' : systemTheme === 'light' ? 'tempPageSun': 'tempPageSun');
      }
      /*Language */
      const language = navigator.language.split('-')[0];
        setUserLanguage(language);
  }, []);

  return (
    <div className={`App ${issue}`}>
      <div className='logoContainer'>
        <div className='logoSvg' onClick={() => scrollTo('sectionOne')}>JM</div>
      </div>
      <div className='menuRight'>
        <div className='languageClick' onClick={handleUserLanguage}>
          {userLanguage === 'en' ? <div><img className='flagUnited' src={FlagUnited} alt='imgUnitedFlag'></img></div> : 
            userLanguage === 'es' ? <div className='languageSpain'>
          <div className='redDecorationOne'></div>
          <div className='redDecorationTwo'></div>
        </div> : <div><img className='flagUnited' src={FlagUnited} alt='imgUnitedFlag'></img></div>}
        </div>
        <div className={tempPage}  onClick={handleTempButton}>
          <div className={tempButton}>
            {renderPlanetSeletor}
          </div>
        </div>
        <button className="menu" onClick={() => { handleClick(); handleModalMenu();}} aria-label="Main Menu">
          <svg width="60" height="60" viewBox="0 0 100 100">
            <path className={issue === 'light' ? 'lineLight line1': issue === 'dark' ? 'lineDark line1': 'lineLight line1'} d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
            <path className={issue === 'light' ? 'lineLight line2': issue === 'dark' ? 'lineDark line2': 'lineLight line2'} d="M 20,50 H 80" />
            <path className={issue === 'light' ? 'lineLight line3': issue === 'dark' ? 'lineDark line3': 'lineLight line3'} d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
          </svg>
        </button>
      </div>
      <div className='whatsAppLogoContainer' ><FloatingWhatsApp 
        avatar={GatoFecheron}
        darkMode={issue === 'light' ? 'false' : issue === 'dark' ? 'true' : 'false'}
        phoneNumber= '(+57) 302 216 8849' 
        accountName= 'Jessy Monroy'
        chatMessage={userLanguage === 'en' ? 'Hello, NICE TO MEET YOU! 😊 How can I help you? 🤔' : userLanguage === 'es' ? 'Hola, ¡MUCHO GUSTO! 😊  ¿Como puedo ayudarte? 🤔' : 'Hello, NICE TO MEET YOU! 😊 How can I help you? 🤔'}
        statusMessage= {userLanguage === 'en' ? 'online' : userLanguage === 'es' ? 'en línea' : 'online'}
      /></div>
      <div className="scroll-container">        
        <Element name="sectionOne" className="element">
          <div className={issue === 'light' ? 'section IndexLight' : issue === 'dark' ? 'section IndexDark' : 'section IndexLight'}><Index languageProp={userLanguage} issueProp={issue} sectionCode={() => scrollTo('sectionTwo')}/></div>
        </Element>
        <Element name="sectionTwo" className="element">
          <div className={issue === 'light' ? 'section RendererLight' : issue === 'dark' ? 'section RendererDark' : 'section RendererLight'}><Renderer languageProp={userLanguage} issueProp={issue} sectionKnow={() => scrollTo('sectionTwo')}/></div>
        </Element>
        <Element name="sectionSix" className="element">
          <div className={issue === 'light' ? 'ExamplesLight' : issue === 'dark' ? 'ExamplesDark' : 'ExamplesLight'}><Examples languageProp={userLanguage} issueProp={issue} /></div>
        </Element>
        <Element name="sectionSeven" className="element">
          <div className={issue === 'light' ? 'section ContactLight' : issue === 'dark' ? 'section ContactDark' : 'section ContactLight'}><Contact languageProp={userLanguage} issueProp={issue} /></div>
        </Element>
      </div>
      {renderModalMenu}
    </div>
  );
}

export default App;

