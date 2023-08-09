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
import 'animate.css';
import style from "../components/Cards/service.module.css"

const Landingpage = () => {
  return (
    <div className={styles.rectangleParent}>
      {/* <Partic /> */}
      {/* <div className={styles.frameChild} /> */}
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-6 ">
            <div className={styles.wereADigitalContainer}>
              <p className={`animate__animated animate__backInLeft ${styles.wereADigital}`}>Welcome to BITECH 
              </p>
              <p className={`animate__animated animate__backInLeft ${styles.wereADigital}`}>{` Visualizing Your Ideas   `}</p>
              <p className={`animate__animated animate__backInLeft ${styles.wereADigital}`}>with Innovative Solutions</p>
            </div>
            <div className={`animate__animated animate__fadeInUp ${styles.loremIpsumIs}`}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum
            </div> <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <button className={style.btn}>
              <p className={style.p}>Learn More</p>
            </button>
          </div>
          <div className="col-6 d-flex justify-content-end">
            <img className='groupimg' alt="" src="/group-2.svg" />
          </div>
        </div>
      </div>

      {/* <div className={styles.ourServices}>{`Our Services & Our Goal`}</div> */}




      {/* <div className={`animate__animated animate__fadeInDown ${styles.services}`}>SERVICES</div> */}
      {/* <div className={styles.testimonials}>TESTIMONIALS</div> */}
      {/* <div className={styles.feelFreeToContactWithUsParent}>
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
      </div> */}
      <Servicecard />
      <About />

      <Testimonial />
      <Contact />
      <Footer className="animate__animated animate__backInLeft" />
    </div>
  );
};

export default Landingpage;
