import { assets } from "@/assets/assets_frontend/assets";
import SpeialityMenu from "@/components/user-view/SpeialityMenu";
import TopDoctors from "@/components/user-view/TopDoctors";
import React from "react";
import Banner from "../../components/user-view/Banner";
import { Link } from "react-router";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen mx-32 sm:mx[10%]">
      <div className="flex flex-col md:flex-row flex-wrap bg-blue-400 rounded-lg px-6 md:px-10 lg:px-20">
        <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-8 m-auto md:py-[8vw] md:mb-[-30px]">
          <p className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight">
            Book Appointment <br /> With Trusted Doctors
          </p>
          <div className="flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light">
            <img className="w-28" src={assets.group_profiles} alt="" />
            <p>
              Simply browse through our extensive list of trusted doctors,{" "}
              <br className="hidden sm:block" /> schedule your appointment, and
              get the care you need.
            </p>
          </div>
          <Link
            to={"/doctorslist"}
            className="flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300"
          >
            Book appoinment
            <img className="w-3" src={assets.arrow_icon} alt="" />
          </Link>
        </div>

        <div className="md:w-1/2 relative">
          <img
            className="w-full  md:absolute bottom-0 h-auto rounded-lg"
            src={assets.home}
            alt=""
          />
        </div>
      </div>

      <section>
        <SpeialityMenu />
      </section>

      <section>
        <TopDoctors />
      </section>

      <section>
        <Banner />
      </section>
    </div>
  );
};

export default Home;
