import React from "react";
import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    RedditShareButton,
    RedditIcon,
    LinkedinShareButton,
    LinkedinIcon
} from "react-share";

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="d-flex">
                            <p>Jean-Becker-Str. 11, 68169, Mannheim</p>
                        </div>
                        <div className="d-flex">
                            <a href="tel:+49 17687515629">(+49) 17687515629</a>
                        </div>
                        <div className="d-flex">
                            <p>aayushJain@gmx.de</p>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-6">
                        <div className="row">
                            <div className="footer-nav-home-to-experience col">
                                <a className="footer-nav">Home</a>
                                <br />
                                <a className="footer-nav">About</a>
                                <br />
                                <a className="footer-nav">Experience</a>
                            </div>
                            <div className="footer-nav-projects-to-contact col">
                                <a className="footer-nav">Projects</a>
                                <br />
                                <a className="footer-nav">Contact</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
                        <div className="footer-icons d-flex justify-content-center">
                            <FacebookShareButton url={""} quote="Fullstack Developer" hashtag="#javascript">
                                <FacebookIcon className="mx-3" size={36} />
                            </FacebookShareButton>
                            <TwitterShareButton url={""} quote="Fullstack Developer" hashtag="#javascript">
                                <TwitterIcon className="mx-3" size={36} />
                            </TwitterShareButton>
                            <RedditShareButton url={""} quote="Fullstack Developer" hashtag="#javascript">
                                <RedditIcon className="mx-3" size={36} />
                            </RedditShareButton>
                            <LinkedinShareButton url={""} quote="Fullstack Developer" hashtag="#javascript">
                                <LinkedinIcon className="mx-3" size={36} />
                            </LinkedinShareButton>
                        </div>
                        <p className="footer-copyright pt-3 text-center">
                            Copyright&copy;
                            {new Date().getFullYear()}&nbsp;Aayush Jain | All Rights Reserved
                        </p>
                    </div>  
                </div>
            </div>
        </div>
    )
}

export default Footer;
