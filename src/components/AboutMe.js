import React from "react";
import author from "../IMG-6117.jpg";
import cv from "../Aayush_Jain_CV_1.1.pdf";

const AboutMe = () => {
    return (
        <div id="about" className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5">
                        <img className="profile-img" src={author} alt="author..." />
                    </div>
                </div>
                <div className="col-lg-6 col-xm-12">
                    <h1 className="about-heading">about me</h1>
                    <p>Hi. I'm Aayush.</p>
                    <p>I'm a Software Engineer, speacialized in Full Stack Web and Mobile Development. Technologies i use is MERN(MongoDB, Express, ReactJS and NodeJS).</p>
                    <p>Currently, I am pursuing my Master in Applied Computer Science from SRH Hochschule Heidelberg University. I enjoy being challenged and engaging with projects that require me to work outside my comfort and knowledge set.</p>
                    <div className="download-resume">
                        <a href={cv} className="btn-download-cv">Download Resume</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
