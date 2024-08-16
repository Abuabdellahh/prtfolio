import React, { useState, useEffect } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGoogle,
} from "react-icons/fa";
import heroImage from "../assets/backgrounds/hero.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  const texts = [
    "Full Stack Software Engineer",
    "React & Next.js Specialist",
    "Node.js & Express Expert",
    "RESTful API Designer",
    "Database Management (SQL & NoSQL)",
    "Frontend UI/UX Enthusiast",
    "Backend Architecture Specialist",
    "DevOps & CI/CD Pipeline Implementer",
    "Experienced Computer Science Educator",
    "Passionate about Fostering Tech Skills",
    "GIS Specialist",
    "Spatial Data Analyst",
    "Cartography and Map Design Expert",
    "Proficient in ArcGIS and QGIS",
    // eslint-disable-next-line spellcheck/spell-checker
    "Geospatial Web Application Developer",
    "Remote Sensing Data Interpreter",
    "Computer Hardware Troubleshooter",
    "System Performance Optimizer",
    "Network Configuration Specialist",
    "Data Recovery Expert",
    "IT Support Professional",
    "Passionate About Cutting-Edge Tech",
    "Innovative Problem Solver",
    "Continuous Learner in Technology",
    "Advocate for Clean, Maintainable Code",
  ];

  const [currentText, setCurrentText] = useState(texts[0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % texts.length;
        setCurrentText(texts[newIndex]);
        return newIndex;
      });
    }, 5000); // Change text every 5 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      id="hero-area"
      className="relative bg-cover bg-center h-screen bg-white"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto px-4 h-full flex items-center justify-center relative z-10">
        <div className="text-center text-white max-w-3xl w-full px-4">
          <h5 className="font-script text-lg sm:text-xl md:text-2xl mb-2">
            Hi, I'm
          </h5>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Eibrahim Belayneh
          </h2>
          <p className="font-mono text-lg sm:text-xl md:text-2xl lg:text-3xl mb-4 overflow-hidden whitespace-nowrap border-r-4 border-r-primary pr-1 w-0 animate-typing-loop text-platinum">
            {currentText}
          </p>
          <ul className="flex justify-center space-x-4 mb-4">
            {[
              {
                href: "#",
                icon: <FaFacebookF />,
                target: "_blank",
              },
              {
                href: "https://twitter.com/eibrahimbelayn1",
                icon: <FaTwitter />,
                target: "_blank",
              },
              { href: "#", icon: <FaInstagram /> },
              {
                href: "https://linkedin.com/in/eibrahimbelayneh",
                icon: <FaLinkedinIn />,
                target: "_blank",
              },
              { href: "mailto:Abuabdellah1099@gmail.com", icon: <FaGoogle /> },
            ].map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  target={link.target}
                  className="text-lg sm:text-xl md:text-2xl hover:text-blue-400"
                  rel="noopener noreferrer"
                >
                  {link.icon}
                </a>
              </li>
            ))}
          </ul>
          <div>
            <Link
              to="#"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded text-sm sm:text-base"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
