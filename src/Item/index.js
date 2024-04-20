import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCapsules, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import "./index.css";
const Item = (props) => {
    const { item } = props;
    const { imgUrl, name, expertise, gender, Experience, language, fees, details } = item;

    // State to manage modal visibility
    const [showModal, setShowModal] = useState(false);

    // Function to handle opening the modal
    const handleOpenModal = () => {
        setShowModal(true);
    };

    // Function to handle closing the modal
    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <li className="profile-con">
            <img src={imgUrl} className="doctor-img" alt="img" />
            <h1 className="profile-head">{name}</h1>
            <div className="info-doctor">
            <div className="profile-language">
            <FontAwesomeIcon icon={faCapsules} className="profile-icons" /> 
            <p className="profile-para">{expertise}</p>
            </div>
            <div className="profile-language">
            <FontAwesomeIcon icon={faGraduationCap} className="profile-icons"/> 
            <p className="profile-para">{Experience}</p>
            </div>
            <p className="profile-para">{gender}</p>
            <div className="profile-language">
                <p className="profile-para">Speaks:</p>
                <ul className="profile-unorder">
                {language.map((each, index) => (
                    <li className="profile-para" key={index}>{each.title}</li>
                ))}
            </ul>
            </div>
            <p className="profile-para mt-4">Fees: Rs {fees}</p>
            <button onClick={handleOpenModal} className="view-btn">View Profile</button><br/>
             <button className="consult-btn">Book a Consultation</button>
             </div>
            {/* React-Bootstrap Modal */}
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>{name}'s Profile</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* Add profile details here */}
                    <p>{details}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </li>
    );
};

export default Item;
