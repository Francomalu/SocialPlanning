import { useState } from "react";
import Image from "next/image";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaSearch,
  FaStar,
  FaBell,
} from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="w-full">
      <div className="px-4 py-2 flex justify-between items-center h-20 w-full gap-6">
        <div className="flex items-center">
          <div className="mr-2">
            <FaSearch className="w-4 h-4 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search"
            className="w-40 text-sm bg-transparent border border-transparent py-2 px-2 rounded-md focus:outline-none"
          />
        </div>
        <div className="flex gap-2 items-center">
          <button className="text-main-gray">All</button>
          <button className="text-main-gray">Facebook</button>
          <button className="text-main-gray">Instagram</button>
          <button className="text-main-gray">Twitter</button>
          <button className="text-main-gray">LinkedIn</button>
        </div>
        <div className="flex items-center">
          <div className="flex-shrink-0 mr-4">
            <button className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold text-sm py-2 px-4 rounded">
              <FaStar className="w-4 h-4 text-gray-100" />
              <span>Suscripción</span>
            </button>
          </div>
          <div className="flex-shrink-0 mr-4">
            <FaBell className="w-5 h-5 text-main-gray" />
          </div>
          <div className="flex-shrink-0 flex items-center">
            <div className="rounded-full h-8 w-8 bg-gray-400"></div>
            <span className="ml-3 font-medium text-main-gray">
              Nombre de usuario
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}
