import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import '../styles/sectionStyles/contact.css';
import '../styles/alertStyles/emailAlert.css';
import { BiSolidErrorCircle } from "react-icons/bi";
import { IoMdCloseCircle } from "react-icons/io";
import { FaCheckCircle, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter, FaSquareGithub } from "react-icons/fa6";
import ContactLanguageEn from "./textFolder/english/ContactLanguageEn";
import ContactLanguageEs from "./textFolder/spanish/ContactLanguageEs";

function Contact(props) {
  const contactArrayEn = ContactLanguageEn();
  const contactArrayEs = ContactLanguageEs();
  const language = props.languageProp;
  const [thenEmail, setThenEmail] = useState('');
  const form = useRef();
  const issue = props.issueProp;
  const linkedin = 'https://www.linkedin.com/in/jessy-david-monroy-hern%C3%A1ndez-2810192a6/';
  const twitter = 'https://twitter.com/JessyMonro63848';
  const github = 'https://github.com/Estadovariable';

  let renderThenEmail = null;

  const handleThenEmail = (prev) => {
    setThenEmail(prev);
  }
 
  if (thenEmail === 'correct') {
    renderThenEmail = 
    <div className="thenEmail">
      <div className="mainThenEmail">
        <FaCheckCircle className="checkCorrect"/>
        <div>
          <div className="bold">Success</div>
          <div>Query sent</div>
        </div>       
        <button className="buttonCloseThenEmail" onClick={() => (handleThenEmail(''))}><IoMdCloseCircle /></button>
      </div>
    </div>
  } else if (thenEmail === 'error') {
    renderThenEmail = 
    <div className="thenEmail">
      <div className="mainThenEmail">
        <BiSolidErrorCircle className="checkError"/>
        <div>
          <div className="bold">Error</div>
          <div>query could not be sent</div>
        </div>
        <button className="buttonCloseThenEmail" onClick={() => (handleThenEmail(''))}><IoMdCloseCircle /></button>
      </div>
    </div>
  }

  const sendEmail = (e) => {
    e.preventDefault();
  
    let templateId;
    if (language === 'en') {
      templateId = 'template_012le91';
    } else if (language === 'es') {
      templateId = 'template_p4y4pw9';
    } else {
      templateId = 'template_012le91';
    }
  
    emailjs.sendForm('service_6gqfuvc', templateId, form.current, 'iT75_2KzpFxswYoAA')
      .then((result) => {
        handleThenEmail('correct');
      })
      .catch((error) => {
        handleThenEmail('error');
      });
  };


    return (
      <div className="Contact">
        <div className="containerFormContact">
          <div className={issue === 'light' ? 'FoundLight': issue === 'dark'? 'FoundDark': 'FoundLight'}>
          <h1 className={issue === 'light' ? 'h1ColorLight': issue === 'dark'? 'h1ColorDark': 'h1ColorLight'}>
            {language === 'es' ? contactArrayEs.title : language === 'en' ? contactArrayEn.title : contactArrayEn.title}
          </h1>
          <div className={issue === 'light' ? 'gottaLight': issue === 'dark'? 'gottaDark': 'gottaLight'}>
            {language === 'es' ? contactArrayEs.message : language === 'en' ? contactArrayEn.message : contactArrayEn.message}
          </div>
          <form ref={form} onSubmit={sendEmail} className={issue === 'light' ? 'formDirectionLight': issue === 'dark'? 'formDirectionDark': 'formDirectionLight'}>
            <div className="rx7">
              <div className="column specialColumn">
                <label>
                  {language === 'es' ? contactArrayEs.nameTitle : language === 'en' ? contactArrayEn.nameTitle : contactArrayEn.nameTitle}
                </label>
                <input className={issue === 'light' ? 'nameContactLight': issue === 'dark'? 'nameContactDark': 'nameContactLight'} type="text" name="user_name" 
                placeholder={language === 'es' ? contactArrayEs.inputName : language === 'en' ? contactArrayEn.inputName : contactArrayEn.inputName}/>
              </div>
              <div className="column">
                <label>
                  {language === 'es' ? contactArrayEs.emailTitle : language === 'en' ? contactArrayEn.emailTitle : contactArrayEn.emailTitle}
                </label>
                <input className={issue === 'light' ? 'emailContactLight': issue === 'dark'? 'emailContactDark': 'emailContactLight'} type="email" name="user_email" 
                placeholder={language === 'es' ? contactArrayEs.inputEmail : language === 'en' ? contactArrayEn.inputEmail : contactArrayEn.inputEmail}/>
              </div>                            
            </div>
            <div className="containerMessage">
              <label>
                {language === 'es' ? contactArrayEs.messageTitle : language === 'en' ? contactArrayEn.messageTitle : contactArrayEn.messageTitle}
              </label>
              <textarea name="message" className={issue === 'light' ? 'messageTextLight': issue === 'dark'? 'messageTextDark': 'messageTextLight'} 
              placeholder={language === 'es' ? contactArrayEs.inputMessage : language === 'en' ? contactArrayEn.inputMessage : contactArrayEn.inputMessage}/>
            </div>            
            <div className="wraper">
              <button className={issue === 'light' ? 'messageContactLight': issue === 'dark'? 'messageContactDark': 'messageContactLight'} value="send">
                <span>
                {language === 'es' ? contactArrayEs.buttonTitle : language === 'en' ? contactArrayEn.buttonTitle : contactArrayEn.buttonTitle}
                </span>
              </button>            
            </div>          
          </form>
          </div>          
          <div>{renderThenEmail}</div>
          <div className="lineContact"></div> 
          <div className={issue === 'light' ? 'socialMediaLight': issue === 'dark'? 'socialMediaDark': 'socialMediaLight'}>
            <a className={issue === 'light' ? 'contactRedirectLight': issue === 'dark'? 'contactRedirectDark': 'contactRedirectLight'} href={linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a className={issue === 'light' ? 'contactRedirectLight': issue === 'dark'? 'contactRedirectDark': 'contactRedirectLight'} href={twitter} target="_blank" rel="noopener noreferrer"><FaSquareXTwitter /></a>
            <a className={issue === 'light' ? 'contactRedirectLight': issue === 'dark'? 'contactRedirectDark': 'contactRedirectLight'} href={github} target="_blank" rel="noopener noreferrer"><FaSquareGithub /></a>            
          </div>
          <div className={issue === 'light' ? 'copyLight': issue === 'dark'? 'copyDark': 'copyLight'}><div className="copyp">©</div>&nbsp; &nbsp; Jessy Monroy 2023 - email: jessymonroydev@gmail.com</div>
        </div>
      </div>  
    );
}

export default Contact;