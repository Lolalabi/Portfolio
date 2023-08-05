import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaStackOverflow,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  let iconStyles = { color: "#7562e0", fontSize: "2rem" };
  return (
    <div className="md:px-10 px-7 mt-24">
      <div className="text-white opacity-50 flex flex-col md:flex-row justify-between items-center my-5">
        <p>@ Copyright 2023 | Olabisi Afolabi</p>
        <p className="hidden sm:block">Frontend Developer</p>
        <p className="hidden sm:block">UI Designer</p>
        <p className="hidden sm:block">Developed by @lolalabi</p>
      </div>

      <div className="flex mb-5 gap-4 justify-center md:justify-start hover:text-primary">
        <Link to="mailto:lolalabi60@gmail.com" target="_blank">
          <MdEmail style={iconStyles} className="hover:bg-gray-400" />
        </Link>
        <Link to="#">
          <FaFacebook style={iconStyles} className="hover:bg-gray-400" />
        </Link>

        <Link to="#">
          <FaInstagram style={iconStyles} className="hover:bg-gray-400" />
        </Link>

        <Link to="#">
          <FaTwitter style={iconStyles} className="hover:bg-gray-400" />
        </Link>

        <Link to="https://github.com/Lolalabi" target="_blank">
          <FaGithub style={iconStyles} className="hover:bg-gray-400" />
        </Link>

        <Link
          to="https://stackoverflow.com/users/21899225/olabisi-lola-afolabi"
          target="_blank"
        >
          <FaStackOverflow style={iconStyles} className="hover:bg-gray-400" />
        </Link>
        <Link
          to="https://www.linkedin.com/in/olabisi-afolabi-720510158/"
          target="_blank"
        >
          <FaLinkedin style={iconStyles} className="hover:bg-gray-400" />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
