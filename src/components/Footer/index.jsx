import { useEffect, useState } from 'react';
import { FOOTER, SOCIALS, TOP_SECTION } from '../../Module/General';
// import cross from './assets/cross.svg';
// import {Btn} from '../Landing/index.jsx';
// import DevPost from './assets/icons8-dev-post.svg';
// import Dis from './assets/icons8-discord.svg';
// import Insta from './assets/icons8-instagram.svg';
// import Linked from './assets/icons8-linkedin-2.svg';
// import Mail from './assets/icons8-mail.svg';
// import Twitter from './assets/icons8-twitter.svg';
// import PrivacyPolicy from './assets/Privacy policy.pdf';
// import TermsOfUse from './assets/Terms of use.pdf';
import { FaInstagram } from "react-icons/fa6";
import { BiLogoDiscordAlt } from "react-icons/bi";
import { CiLinkedin } from "react-icons/ci";
import { IoLogoTwitter } from "react-icons/io";
import { FaPhone } from "react-icons/fa";
import logo from './assets/transparent.png'
import Innologo from './assets/imageSkin.png'
import { HashLink } from 'react-router-hash-link';
//------------------------------------------------------------------
import './style.scss';
import Map from 'components/map';

const GithubTemplate = ({ hideTemplate }) => {
  return (
    <div className="template">
      <div className="template-left">
        <p>
          Join us to{' '}
          <a href={TOP_SECTION.HACKERS_REGISTRATION_FORM_LINK}>Gear Up</a>,
          where we will be hosting PUBLIC workshops, tech talks, panel
          discussions, and career sessions!
        </p>
      </div>
      <img onClick={hideTemplate} src={cross} />
    </div>
  );
};

const Footer = () => {
  // const [template, setTemplate] = useState(false);
  // const [viewTemplate, setViewTemplate] = useState(true);

  // useEffect(() => {
  //   window.addEventListener('scroll', listenScrollEvent);

  //   return () => {
  //     window.removeEventListener('scroll', listenScrollEvent);
  //   };
  // }, []);

  // const listenScrollEvent = e => {
  //   if (window.scrollY > 2800) setTemplate(true);
  //   else if (window.scrollY < 2800) setTemplate(false);
  // };

  return (
    <div className="footer new_footer_top" >
      <svg className="footer-wave-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 100" preserveAspectRatio="none">
        <path className="footer-wave-path" d="M851.8,100c125,0,288.3-45,348.2-64V0H0v44c3.7-1,7.3-1.9,11-2.9C80.7,22,151.7,10.8,223.5,6.3C276.7,2.9,330,4,383,9.8 c52.2,5.7,103.3,16.2,153.4,32.8C623.9,71.3,726.8,100,851.8,100z"></path>
      </svg>
      <div className='main-footer '>
        <div className="Register_a">
          <button className="register-button">

            <a smooth className='register-link' href='https://forms.gle/LabTKRJEHvyZuXd78' target='_blank'>
              <span>Register Now</span>
            </a>
          </button>
        </div>
        <div className='social-links'>
          <span className="single" >
            <a rel="noreferrer " target="_blank" href={SOCIALS.instagram}  >
              <FaInstagram fontSize={40} className='redBlue1' />
            </a>
          </span>
          <span className="single">
            <a rel="noreferrer" target="_blank" href="https://discord.gg/qNmEeAsuqQ">
              <BiLogoDiscordAlt fontSize={40} className='redBlue2' />
            </a>
          </span>
          <span className="single">
            <a rel="noreferrer" target="_blank" href={SOCIALS.linkedin}>
              <CiLinkedin fontSize={40} className='redBlue3' />
            </a>
          </span>
          <span className="single">
            <a rel="noreferrer" target="_blank" href={SOCIALS.twitter}>
              <IoLogoTwitter fontSize={40} className='redBlue4' />
            </a>
          </span>
          <span className="single">
            <a rel="noreferrer"  href="tel:+917669816088">
              <FaPhone fontSize={35} className='redBlue5' />
            </a>
          </span>
        </div>
      </div>
      <div className="footer-logo">
        <div className='hacks-footer-container'>
          <HashLink className="footer-logo-link" to="#" smooth>
            <img src="https://template-mail-images.s3.ap-south-1.amazonaws.com/INNOHACKS_3.0_Logo-removebg-preview+(1).png" className='hacks' width={"100%"} alt="" />
          </HashLink>
        </div>
        <div className='inno-footer-container'>
        <a className="footer-logo-link " href="https://innogeeks.in/" target='_blank'>
          <img className='inno' src="https://template-mail-images.s3.ap-south-1.amazonaws.com/inno+logo+(3).png" width={"120%"} alt="" />
        </a>
        </div>
      </div>
      <div className="footer-team">
        <h4>With 💙 by Team Innogeeks</h4>
        <p>©2024 Innogeeks™</p>
        <p><a href="mailto:innogeeks@kiet.edu">Contact us @Innogeeks™</a></p>
      </div>
      <div className="footer_bg">
          {/* <div className="footer_bg_one"></div> 
         <div className="footer_bg_two"></div> */}
      </div>

      <div className='footer-map'>
        <Map/>
      </div>

    </div>

  );
};

export default Footer;
