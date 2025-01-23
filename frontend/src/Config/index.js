import { assets } from "@/assets/assets_frontend/assets";

export const registerFormControls = [
  {
    name: "userName",
    label: "User Name",
    placeholder: "Enter your user name",
    componentType: "input",
    type: "text",
  },
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];

export const loginFormControls = [
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];

export const addProductFormElements = [
  {
    label: "Title",
    name: "title",
    componentType: "input",
    type: "text",
    placeholder: "Enter product title",
  },
  {
    label: "Description",
    name: "description",
    componentType: "textarea",
    placeholder: "Enter product description",
  },
  {
    label: "Category",
    name: "category",
    componentType: "select",
    options: [
      { id: "bedroom", label: "Bedroom" },
      { id: "dinningroom", label: "Dinningroom" },
      { id: "livingroom", label: "Livingroom" },
      { id: "office", label: "Office" },
      { id: "door", label: "Door" },
      { id: "newArrivals", label: "New Arrivals" },
    ],
  },

  {
    label: "Subcategory",
    name: "subcategory",
    componentType: "select",
    options: [
      { id: "bedroomSet", label: "Bedroom Set" },
      { id: "bed", label: "Bed" },
      { id: "readingTable", label: "Reading Table" },
      { id: "bedSideTable", label: "BedSide Table" },
      { id: "wardrobe", label: "Wardrobe" },
      { id: "dressingTable", label: "Dressing Table" },
      { id: "dinningroomSet", label: "Dinning Room Set" },
      { id: "dinningChair", label: "Dinning Chair" },
      { id: "cafeteria", label: "Cafeteria" },
      { id: "dinnerWagone", label: "Dinner Wagone" },
      { id: "showcase", label: "Showcase" },
      { id: "teaTrolley", label: "Tea Trolley" },
      { id: "sofa", label: "Sofa" },
      { id: "centerTable", label: "CenterTable" },
      { id: "divan", label: "Divan" },
      { id: "lobbyChair", label: "Lobby Chair" },
      { id: "tvCabinet", label: "TV Cabinet" },
      { id: "shoeRack", label: "Shoe Rack" },
      { id: "officeSofa", label: "Office Sofa" },
      { id: "directortable", label: "Director Table" },
      { id: "computerTable", label: "Computer Table" },
      { id: "receptionTable", label: "Reception Table" },
      { id: "conferenceTable", label: "Conference Table" },
      { id: "swivelChair", label: "Swivel Chair" },
      { id: "solidWoodenDoor", label: "Solid Wooden Door" },
      {
        id: "solidEngineeredWoodenDoor",
        label: "Solid Engineered Wooden Door",
      },
      { id: "solidWoodenGlassDoor", label: "Solid Wooden Glass Door" },
      {
        id: "decorativeVeneeredFlushDoor",
        label: "Decorative Veneered Flush Door",
      },
      {
        id: "decorativeVeneeredGlassDoor",
        label: "Decorative Veneered Glass Door",
      },
      { id: "knockDownDoorFrame", label: "Knock Down Door Frame" },
    ],
  },

  {
    label: "Price",
    name: "price",
    componentType: "input",
    type: "number",
    placeholder: "Enter product price",
  },
  {
    label: "Sale Price",
    name: "salePrice",
    componentType: "input",
    type: "number",
    placeholder: "Enter sale price (optional)",
  },
  {
    label: "Total Stock",
    name: "totalStock",
    componentType: "input",
    type: "number",
    placeholder: "Enter total stock",
  },
];

export const userViewNavItems = [
  {
    id: "home",
    label: "Home",
    path: "/",
  },

  {
    id: "alldoctors",
    label: "ALLDOCTORS",
    path: "/doctors",
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
    speciality: "General physician",
    image: assets.General_physician,
  },
  {
    speciality: "Gynecologist",
    image: assets.Gynecologist,
  },
  {
    speciality: "Dermatologist",
    image: assets.Dermatologist,
  },
  {
    speciality: "Pediatricians",
    image: assets.Pediatricians,
  },
  {
    speciality: "Neurologist",
    image: assets.Neurologist,
  },
  {
    speciality: "Gastroenterologist",
    image: assets.Gastroenterologist,
  },
];


export const doctors = [
  {
      _id: 'doc1',
      name: 'Dr. Richard James',
      image:  assets.doc1,
      speciality: 'General physician',
      degree: 'MBBS',
      experience: '4 Years',
      about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
      fees: 50,
      address: {
          line1: '17th Cross, Richmond',
          line2: 'Circle, Ring Road, London'
      }
  },
  {
      _id: 'doc2',
      name: 'Dr. Emily Larson',
      image: assets.doc2,
      speciality: 'Gynecologist',
      degree: 'MBBS',
      experience: '3 Years',
      about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
      fees: 60,
      address: {
          line1: '27th Cross, Richmond',
          line2: 'Circle, Ring Road, London'
      }
  },
  {
      _id: 'doc3',
      name: 'Dr. Sarah Patel',
      image: assets.doc3,
      speciality: 'Dermatologist',
      degree: 'MBBS',
      experience: '1 Years',
      about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
      fees: 30,
      address: {
          line1: '37th Cross, Richmond',
          line2: 'Circle, Ring Road, London'
      }
  },
  {
      _id: 'doc4',
      name: 'Dr. Christopher Lee',
      image: assets.doc4,
      speciality: 'Pediatricians',
      degree: 'MBBS',
      experience: '2 Years',
      about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
      fees: 40,
      address: {
          line1: '47th Cross, Richmond',
          line2: 'Circle, Ring Road, London'
      }
  },
  {
      _id: 'doc5',
      name: 'Dr. Jennifer Garcia',
      image: assets.doc5,
      speciality: 'Neurologist',
      degree: 'MBBS',
      experience: '4 Years',
      about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
      fees: 50,
      address: {
          line1: '57th Cross, Richmond',
          line2: 'Circle, Ring Road, London'
      }
  },
  {
      _id: 'doc6',
      name: 'Dr. Andrew Williams',
      image: assets.doc6,
      speciality: 'Neurologist',
      degree: 'MBBS',
      experience: '4 Years',
      about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
      fees: 50,
      address: {
          line1: '57th Cross, Richmond',
          line2: 'Circle, Ring Road, London'
      }
  },
  {
      _id: 'doc7',
      name: 'Dr. Christopher Davis',
      image: assets.doc7,
      speciality: 'General physician',
      degree: 'MBBS',
      experience: '4 Years',
      about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
      fees: 50,
      address: {
          line1: '17th Cross, Richmond',
          line2: 'Circle, Ring Road, London'
      }
  },
  {
      _id: 'doc8',
      name: 'Dr. Timothy White',
      image: assets.doc8,
      speciality: 'Gynecologist',
      degree: 'MBBS',
      experience: '3 Years',
      about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
      fees: 60,
      address: {
          line1: '27th Cross, Richmond',
          line2: 'Circle, Ring Road, London'
      }
  },
  {
      _id: 'doc9',
      name: 'Dr. Ava Mitchell',
      image: assets.doc9,
      speciality: 'Dermatologist',
      degree: 'MBBS',
      experience: '1 Years',
      about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
      fees: 30,
      address: {
          line1: '37th Cross, Richmond',
          line2: 'Circle, Ring Road, London'
      }
  },
  {
      _id: 'doc10',
      name: 'Dr. Jeffrey King',
      image: assets.doc10,
      speciality: 'Pediatricians',
      degree: 'MBBS',
      experience: '2 Years',
      about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
      fees: 40,
      address: {
          line1: '47th Cross, Richmond',
          line2: 'Circle, Ring Road, London'
      }
  },
  {
      _id: 'doc11',
      name: 'Dr. Zoe Kelly',
      image: assets.doc11,
      speciality: 'Neurologist',
      degree: 'MBBS',
      experience: '4 Years',
      about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
      fees: 50,
      address: {
          line1: '57th Cross, Richmond',
          line2: 'Circle, Ring Road, London'
      }
  },
  {
      _id: 'doc12',
      name: 'Dr. Patrick Harris',
      image: assets.doc12,
      speciality: 'Neurologist',
      degree: 'MBBS',
      experience: '4 Years',
      about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
      fees: 50,
      address: {
          line1: '57th Cross, Richmond',
          line2: 'Circle, Ring Road, London'
      }
  },
  {
      _id: 'doc13',
      name: 'Dr. Chloe Evans',
      image: assets.doc13,
      speciality: 'General physician',
      degree: 'MBBS',
      experience: '4 Years',
      about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
      fees: 50,
      address: {
          line1: '17th Cross, Richmond',
          line2: 'Circle, Ring Road, London'
      }
  },
  {
      _id: 'doc14',
      name: 'Dr. Ryan Martinez',
      image: assets.doc14,
      speciality: 'Gynecologist',
      degree: 'MBBS',
      experience: '3 Years',
      about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
      fees: 60,
      address: {
          line1: '27th Cross, Richmond',
          line2: 'Circle, Ring Road, London'
      }
  },
  {
      _id: 'doc15',
      name: 'Dr. Amelia Hill',
      image: assets.doc15,
      speciality: 'Dermatologist',
      degree: 'MBBS',
      experience: '1 Years',
      about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
      fees: 30,
      address: {
          line1: '37th Cross, Richmond',
          line2: 'Circle, Ring Road, London'
      }
  },
] 
