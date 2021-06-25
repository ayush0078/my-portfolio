import React from "react";
import wpf from "../images/donation.PNG";
import autistic from "../images/autistic.PNG";
import newsletter from "../images/News-letter.png";
import petAppointment from "../images/Pet-Appointment.png";
// FONTAWESOME IMPORTS
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearchPlus} from "@fortawesome/free-solid-svg-icons";
// REACT POPUPBOX
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";
import "video-react/dist/video-react.css";
import { Player } from "video-react";
import autisticVideo from "../videos/Autistic.MP4";

const Projects = () => {

//WPF
const openPopupboxWpf = () => {
    const content = (
        <>
        <img className="project-image-popupbox" src={wpf} alt="WPF Drug donation Project" />
        <p>Developed a desktop application which stores the data of the medicines donated and can be provided to those who have a need for it.</p>
        <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/ayush0078/Drug-Donation-Application")}>https://github.com/ayush0078/Drug-Donation-Application</a>
    </>
    )
    
    PopupboxManager.open({content}) 
} 

const popupboxConfigWpf = {
    titleBar: {
        enable: true,
        text: "Drug Donation Application",
    },
    fadeIn: true,
    fadeInSpeed: 500,
}

//Autistic
const openPopupboxAutistic = () => {
    const content = (
        <>
        <Player className="project-image-popupbox video-box" aspectRatio="16:9" src={autisticVideo} />
        <p>Researched and developed a mobile application which can be useful for Autistic children to search for public transportation to go to school.</p>
        <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/ayush0078/direction")}>https://github.com/ayush0078/direction</a>
    </>
    )
    
    PopupboxManager.open({content}) 
} 

const popupboxConfigAutistic = {
    titleBar: {
        enable: true,
        text: "Direction Application",
    },
    fadeIn: true,
    fadeInSpeed: 500,
}

//Pet Appointment
const openPopupboxpetAppointment = () => {
    const content = (
        <>
        <img className="project-image-popupbox" src={petAppointment} alt="React Application for making vetenary appointments" />
        <p>Designed a cross-platform web application in a team that schedules vet appointments according to its symptoms. I designed the front end using React.</p>
        <b>Demo:</b> <a className="hyper-link" onClick={() => window.open("https://ayush0078.github.io/SRH-Pet-Appointment-App/", "_blank")}>https://ayush0078.github.io/SRH-Pet-Appointment-App/</a>
        <br />
        <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/ayush0078/SRH-Pet-Appointment-App")}>https://github.com/ayush0078/SRH-Pet-Appointment-App</a>
    </>
    )
    
    PopupboxManager.open({content}) 
} 

const popupboxConfigpetAppointment = {
    titleBar: {
        enable: true,
        text: "Pet Appointment Application",
    },
    fadeIn: true,
    fadeInSpeed: 500,
}

//News Letter Sign up
const openPopupboxnewsLetter = () => {
    const content = (
        <>
        <img className="project-image-popupbox" src={newsletter} alt="News Letter" />
        <p>Designed a newsletter Sign Up page. Used MailChimp for accessing user mails.</p>
        <b>Demo:</b> <a className="hyper-link" onClick={() => window.open("https://newsletter-sign-up-app.herokuapp.com/", "_blank")}>https://newsletter-sign-up-app.herokuapp.com/</a>
        <br />
        <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/ayush0078/Newsletter-Signup")}>https://github.com/ayush0078/Newsletter-Signup</a>
    </>
    )
    
    PopupboxManager.open({content}) 
} 

const popupboxConfignewsLetter = {
    titleBar: {
        enable: true,
        text: "NewsLetter Sign Up Page",
    },
    fadeIn: true,
    fadeInSpeed: 500,
}

    return (
        <div className="project-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">Projects</h1>
                <div className="image-box-wrapper row justify-content-center">
                    <div className="project-image-box col-auto" onClick={openPopupboxWpf}>
                        <img className="project-image" src={wpf} alt="wpf drug donation application" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="project-icon" icon={faSearchPlus} />
                    </div>
                    {/*--*/}
                    <div className="project-image-box col-auto" onClick={openPopupboxAutistic}>
                        <img className="project-image" src={autistic} alt="React Native direction Application for Autistic Children" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="project-icon" icon={faSearchPlus} />
                    </div>
                    {/*--*/}
                    <div className="project-image-box col-auto" onClick={openPopupboxpetAppointment}>
                        <img className="project-image" src={petAppointment} alt="React Application for making vetenary appointments" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="project-icon" icon={faSearchPlus} />
                    </div>
                    {/*--*/}
                    <div className="project-image-box col-auto" onClick={openPopupboxnewsLetter}>
                        <img className="project-image" src={newsletter} alt="Newsletter" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="project-icon" icon={faSearchPlus} />
                    </div>
                </div>
            </div>
            <PopupboxContainer {...popupboxConfigWpf} />
            <PopupboxContainer {...popupboxConfigAutistic} />
            <PopupboxContainer {...popupboxConfigpetAppointment} />
            <PopupboxContainer {...popupboxConfignewsLetter} />
        </div>
    )
}

export default Projects
