import { assets } from "@/assets/assets_frontend/assets";
import React from "react";
import { useNavigate } from "react-router";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className=" text-black py-8 sm:mx-[10%]">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <img className="w-26 h-22 lg:w-40 mb-2" src={assets.logo} alt="" />

          <p className="text-gray-400">
            Your trusted partner in medical care. Providing expert services and
            personalized support to ensure your health and well-being.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <div
                onClick={() => {
                  navigate("/about");
                }}
                className="text-gray-400 hover:text-black"
              >
                About Us
              </div>
            </li>

            <li>
              <div
                onClick={() => {
                  navigate("/contact");
                }}
                className="text-gray-400 hover:text-black"
              >
                Contact
              </div>
            </li>
            <li>
              <div className="text-gray-400 hover:text-black">FAQ</div>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Our Services</h3>
          <ul className="space-y-2">
            <li>
              <a href="#speiality" className="text-gray-400 hover:text-black">
                Book Appointments
              </a>
            </li>
            <li>
              <a href="/doctors" className="text-gray-400 hover:text-black">
                Find a Doctor
              </a>
            </li>
            <li>
              <a href="/contact" className="text-gray-400 hover:text-black">
                Emergency Care
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p className="text-gray-400">123 Care Street, Health City</p>
          <p className="text-gray-400">Phone: +1 234 567 890</p>
          <p className="text-gray-400">Email: support@careconnect.com</p>
          <div className="mt-4 flex space-x-4">
            <a
              href="#"
              className="text-gray-400 hover:text-black"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-black"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-black"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400">
        &copy; {new Date().getFullYear()} CareConnect. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
