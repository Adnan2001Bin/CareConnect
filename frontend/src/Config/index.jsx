import { assets } from "@/assets/assets_frontend/assets";
import { LockKeyhole, Mail, UserPen } from "lucide-react";

export const registerFormControls = [
  {
    name: "userName",
    label: "User Name",
    placeholder: "Enter your user name",
    componentType: "input",
    type: "text",
    logo: <UserPen />,
  },
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
    logo: <Mail />,
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
    logo: <LockKeyhole />,
  },
];

export const loginFormControls = [
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
    logo: <Mail />,
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
    logo: <LockKeyhole />,
  },
];

export const addFormElements = [
  {
    label: "Doctor Name",
    name: "name",
    componentType: "input",
    type: "text",
    placeholder: "Name",
  },
  {
    label: "Doctor Email",
    name: "email",
    componentType: "input",
    type: "text",
    placeholder: "Email",
  },
  {
    label: "About Doctor",
    name: "aboutDoctor",
    componentType: "textarea",
    placeholder: "Write About Doctor",
  },
  {
    label: "Set Password",
    name: "password",
    componentType: "input",
    type: "text",
    placeholder: "Password",
  },
  {
    label: "Experience",
    name: "experience",
    componentType: "select",
    options: [
      { id: "1", label: "1 Year" },
      { id: "2", label: "2 Years" },
      { id: "3", label: "3 Years" },
      { id: "4", label: "4 Years" },
      { id: "5", label: "5 Years" },
      { id: "6", label: "6 Years" },
      { id: "7", label: "7 Years" },
      { id: "8", label: "8 Years" },
      { id: "9", label: "9 Years" },
      { id: "10", label: "10 Years" },
      { id: "11", label: "More than 10 Years" },
    ],
  },

  {
    label: "Speciality",
    name: "speciality",
    componentType: "select",
    options: [
      { id: "General_physician", label: "General physician" },
      { id: "Gynecologist", label: "Gynecologist" },
      { id: "Dermatologist", label: "Dermatologist" },
      { id: "Pediatricians", label: "Pediatricians" },
      { id: "Neurologist", label: "Neurologist" },
      { id: "Gastroenterologist", label: "Gastroenterologist" },
    ],
  },

  {
    label: "Fees",
    name: "fees",
    componentType: "input",
    type: "number",
    placeholder: "Fees",
  },

  {
    label: "Degree",
    name: "degree",
    componentType: "input",
    type: "text",
    placeholder: "Degree",
  },
];

export const userViewNavItems = [
  {
    id: "home",
    label: "Home",
    path: "/",
  },

  {
    id: "doctorslist",
    label: "Doctors",
    path: "/doctorslist",
  },

  {
    id: "about",
    label: "ABOUT",
    path: "/about",
  },
  {
    id: "contact",
    label: "CONTACT",
    path: "/contact",
  },
];

export const specialityData = [
  {
    id: "General_physician",
    speciality: "General_physician",
    image: assets.General_physician,
  },
  {
    id: "Gynecologist",
    speciality: "Gynecologist",
    image: assets.Gynecologist,
  },
  {
    id: "Dermatologist",
    speciality: "Dermatologist",
    image: assets.Dermatologist,
  },
  {
    id: "Pediatricians",
    speciality: "Pediatricians",
    image: assets.Pediatricians,
  },
  {
    id: "Neurologist",
    speciality: "Neurologist",
    image: assets.Neurologist,
  },
  {
    id: "Gastroenterologist",
    speciality: "Gastroenterologist",
    image: assets.Gastroenterologist,
  },
];

