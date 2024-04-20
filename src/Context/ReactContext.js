import React from 'react';


const doctorsList = [
    {
     id:"21",
     imgUrl:"https://imgur.com/ej3KMd3.png",
     name:"Dr.Prerna Narang",
     expertise:"Female Infertility",
     gender:"Female",
     Experience:"7 years of experience",
     language:[{title:"English"},{title:"Hindi"},{title:"Marathi"}],
     fees:800,
     details:"Dr.Prerna Narang is a top Infertility Doctor in Kondapur. She is the lead fertility specialist at BirthRight with vast expertise and training from reputed institutes in India and UK.She has been vital in setting up the IVF unit at BirthRight, which is highly protocol driven and evidence based.Her areas of special interest are Imaging and IVF.Her area of expertise is in successfully treating patients with previous IVF failures and Diminished Ovarian reserve.She is actively involved in conducting training programmes and workshops for medical and paramedical professionals.Has been invited as speaker for several State and national conferences.She is an extremely pleasant and caring personality, focussed on providing patient centered and ethical care to her patients. She is well recognised in the field of Fertility and regarded as one of the Best Infertility Specialist in Kondapur."},
    {
     id:"22",
     imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4PcK8gNzjGD-e7nwGMHM0JeimB7YVP4RBDA",
     name:"Dr.Aravind Reddy",
     expertise:"Skin Care",
     gender:"Male",
     Experience:"10 years of experience",
     language:[{title:"English"},{title:"Hindi"}],
     fees:400,
     details:"Dr.Aravind Reddy is a veteran in the field of dermatology with more than 36 years of experience. He did his MBBS and MD in dermatology before completing his FDS in France and his DTMH and DV in the UK. He is a French dermatologist with a license.He participates actively in ADV&L, the British Association of Dermatology, and the International Society of Hair Restoration Surgery. He is known for founding the Association of Hair Restoration Surgery in India.Dr.Aravind Reddy areas of expertise include dermato-cosmetology, platelet rich plasma therapy, micropigmentation, skin grafting, and melanocyte transplantation for the treatment of vitiligo, hair management, allergy management, and allergy immunotherapy."
    },
    {
     id:"23",
     imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnlxEwcqah5SEpo2-9y4hon_t9Ma5bfiQh1A",
     name:"Dr. Brahmananda Reddy",
     expertise:"Hair Care",
     gender:"Female",
     Experience:"9 years of experience",
     language:[{title:"English"}],
     fees:600,
     details:"Dr. Brahmananda Reddy is a chief surgeon & director of the clinic is a renowned and reputed hair transplant of international class with practical, genuine and vast experience in this field of hair transplantation, cosmetic surgery, and dermatology. He is known to be associated with the International Society of Hair Transplantation. He got trained internationally from the masters of different parts of the world. Dr. Brahmananda Reddy practices at Vernon Skin and Hair Clinic in Manikonda, Hyderabad and Vernon Advanced Hair Transplant Clinic in Gachibowli, Hyderabad, has done Diploma in Dermatology from the United Kingdom and Fellowship in Aesthetic Medicine from Ilamed, Affiliated University of Greifswald, Germany, in 2012. He is also a asso Member of International Society of Hair Restoration (ISHRS). He is a member of the Asian Association for Hair Restoration and Surgeons (AAHRS). Attended several international conferences in different parts of the world. awardes as a most promising hair transplant surgeon in Hyderabad by merit awards 2017."
    },
    {
     id:"24",
     imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC13MZz7bE3fMSS0BBE6olfhI_bV14_VDTww",
     name:"Dr Santosh Modani",
     expertise:"Heart Issues",
     gender:"Male",
     Experience:"15 years of experience",
     language:[{title:"English"},{title:"Hindi"}],
     fees:750,
     details:"Dr Santosh Modani is an eminent cardiologists practising at Dr santosh cardiac care and Ekshila maxcare hispital. He is pinour of coronary angioplasty in the tricity of Warangal. He has gain specialisation in angiography ,angioplasty , cardiac pacemaker implantation He is old medalist in cardiology and winner or prestigious TYSA scholarship in both medicine and cardiology. He has been awarded Vaidya Ratna award in 2017. Govt of Telangana had regonized his work and feliciiated him in 2022 on Doctors day. Service provided by us are Cardiac consultation, TMT test, stress test, ECHO, 4D ECHO ( for the fast time in Warangal),angiography, angioplasty, pacemaker, Holter examination, 24 hrs ambulatory monitoring, lab services and pharmacy."
    },
    {
     id:"25",
     imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV-C4Ez5IthVZcHcktQoBSMjV7qAX-pF6jkw",
     name:"Dr.Rahul Reddy",
     expertise:"Skin Care",
     gender:"Male",
     Experience:"14 years of experience",
     language:[{title:"English"},{title:"Hindi"},{title:"Marathi"}],
     fees:750,
     details:"Dr.Rahul Reddy is a veteran in the field of dermatology with more than 36 years of experience. He did his MBBS and MD in dermatology before completing his FDS in France and his DTMH and DV in the UK. He is a French dermatologist with a license.He participates actively in ADV&L, the British Association of Dermatology, and the International Society of Hair Restoration Surgery. He is known for founding the Association of Hair Restoration Surgery in India.Dr.Rahul Reddy areas of expertise include dermato-cosmetology, platelet rich plasma therapy, micropigmentation, skin grafting, and melanocyte transplantation for the treatment of vitiligo, hair management, allergy management, and allergy immunotherapy."
    },
    {
     id:"26",
     imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDb86PfHL0s-1hSFtkVegNDC0MRAKrZxIUcA",
     name:"Dr.Sushritha Rao",
     expertise:"Female Infertility",
     gender:"Female",
     Experience:"12 years of experience",
     language:[{title:"English"},{title:"Hindi"}],
     fees:750,
     details:"Dr.Sushritha Rao is a top Infertility Doctor in Kondapur. She is the lead fertility specialist at BirthRight with vast expertise and training from reputed institutes in India and UK.She has been vital in setting up the IVF unit at BirthRight, which is highly protocol driven and evidence based.Her areas of special interest are Imaging and IVF.Her area of expertise is in successfully treating patients with previous IVF failures and Diminished Ovarian reserve.She is actively involved in conducting training programmes and workshops for medical and paramedical professionals.Has been invited as speaker for several State and national conferences.She is an extremely pleasant and caring personality, focussed on providing patient centered and ethical care to her patients. She is well recognised in the field of Fertility and regarded as one of the Best Infertility Specialist in Kondapur."
    }
];
// Create a context with default values
const ReactContext = React.createContext({
    location:"", // Default location
    search:"", // Default search term
    expertise:"", // Default expertise
    gender:"", // Default gender
    fees:"", // Default fees
    language:"", // Default language
    doctorslist:doctorsList, // Default list of doctors
    onchangeLocation: () => {}, // Default function for handling location change
    onchangeSearch:() => {}, // Default function for handling search input change
    onchangeExpertise:() => {}, // Default function for handling expertise change
    onchangeGender:()=> {}, // Default function for handling gender change
    onchangeFees:() => {}, // Default function for handling fees change
    onchangeLanguage:() => {} // Default function for handling language change
});

export default ReactContext; // Export the CoursesContext