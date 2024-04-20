import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons';
import Appointment from "../Appointment"; // Importing the Appointment component
import "./index.css"; // Importing custom CSS for styling

const Details = () => {
    // State variables for managing component behavior
    const [isFollowed, setIsFollowed] = useState(false);
    const [showPara2, setShowPara2] = useState(false);
    const [showMorePara, setShowMorePara] = useState(false);

    // Function to toggle the follow status
    const toggleFollow = () => {
        setIsFollowed(!isFollowed);
    };

    // Function to toggle the visibility of the second paragraph
    const togglePara2 = () => {
        setShowPara2(!showPara2);
    };

    // Function to toggle the visibility of additional paragraphs
    const toggleMorePara = () => {
        setShowMorePara(!showMorePara);
    };

    return (
        <div className="containers"> {/* Main container */}
            <div>
                <div className="container10"> {/* Container for the 'About' section */}
                    <div className="background1"> {/* Background for the 'About' section */}
                        <h1 className="about-head">A Little About me </h1> {/* Title */}
                        {/* Button for follow functionality */}
                        <button className={isFollowed ? "follow-btn following" : "follow-btn"}  onClick={toggleFollow}>
                            {isFollowed ? 'Following' : 'Follow +'}
                        </button>
                    </div>
                    <div className="about-background"> {/* Background for the 'About' content */}
                        {/* First paragraph */}
                        <p className="about-para">Dr. Bruce Willis is esteemed in obstetrics and gynecology, acclaimed for her proficiency in managing high-risk pregnancies and fertility treatments. Dr. Bruce Willis specializes in reproductive medicine and infertility treatment. Her area of expertise is IVF and </p>
                        {/* Conditional rendering for the second paragraph */}
                        {showPara2 && (
                            <p className="about-para">Dr. Bruce Willis is esteemed in obstetrics and gynecology, acclaimed for her proficiency in managing high-risk pregnancies and fertility treatments. Dr. Bruce Willis specializes in reproductive medicine and infertility treatment. Her area of expertise is IVF and infertility treatment in both males and females. She is well-known for her adaptability and patient-centered approach. She also does hysteroscopic and laparoscopic surgery. Dr. Bruce Willis has the highest degree in Reproductive Endocrinology available in India, allowing her to successfully treat even the most difficult cases</p>
                        )}
                        <div className="horizintal-con"> {/* Container for the horizontal line and 'Read More' button */}
                            <hr className="horizintal-line"/> {/* Horizontal line */}
                            {/* Button to toggle the visibility of the second paragraph */}
                            <button className="read-btn" onClick={togglePara2}>
                                {showPara2 ? "Read Less" : "Read More"}
                            </button>
                        </div>
                        <div className="language-con"> {/* Container for spoken languages */}
                            <h1 className="head-language">Language Spoken</h1> {/* Title */}
                            {/* List of spoken languages */}
                            <p className="para-language">English</p>
                            <p className="para-language">Hindi</p>
                            <p className="para-language">Telugu</p>
                        </div>
                        <div>
                            {/* Social media icons */}
                            <a className="icon-container" href="https://www.facebook.com">
                                <FontAwesomeIcon icon={faFacebookF} />
                            </a>
                            <a className="icon-container" href="https://www.instagram.com">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                            <a className="icon-container" href="https://www.youtube.com">
                                <FontAwesomeIcon icon={faYoutube} />
                            </a>
                            <a className="icon-container" href="https://www.twitter.com">
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="container10"> {/* Container for the 'I Specialize In' section */}
                    <div className="background1"> {/* Background for the 'I Specialize In' section */}
                        <h1 className="top-head">I Specialize In</h1> {/* Title */}
                    </div>
                    <div className="specialize-con"> {/* Container for specialized areas */}
                        {/* Each specialized area */}
                        <div className="image-container">
                            <img src="https://imgur.com/rShYCf7.png" className="img-specialize" alt="img"/>
                            <p className="specialize-para">Women's Health</p>
                        </div>
                        <div  className="image-container"> 
                            <img src="https://imgur.com/5alQDJh.png" className="img-specialize" alt="img"/>
                            <p className="specialize-para">Skin Care</p>
                        </div>
                        <div  className="image-container">
                            <img src="https://imgur.com/A0R0AP3.png" className="img-specialize" alt="img"/>
                            <p className="specialize-para">Immunity</p>
                        </div>
                        <div  className="image-container">
                            <img src="https://imgur.com/Xn2ZuXF.png" className="img-specialize" alt="img"/>
                            <p className="specialize-para">Hair Care</p>
                        </div>
                    </div>
                </div>
                <div className="container10"> {/* Container for the 'The Concerns I Treat' section */}
                    <div className="background1"> {/* Background for the 'The Concerns I Treat' section */}
                        <h1 className="top-head">The Concerns I Treat</h1> {/* Title */}
                    </div>
                    {/* Conditional rendering for concerns */}
                    {!showMorePara && (
                        <div className="concers-wrap">
                            {/* List of concerns */}
                            <p className="concerns-para">Skin Treatment</p>
                            <p className="concerns-para">Pregnancy</p>
                            <p className="concerns-para">Peroid Doubts</p>
                            <p className="concerns-para">Endometriosis</p>
                            <p className="concerns-para">Pelvic Pain</p>
                            <p className="concerns-para">Ovarian Cysts</p>
                        </div>
                    )} 
                    {showMorePara && (
                        <div className="concers-wrap">
                            {/* Additional concerns */}
                            <p className="concerns-para">Heart issues</p>
                            <p className="concerns-para">Hair care</p>
                            <p className="concerns-para">Bones pain</p>
                            <p className="concerns-para">Brain issues</p>
                            <p className="concerns-para">Eye Care</p>
                            {/* Original list of concerns */}
                            <p className="concerns-para">Skin Treatment</p>
                            <p className="concerns-para">Pregnancy</p>
                            <p className="concerns-para">Peroid Doubts</p>
                            <p className="concerns-para">Endometriosis</p>
                            <p className="concerns-para">Pelvic Pain</p>
                            <p className="concerns-para">Ovarian Cysts</p>
                        </div>
                    )}
                    {/* Button to toggle visibility of additional concerns */}
                    <button className="show-btn" onClick={toggleMorePara}>
                        {showMorePara ? <p className="show-para">Show Less</p> : <p className="show-para">+ 5 More</p>}
                    </button>
                </div>
                <div className="container10"> {/* Container for the 'My Work Experience' section */}
                    <div className="background1"> {/* Background for the 'My Work Experience' section */}
                        <h1 className="work-head">My Work Experience</h1> {/* Title */}
                    </div>
                    <div> {/* Container for work experience details */}
                        <h1 className="work-head2">I HAVE BEEN IN PRACTICE FOR:7+ YEARS </h1> {/* Subtitle */}
                    </div>
                    <hr className="horizontal-line"/> {/* Horizontal line */}
                    <div> {/* Container for individual work experiences */}
                        <div className="work-container">
                            <div className="medical-con"> {/* Container for medical institution details */}
                                <div className="symbol-con">
                                    <img src="https://imgur.com/CEaTRIA.png" alt="img"/> {/* Medical institution logo */}
                                </div>
                                <div>
                                    <h1 className="medical-head">Midtown Medical Clinic</h1> {/* Medical institution name */}
                                    <p className="medical-para">Senior doctor</p> {/* Position */}
                                </div>
                            </div>
                            <div>
                                <p className="date-para">2016-PRESENT</p> {/* Duration */}
                            </div>
                        </div>
                        <div  className="work-container">
                            <div className="medical-con"> {/* Container for medical institution details */}
                                <div className="symbol-con">
                                    <img src="https://imgur.com/CEaTRIA.png" alt="img"/> {/* Medical institution logo */}
                                </div>
                                <div>
                                    <h1 className="medical-head">Midtown Medical Clinic</h1> {/* Medical institution name */}
                                    <p className="medical-para">Senior doctor</p> {/* Position */}
                                </div>
                            </div>
                            <div>
                                <p className="date-para">2010-2015</p> {/* Duration */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container10"> {/* Container for the 'Featured Reviews' section */}
                    <div  className="background1"> {/* Background for the 'Featured Reviews' section */}
                        <h1 className="featured-head">Featured Reviews(102)</h1> {/* Title */}
                    </div> 
                    <div className="feature-container"> {/* Container for featured reviews */}
                        {/* Featured review */}
                        <div className="featured-con">
                            <div className="Hightower-con">
                                <img src="https://imgur.com/J0CFfgp.png" className="ali-img" alt="img"/> {/* Reviewer's image */}
                                <div>
                                    <h1 className="Hightower-head" >Alicent Hightower</h1> {/* Reviewer's name */}
                                    <p className="Hightower-para">Consulted for Skin Care</p> {/* Reviewer's concern */}
                                </div>
                            </div>
                            <div>
                                <p className="date-para">20 January 2023</p> {/* Review date */}
                            </div>
                        </div>
                        <div> {/* Review content */}
                            <div>
                                <img src="https://imgur.com/LeTPfXJ.png" alt="img"/> {/* Stars or rating */}
                                {/* Review text */}
                                <div className="Hightower-para2">
                                    Might be bit early to confirm but yes I can see noticeable difference in my hairfall. will write again after using it for longer periods.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div  className="feature-container"> {/* Container for featured reviews */}
                        {/* Featured review */}
                        <div className="featured-con">
                            <div className="Hightower-con">
                                <img src="https://imgur.com/J0CFfgp.png" className="ali-img" alt="img"/> {/* Reviewer's image */}
                                <div>
                                    <h1 className="Hightower-head">Alicent Hightower</h1> {/* Reviewer's name */}
                                    <p  className="Hightower-para">Consulted for Skin Care</p> {/* Reviewer's concern */}
                                </div>
                            </div>
                            <div>
                                <p className="date-para">20 January 2023</p> {/* Review date */}
                            </div>
                        </div>
                        <div> {/* Review content */}
                            <div>
                                <img src="https://imgur.com/LeTPfXJ.png" alt="img"/> {/* Stars or rating */}
                                {/* Review text */}
                                <div  className="Hightower-para2">
                                    Might be bit early to confirm but yes I can see noticeable difference in my hairfall. will write again after using it for longer periods.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Appointment component */}
            <Appointment/>
        </div>
    )
}

export default Details;
