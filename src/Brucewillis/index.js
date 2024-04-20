import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap'; // Importing necessary components from react-bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'; // Importing Bootstrap CSS
import Callback from "../callback"; // Importing Callback component
import "./index.css"; // Importing custom CSS for styling

const AppointmentModal = ({ show, onHide }) => {
    return (
        <Modal show={show} onHide={onHide}> {/* Modal component from react-bootstrap */}
            <Modal.Header closeButton>
                <Modal.Title>Book an Appointment</Modal.Title> {/* Title of the modal */}
            </Modal.Header>
            <Modal.Body>
                 <Callback/> {/* Include the Callback component inside the modal body */}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>Close</Button> {/* Close button for the modal */}
            </Modal.Footer>
        </Modal>
    );
};

// Main component for displaying information about Dr. Bruce Willis
const Brucewillis = () => {
    const [showModal, setShowModal] = useState(false); // State to control the visibility of the modal

    const handleModalClose = () => setShowModal(false); // Function to close the modal
    const handleModalShow = () => setShowModal(true); // Function to show the modal

    return (
        <div className="Bruce-container"> {/* Main container for Bruce Willis component */}
            <div className="Bruce-background"> {/* Background container */}
                <div className="info-background"> {/* Container for background information */}
                    <img src="https://imgur.com/tNtxVR9.png" className="main-img" alt="image" /> {/* Main image */}
                    <div className="info-container"> {/* Container for additional information */}
                        <div className="bruce-info"> {/* Container for Bruce Willis's name */}
                            <h1 className="bruce-name">Dr.Bruce Willis</h1> {/* Bruce Willis's name */}
                            <img src="https://imgur.com/jAwCpKY.png" className="correct-icon" alt="img1"/> {/* Correct icon */}
                        </div>
                        <p className="gynacologist">Gynecologist</p> {/* Specialization */}
                        <div className="star-con"> {/* Container for star rating */}
                            <p>4.2</p> 
                            <img src="https://imgur.com/LeTPfXJ.png" alt="img" className="star"/>
                            <img src="https://imgur.com/LeTPfXJ.png" alt="img" className="star"/>
                            <img src="https://imgur.com/LeTPfXJ.png" alt="img" className="star"/>
                            <img src="https://imgur.com/LeTPfXJ.png" alt="img" className="star"/>
                        </div>
                    </div>
                </div>
                <div className="con-follow-post"> {/* Container for followers, following, and posts */}
                    {/* Followers */}
                    <div className="follow-post-con">
                        <h1 className="followers-posts">Followers</h1>
                        <p>850</p>
                    </div>
                    {/* Following */}
                    <div className="follow-post-con"> 
                        <h1 className="followers-posts">Following</h1>
                        <p>18K</p>
                    </div>
                    {/* Posts */}
                    <div className="follow-post-con">
                        <h1 className="followers-posts">Posts</h1>
                        <p>250</p>
                    </div>
                </div>
                {/* Button to book an appointment */}
                <button onClick={handleModalShow} className="book-btn">Book an Appointment</button>
                {/* Appointment modal */}
                <AppointmentModal show={showModal} onHide={handleModalClose} />
            </div>
        </div>
    );
};

export default Brucewillis;
