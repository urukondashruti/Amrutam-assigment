import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRupeeSign } from '@fortawesome/free-solid-svg-icons';
import Slider from 'react-slick';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./index.css";

const sessionList = [
    {
        id: "clinic",
        title: "In-Clinic",
        time: "45 Mins"
    },
    {
        id: "video",
        title: "Video",
        time: "45 Mins"
    },
    {
        id: "chat",
        title: "Chat",
        time: "10 Mins"
    }
];

const slotList = [
    {
        id: "25",
        title: "Mon, 25 August",
        slots: "10"
    },
    {
        id: "26",
        title: "Tue, 26 August",
        slots: "03"
    },
    {
        id: "27",
        title: "Wed, 27 August",
        slots: "06"
    },
    {
        id: "28",
        title: "Thurs, 28 August",
        slots: "08"
    },
    {
        id: "29",
        title: "Fri, 29 August",
        slots: "04"
    }
];

const morningTimeList = [
   {
    id:"1",
    time:"09:00 AM"
   },
   {
    id:"2",
    time:"09:30 AM"
   },
   {
    id:"4",
    time:"10:15 AM"
   },
   {
    id:"5",
    time:"10:45 AM"
   },
   {
    id:"6",
    time:"11:00 AM"
   }
];

const EveningTimeList = [
    {
     id:"7",
     time:"04:00 PM"
    },
    {
     id:"8",
     time:"04:15 PM"
    },
    {
     id:"9",
     time:"04:30 PM"
    },
    {
     id:"10",
     time:"04:45 PM"
    },
    {
     id:"11",
     time:"5:00 PM"
    }
];
const Appointment = () => {
    // State variables
    const [activeSession, setActiveSession] = useState("video");
    const [activeSlot, setActiveSlot] = useState("25");
    const [activeTime, setActiveTime] = useState("6");
    const [showModal, setShowModal] = useState(false);

    // Event handlers for session, slot, and time selection
    const handleSessionClick = (id) => {
        setActiveSession(id);
    };

    const handleSlotClick = (id) => {
        setActiveSlot(id);
    };

    const handleTimeClick = (id) => {
        setActiveTime(id);
    };

    // Settings for the slick slider
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };

    // Function to handle appointment booking
    const handleAppointment = () => {
        setShowModal(true);
    };

    // Function to close the modal
    const handleCloseModal = () => {
        setShowModal(false);
    };

    // Filter active slot value
    const activeSlotValue = slotList.filter(each => (
        each.id === activeSlot
    ));

    // Filter active time value for morning and evening
    const activeTimeValue1 = morningTimeList.filter(each => (
        each.id === activeTime
    ));

    const activeTimeValue2 = EveningTimeList.filter(each => (
        each.id === activeTime
    ));

    let activeTimeValue=[];

    if (activeTimeValue1.length !== 0){
        activeTimeValue=  activeTimeValue1;
    }
    if (activeTimeValue2.length !== 0){
        activeTimeValue= activeTimeValue2;
    }

    // Render the component
    return (
        <div className="appointment-container1">
            {/* Appointment fee section */}
            <div className="appoint-fee-con">
                <h1 className="appoint-head">Appointment Fee</h1>
                <div className="rupee-con">
                    <FontAwesomeIcon icon={faRupeeSign} className="rupee-size"/>
                    <p className="appoint-para">699.00</p>
                </div>
            </div>
            {/* Session selection section */}
            <div className="session-horizontal">
                <p className="session-para">Select Your mode of session</p>
                <hr className="horizontal-line" />
            </div>
            {/* List of session options */}
            <ul className="session-orderlist">
                {sessionList.map((each) => {
                    return (
                        <li key={each.id} className={each.id === activeSession ? 'session-active' : 'session-inactive'} onClick={() => handleSessionClick(each.id)}>
                            <div className="session-title-con">
                                <h1 className="session-title">{each.title}</h1>
                                <img src="https://imgur.com/nBmXv6p.png" className="correct-icon" alt="img" style={{ display: each.id === activeSession ? 'block' : 'none' }} />
                            </div>
                            <p>{each.time}</p>
                        </li>
                    );
                })}
            </ul>
            {/* Time slot selection section */}
            <div>
                <div className="slot-date-con">
                    <p className="slot-head">Pick a time slot</p>
                    <hr className="horizontal-slot"/>
                    <img src="https://imgur.com/XFyYKig.png" className="date-icon" alt="img"/>
                </div>
                {/* Slider for displaying slots */}
                <Slider {...sliderSettings} className="slider">
                    {slotList.map((each) => (
                        <div key={each.id} className={each.id === activeSlot ? 'slot-active' : 'slot-inactive'} onClick={() => handleSlotClick(each.id)}>
                            <h1 className="slot-head1">{each.title}</h1>
                            <p className="slot-head1">{each.slots} slots</p>
                        </div>
                    ))}
                </Slider>
            </div>
            {/* Morning time selection */}
            <div>
                <h1 className="time-head">Morning</h1>
                <ul className="time-list">
                    {morningTimeList.map(each => {
                        return (
                            <li key={each.id} className={each.id === activeTime ? 'active-time' : 'inactive-time'} onClick={() => handleTimeClick(each.id)}>
                                <p>{each.time}</p>
                            </li>
                        )
                    })}
                </ul>
            </div>
            {/* Evening time selection */}
            <div>
                <h1 className="time-head">Evening</h1>
                <ul className="time-list">
                    {EveningTimeList.map(each => {
                        return (
                            <li key={each.id} className={each.id === activeTime ? 'active-time' : 'inactive-time'} onClick={() => handleTimeClick(each.id)}>
                                <p>{each.time}</p>
                            </li>
                        )
                    })}
                </ul>
            </div>
            {/* Button to make an appointment */}
            <button onClick={handleAppointment} className="appointment-button">Make An Appointment</button>
            {/* Modal for appointment confirmation */}
            <Modal show={showModal} onHide={handleCloseModal} className="custom-modal">
                <Modal.Header closeButton>
                    <Modal.Title>Appointment Confirmation</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h1 style={{color:"green"}}> Your appointment is successful!</h1>
                    Session: {activeSession}<br />
                    Slot: {activeSlotValue[0].title}<br />
                    Time: {activeTimeValue[0].time}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Appointment;