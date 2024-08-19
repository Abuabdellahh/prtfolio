import React from "react";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  return (
    <>
      <div className="relative flex flex-col-reverse lg:flex-row gap-10 overflow-hidden">
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-1 bg-gray-800 p-8 rounded-2xl"
        >
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadTextLight}>Contact</h3>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
            <div className="flex items-start space-x-4">
              <FaMapMarkerAlt className="text-2xl text-gray-400" />
              <div>
                <h3 className="text-lg font-semibold">Address</h3>
                <p>Addis Ababa, Ethiopia</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <FaPhone className="text-2xl text-gray-400" />
              <div>
                <h3 className="text-lg font-semibold">Phone</h3>
                <p>+251-910-999-967</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <FaEnvelope className="text-2xl text-gray-400" />
              <div>
                <h3 className="text-lg font-semibold">Email</h3>
                <p>
                  <a
                    href="mailto:Abuabdellah1099@gmail.com"
                    className="text-blue-400 hover:underline"
                  >
                    Abuabdellah1099@gmail.com
                  </a>
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <FaLinkedin className="text-2xl text-blue-500" />
              <div>
                <h3 className="text-lg font-semibold">LinkedIn</h3>
                <a
                  href="https://www.linkedin.com/in/eibrahimbelayneh/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  eibrahimbelayneh
                </a>
              </div>
            </div>

            {/* GitHub section - now visible */}
            <div className="flex items-start space-x-4">
              <FaGithub className="text-2xl text-gray-400" />
              <div>
                <h3 className="text-lg font-semibold">GitHub</h3>
                <a
                  href="https://github.com/Abuabdellahh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  Abuabdellahh
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="absolute bottom-4 left-4 text-gray-400 font-medium text-sm sm:text-base md:ml-72 xs:mb-0 xs:text-center xs:ml-16 sm:text-center">
        <div className="text-xs sm:text-sm opacity-80 text-center">
          © {new Date().getFullYear()} Eibrahim Belayneh. All rights reserved.
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");
