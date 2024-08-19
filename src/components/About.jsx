import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon, isMobile }) => {
  const cardContent = (
    <div className="w-full sm:w-[250px] mb-8">
      <div className="card-gradient p-[1px] rounded-[20px] shadow-card w-full">
        <div className="bg-jetLight rounded-[20px] py-5 px-4 min-h-[200px] flex justify-evenly items-center flex-col w-full">
          <img src={icon} alt={title} className="w-12 h-12 object-contain" />
          <h3 className="text-taupe text-[14px] font-bold text-center">
            {title}
          </h3>
        </div>
      </div>
    </div>
  );

  return isMobile ? (
    cardContent
  ) : (
    <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
    >
      {cardContent}
    </motion.div>
  );
};

const About = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 640px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  const content = (
    <div className="w-full">
      <div className="relative w-full min-h-screen mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-5">
          <div className="flex flex-col justify-center items-center mt-5 md:mt-0">
            <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
            <div className="w-1 sm:h-10 xs:h-10 md:h-32 violet-gradient" />
          </div>

          <div className="flex-1">
            <div>
              <p className={`${styles.sectionSubText} text-center md:text-left`}>
                Introduction
              </p>
              <h2 className={`${styles.sectionHeadText} text-center md:text-left`}>
                Overview.
              </h2>
            </div>

            <p className="mt-4 text-slate-950 text-[14px] md:text-[16px] max-w-full leading-[24px] md:leading-[30px]">
              Welcome to my portfolio! I am Eibrahim Belayneh, a passionate and
              dedicated full-stack web developer with a knack for creating
              efficient and user-friendly applications. My journey in web
              development has equipped me with a diverse skill set, including
              expertise in React.js, Redux Toolkit, RTK Query, Node.js,
              Express.js, GraphQL, MySQL, PostgreSQL, Tailwind CSS, and
              TypeScript. With a Bachelor of Science in GIS from Wollega
              University and a Full-Stack Web Development certification from
              Evangadi Tech, I have successfully completed various projects such
              as Netflix, Amazon, and Apple clones, as well as a personal
              portfolio website. My experience also extends to improving mobile
              user engagement, implementing RESTful APIs, and participating in
              Agile development. Amharic is my mother tongue, and I am also
              fluent in English and Arabic. I continuously strive to expand my
              knowledge and skills. Currently, I am exploring TypeScript and AWS
              and am open to junior developer roles where I can contribute and
              grow.
            </p>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {services.map((service, index) => (
                <ServiceCard 
                  key={service.title} 
                  index={index} 
                  {...service} 
                  isMobile={isMobile}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return isMobile ? (
    content
  ) : (
    <motion.div
      variants={fadeIn("up", "tween", 0.2, 1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      {content}
    </motion.div>
  );
};

export default SectionWrapper(About, "about");
