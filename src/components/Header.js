import React from "react";
import Typed from "react-typed";

const Header = () => {
    return (
        <div className="header-wraper">
            <div className="main-info">
                <canvas></canvas>
                <h1>Aayush Jain</h1>
                <Typed 
                    className="typed-text"
                    strings={["Web Design", "Web Development", "React Native Applications", "WPF Applications"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <a href="#" className="btn-contact-me">Contact Me</a>
            </div>
        </div>
    )
}

export default Header
