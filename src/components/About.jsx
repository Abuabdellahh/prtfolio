import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className="w-full sm:w-[250px] flex justify-center mb-8"
      whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
    >
      <motion.div
        className="card-gradient p-[1px] rounded-[20px] shadow-card w-full flex justify-center"
        whileHover={{
          boxShadow: "0px 0px 8px rgb(145, 94, 255)",
          transition: { duration: 0.3 },
        }}
      >
        <motion.div
          className="bg-jetLight rounded-[20px] py-5 px-4 min-h-[200px] flex justify-evenly items-center flex-col w-full"
          whileHover={{
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            transition: { duration: 0.3 },
          }}
        >
          <motion.img
            src={icon}
            alt={title}
            className="w-12 h-12 object-contain"
            whileHover={{ rotate: 360, transition: { duration: 0.5 } }}
          />
          <motion.h3
            className="text-taupe text-[14px] font-bold text-center"
            whileHover={{
              scale: 1.1,
              color: "#915EFF",
              transition: { duration: 0.3 },
            }}
          >
            {title}
          </motion.h3>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const About = () => {
  return (
    <div className="w-full">
      <motion.div
        variants={fadeIn("up", "tween", 0.2, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="relative w-full min-h-screen mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-5">
          <motion.div
            variants={fadeIn("right", "spring", 0.1, 0.75)}
            className="flex flex-col justify-center items-center mt-5 md:mt-0"
          >
            <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
            <div className="w-1 sm:h-10 xs:h-10  md:h-32 violet-gradient" />
          </motion.div>

          <div className="flex-1">
            <motion.div variants={textVariant()}>
              <p
                className={`${styles.sectionSubText} text-center md:text-left`}
              >
                Introduction
              </p>
              <h2
                className={`${styles.sectionHeadText} text-center md:text-left`}
              >
                Overview.
              </h2>
            </motion.div>

            <motion.p
              variants={fadeIn("", "", 0.1, 1)}
              className="mt-4 text-slate-950 text-[14px]
               md:text-[16px] max-w-full leading-[24px] md:leading-[30px]"
            >
              Welcome to my portfolio! I am Eibrahim Belayneh, a passionate and
              dedicated full-stack web developer with a knack for creating
              efficient and user-friendly applications. My journey in web
              development has equipped me with a diverse skill set, including
              expertise in React.js, Redux Toolkit, RTK Query, Node.js,
              Express.js, GraphQL, MySQL, MongoDB, PostgreSQL, Tailwind CSS, and
              TypeScript. With a Bachelor of Science in GIS from Wolega
              University and a Full-Stack Web Development certification from
              Evangadi Tech, I have successfully completed various projects such
              as Netflix, Amazon, and Apple clones, as well as a personal
              portfolio website. My experience also extends to improving mobile
              user engagement, implementing RESTful APIs, and participating in
              Agile development. I am fluent in Amharic, English, and Arabic,
              and I continuously strive to expand my knowledge and skills.
              Currently, I am exploring TypeScript and AWS, and I am open to
              junior developer roles where I can contribute and grow.
            </motion.p>

            <motion.div
              variants={fadeIn("up", "spring", 0.5, 0.75)}
              className="mt-12 flex flex-wrap gap-4 justify-center"
            >
              {services.map((service, index) => (
                <ServiceCard key={service.title} index={index} {...service} />
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(About, "about");
