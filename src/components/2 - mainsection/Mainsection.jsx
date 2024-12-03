import "./mainsection.css";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { motion } from "framer-motion";
const Mainsection = () => {
  return (
    <section className="Mainsection flex con">
      <div className="left-section">
        <div className="parent-avatar flex">
        
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3 }}
            className="avatar"
            src="/me.png"
            alt="Mohammed Ahmed Hosein"
          />
        </div>

        <h1 className="title">
          software engineer, Web Developer, Mobile Developer
        </h1>
        <p className="sub-title">
          Computer Science fresh graduate with comprehensive skills in full
          stack development, eager to learn and grow within a forward-thinking
          tech environment. Proficient in developing dynamic web applications
          using JavaScript and other modern technologies. Seeking an opportunity
          to apply technical knowledge, enhance coding abilities, and contribute
          to innovative projects in a collaborative team setting.
        </p>

        <div className="icons flex">
          <div className="icon icon-twitter"></div>
          <div className="icon icon-instagram"></div>
          <divc className="icon icon-github"></divc>
          <div className="icon icon-linkedin-square"></div>
        </div>
      </div>
      <div className="right-section animation">
        {" "}
        <DotLottieReact
          src="/Computer1.json"
          style={{ height: 600, width: 400 }}
          loop
          autoplay
        />
      </div>
    </section>
  );
};

export default Mainsection;
