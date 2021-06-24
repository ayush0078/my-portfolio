import React from "react"

const Experience = () => {
    return (
        <div className="experience">
            <div className="d-flex justify-content-center my-5">
                <h1>Experience</h1>
            </div>
            <div className="container experience-wrapper">
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h4 className="content-heading">March 2020 - July 2020</h4>
                        <h4><span className="experience-heading">Freelancer - </span> Website Development, India</h4>
                        <ul>
                            <li>Designed front-end using React.js for a rainwater harvesting firm.</li>
                            <li>Assessed client requirements and desires and fulfilled them.</li>
                        </ul>
                    </div>
                </div>
                {/* - */}
                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h4 className="content-heading">2019-2021</h4>
                        <h4><span className="experience-heading">Master of Science - </span> SRH Hochschule Heidelberg</h4>
                        <p>- Applied Computer Science</p>
                        <p><span className="experience-heading">Subjects Learned - </span> Research Project on React Native, Software Architecture and Development, Advanced Databases, SAP ABAP, Advanced Computer Science, International Project Management</p>
                    </div>
                </div>
                {/* - */}
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h4 className="content-heading">2015-2019</h4>
                        <h4><span className="experience-heading">Bachelor of Engineering - </span> Gyan Ganga Institiute of Technology and Science.(RGPV, Bhopal, India)</h4>
                        <p>- Computer Science and Engineering</p>
                        <p><span className="experience-heading">Subjects Learned - </span> Data Structures, Analysis & Design of Algorithm, Database Management System, Computer Networking, Compiler Design, Web Engineering, Data Science & Big Data, Cloud Computing</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience
