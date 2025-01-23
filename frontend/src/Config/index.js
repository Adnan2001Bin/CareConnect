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