export const doctors = [
  {
    _id: "doc1",
    name: "Dr. Richard James",
    image: assets.doc1,
    speciality: "General physician",
    degree: "MBBS",
    experience: "4 Years",
    about:
      "Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
    fees: 50,
    address: {
      line1: "17th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
  {
    _id: "doc2",
    name: "Dr. Emily Larson",
    image: assets.doc2,
    speciality: "Gynecologist",
    degree: "MBBS",
    experience: "3 Years",
    about:
      "Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
    fees: 60,
    address: {
      line1: "27th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
  {
    _id: "doc3",
    name: "Dr. Sarah Patel",
    image: assets.doc3,
    speciality: "Dermatologist",
    degree: "MBBS",
    experience: "1 Years",
    about:
      "Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
    fees: 30,
    address: {
      line1: "37th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
  {
    _id: "doc4",
    name: "Dr. Christopher Lee",
    image: assets.doc4,
    speciality: "Pediatricians",
    degree: "MBBS",
    experience: "2 Years",
    about:
      "Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
    fees: 40,
    address: {
      line1: "47th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
  {
    _id: "doc5",
    name: "Dr. Jennifer Garcia",
    image: assets.doc5,
    speciality: "Neurologist",
    degree: "MBBS",
    experience: "4 Years",
    about:
      "Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
    fees: 50,
    address: {
      line1: "57th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
  {
    _id: "doc6",
    name: "Dr. Andrew Williams",
    image: assets.doc6,
    speciality: "Neurologist",
    degree: "MBBS",
    experience: "4 Years",
    about:
      "Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
    fees: 50,
    address: {
      line1: "57th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
  {
    _id: "doc7",
    name: "Dr. Christopher Davis",
    image: assets.doc7,
    speciality: "General physician",
    degree: "MBBS",
    experience: "4 Years",
    about:
      "Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
    fees: 50,
    address: {
      line1: "17th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
  {
    _id: "doc8",
    name: "Dr. Timothy White",
    image: assets.doc8,
    speciality: "Gynecologist",
    degree: "MBBS",
    experience: "3 Years",
    about:
      "Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
    fees: 60,
    address: {
      line1: "27th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
  {
    _id: "doc9",
    name: "Dr. Ava Mitchell",
    image: assets.doc9,
    speciality: "Dermatologist",
    degree: "MBBS",
    experience: "1 Years",
    about:
      "Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
    fees: 30,
    address: {
      line1: "37th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
  {
    _id: "doc10",
    name: "Dr. Jeffrey King",
    image: assets.doc10,
    speciality: "Pediatricians",
    degree: "MBBS",
    experience: "2 Years",
    about:
      "Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
    fees: 40,
    address: {
      line1: "47th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
  {
    _id: "doc11",
    name: "Dr. Zoe Kelly",
    image: assets.doc11,
    speciality: "Neurologist",
    degree: "MBBS",
    experience: "4 Years",
    about:
      "Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
    fees: 50,
    address: {
      line1: "57th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
  {
    _id: "doc12",
    name: "Dr. Patrick Harris",
    image: assets.doc12,
    speciality: "Neurologist",
    degree: "MBBS",
    experience: "4 Years",
    about:
      "Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
    fees: 50,
    address: {
      line1: "57th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
  {
    _id: "doc13",
    name: "Dr. Chloe Evans",
    image: assets.doc13,
    speciality: "General physician",
    degree: "MBBS",
    experience: "4 Years",
    about:
      "Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
    fees: 50,
    address: {
      line1: "17th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
  {
    _id: "doc14",
    name: "Dr. Ryan Martinez",
    image: assets.doc14,
    speciality: "Gynecologist",
    degree: "MBBS",
    experience: "3 Years",
    about:
      "Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
    fees: 60,
    address: {
      line1: "27th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
  {
    _id: "doc15",
    name: "Dr. Amelia Hill",
    image: assets.doc15,
    speciality: "Dermatologist",
    degree: "MBBS",
    experience: "1 Years",
    about:
      "Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
    fees: 30,
    address: {
      line1: "37th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
];

export const filterOptions = {
  specialityOptions: [
    { id: "General_physician", label: "General physician" },
    { id: "Gynecologist", label: "Gynecologist" },
    { id: "Dermatologist", label: "Dermatologist" },
    { id: "Pediatricians", label: "Pediatricians" },
    { id: "Neurologist", label: "Neurologist" },
    { id: "Gastroenterologist", label: "Gastroenterologist" },
  ],
};

export const specialityOptionsMap = {
  General_physician: "General Physician",
  Gynecologist: "Gynecologist",
  Dermatologist: "Dermatologist",
  Pediatricians: "Pediatricians",
  Neurologist: "Neurologist",
  Gastroenterologist: "Gastroenterologist",
};
