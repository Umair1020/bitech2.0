import About from "../components/AboutComp/About";
import Servicecard from "../components/Cards/Servicecard";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Testimonial from "../components/Testimonial/Testimonial";
import styles from "../index.module.css";
import { Link } from "react-router-dom";
import "../App.css"
import Partic from "../components/Partical/partical";


const Landingpage = () => {
  return (
    <div className={styles.rectangleParent}>
      <Partic />
      <div className={styles.frameChild} />
      <Header />
      <div className={styles.wereADigitalContainer}>
        <p className={styles.wereADigital}>We’re A Digital</p>
        <p className={styles.wereADigital}>{`Software House `}</p>
        <p className={styles.wereADigital}>Startup Business</p>
      </div>
      <div className={styles.ourServices}>{`Our Services & Our Goal`}</div>
      <div className={styles.ourServices1}>{`Our Services & Our Goal`}</div>
      <div className={styles.sendYourMessageContainer}>
        <span>{`Send Your `}</span>
        <span className={styles.messageToUs}>Message To Us</span>
      </div>
      <img className={styles.frameItem} alt="" src="/group-2.svg" />
      <div className={styles.loremIpsumIs}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum
      </div>
      <div className={styles.rectangleContainer}>
        <div className={styles.groupItem} />
        <div className={styles.groupDiv}>
          <div className={styles.groupInner} />
          <div className={styles.rectangleDiv} />
          <div className={styles.groupChild1} />
          <div className={styles.groupChild2} />
          <div className={styles.learnMore}>Learn More</div>
          <div className={styles.sendMessage}>Send Message</div>
          <div className={styles.learnMore1}>Learn More</div>
          <div className={styles.learnMore2}>Learn More</div>
        </div>
        <div className={styles.learnMore3}>Learn More</div>
      </div>
      <div className={styles.services}>SERVICES</div>
      <div className={styles.testimonials}>TESTIMONIALS</div>
      <div className={styles.feelFreeToContactWithUsParent}>
        <div className={styles.feelFreeToContainer}>
          <p className={styles.wereADigital}>
            <span className={styles.feel}>{`Feel `}</span>
            <span>Free</span>
          </p>
          <p className={styles.wereADigital}>
            <span>To Contact</span>
            <span className={styles.feel}> With Us</span>
          </p>
        </div>
        <div className={styles.contactUs}>Contact Us</div>
      </div>
      <Servicecard />
      <About />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
};

export default Landingpage;
