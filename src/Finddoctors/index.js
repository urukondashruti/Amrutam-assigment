import Header from "../Header"; // Importing the Header component
import ReactContext from "../Context/ReactContext"; // Importing React context
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Importing FontAwesomeIcon component
import { faTimes } from '@fortawesome/free-solid-svg-icons'; // Importing FontAwesome icon
import Item from "../Item"; // Importing the Item component
import "./index.css"; // Importing custom CSS for styling

// Array of available locations
const Location = [
    {
        id: "mumbai",
        title: "Mumbai"
    },
    {
        id: "hyderabad",
        title: "Hyderabad"
    },
    {
        id: "surat",
        title: "Surat"
    },
    {
        id: "banglore",
        title: "Banglore"
    },
    {
        id: "chennai",
        title: "Chennai"
    }
];

// Array of available expertise options
const expertiseOptions = [
    {
        id: "hair care",
        title: "Hair Care"
    },
    {
        id: "skin care",
        title: "Skin Care"
    },
    {
        id: "female infertility",
        title: "Female Infertility"
    },
    {
        id: "heart issues",
        title: "Heart Issues"
    }
];

// Array of available gender options
const genderList = [
    {
        id: "male",
        title: "Male"
    },
    {
        id: "female",
        title: "Female"
    }
];

// Array of available fees options
const feesList = [
    {
        id: "500",
        title: "Rs.0-Rs.500"
    },
    {
        id: "1000",
        title: "Rs.0-Rs.1000"
    }
];

// Array of available language options
const LanguageList = [
    {
        id: "hindi",
        title: "Hindi"
    },
    {
        id: "english",
        title: "English"
    },
    {
        id: "marathi",
        title: "Marathi"
    }
];

const Finddoctors = () => {
    return (
        <ReactContext.Consumer>
            {value => {
                // Destructuring context values and functions
                const { location, search, expertise, gender, fees, language, doctorslist, onchangeLanguage, onchangeExpertise, onchangeLocation, onchangeSearch, onchangeGender, onchangeFees } = value;

                // Filter doctors list based on selected filters
                const filteredDoctors = doctorslist.filter(doctor => {
                    // Filter by search value (doctor's name)
                    if (search && !doctor.name.toLowerCase().includes(search.toLowerCase())) return false;
                    // Filter by expertise
                    if (expertise && !doctor.expertise.toLowerCase().includes(expertise.toLowerCase())) return false;
                    // Filter by gender
                    if (gender && !doctor.gender.toLowerCase().includes(gender.toLowerCase())) return false;
                    // Filter by fees
                    if (fees && doctor.fees > parseInt(fees)) return false;
                    // Filter by language
                    if (language && !doctor.language.find(lang => lang.title.toLowerCase() === language.toLowerCase())) return false;
                    return true;
                });

                // Event handlers for filter changes
                const changeLocation = event => {
                    onchangeLocation(event.target.value);
                };
                const changeSearch = event => {
                    onchangeSearch(event.target.value);
                };
                const changeExpertise = event => {
                    onchangeExpertise(event.target.value);
                };
                const changeGender = (event) => {
                    onchangeGender(event.target.value);
                };
                const changeFees = (event) => {
                    onchangeFees(event.target.value);
                };
                const changeLanguage = (event) => {
                    onchangeLanguage(event.target.value);
                };

                // Functions to clear individual filters
                const setExpertise = () => {
                    onchangeExpertise("");
                }
                const setGender = () => {
                    onchangeGender("");
                }
                const setFees = () => {
                    onchangeFees("");
                }
                const setLanguage = () => {
                    onchangeLanguage("");
                }

                return (
                    <div>
                        <Header /> {/* Render the Header component */}
                        <div className="doctors-container-width">
                            <div className="background-color">
                                <h1 className="expert-head">Find Expert Doctors For An In-Clinic Session Here</h1>
                                <div>
                                    {/* Dropdown for selecting location */}
                                    <select className="select-option" value={location} onChange={changeLocation}>
                                        <option value=""> <div>Select Location</div></option>
                                        {Location.map((each) => (
                                            <option key={each.id} value={each.title}>
                                                {each.title}
                                            </option>
                                        ))}
                                    </select>
                                    {/* Search input for doctor's name */}
                                    <input className="input-search" type="search" placeholder="eg. doctor name" value={search} onChange={changeSearch} />
                                </div>
                            </div>
                            <div className="select-containers">
                                {/* Dropdowns for expertise, gender, fees, and language */}
                                <div>
                                    <select className="select-options" value={expertise} onChange={changeExpertise}>
                                        <option value="">Expertise</option>
                                        {expertiseOptions.map((each) => (
                                            <option key={each.id} value={each.title}>
                                                {each.title}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <select className="select-options" value={gender} onChange={changeGender}>
                                        <option value="">Gender</option>
                                        {genderList.map((each) => (
                                            <option key={each.id} value={each.title}>
                                                {each.title}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <select className="select-options" value={fees} onChange={changeFees}>
                                        <option value="">Fees</option>
                                        {feesList.map((each) => (
                                            <option key={each.id} value={each.id}>
                                                {each.title}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <select className="select-options" value={language} onChange={changeLanguage}>
                                        <option value="">Language</option>
                                        {LanguageList.map((each) => (
                                            <option key={each.id} value={each.title}>
                                                {each.title}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <hr/> {/* Horizontal line */}
                            <div className="filter-container">
                                {/* Render selected filters with cross icons for clearing */}
                                {expertise && <div className="filter-selected"><p>{expertise}</p> <FontAwesomeIcon className="cross-icons" icon={faTimes} onClick={setExpertise} /></div>}
                                {gender && <div className="filter-selected"><p>{gender}</p> <FontAwesomeIcon className="cross-icons" icon={faTimes} onClick={setGender} /></div>}
                                {fees && <div className="filter-selected"><p>{fees}</p> <FontAwesomeIcon className="cross-icons" icon={faTimes} onClick={setFees} /></div>}
                                {language && <div className="filter-selected"><p>{language}</p> <FontAwesomeIcon icon={faTimes} className="cross-icons" onClick={setLanguage} /></div>}
                            </div>
                        </div>
                        {/* Render the list of filtered doctors */}
                        {filteredDoctors.length === 0 ? <div className="no-container"><h1>NO DOCTORS FOUND</h1></div> :
                            <ul className="find-doctors-list">
                                {filteredDoctors.map(each => (
                                    <Item key={each.id} item={each} />
                                ))}
                            </ul>
                        }
                    </div>
                );
            }}
        </ReactContext.Consumer>
    );
}

export default Finddoctors;
