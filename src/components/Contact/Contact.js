import styles from "../../index.module.css"
import "../../App.css"
import style from "./contact.module.css"
import { FaPhone } from "react-icons/fa"

const Contact = () => {
    const Desktop = ({ children }) => {
        const isDesktop = useMediaQuery({ minWidth: 992 })
        return isDesktop ? children : null
    }

    const Mobile = ({ children }) => {
        const isMobile = useMediaQuery({ maxWidth: 767 })
        return isMobile ? children : null
    }
    return (
        <div>

            <section id="contact" class="contact">
                <div class="container">
                    <div>
                        <h3 className="text-secondary fs-3 text-center">Contact Us</h3>
                        <p className={`text-dark fw-bold text-center ${style.feel}`}>Feel <span className={`text-primary fw-bold text-center ${style.free}`}>Free</span></p>
                        <p className={`text-primary fw-bold text-center ${style.contact}`}>To Contact <span className={`text-dark fw-bold text-center ${style.us}`}>With Us</span></p>
                    </div>
                    <div class="row justify-content-center">

                        <div class="col-xl-3 col-lg-4 mt-4" data-aos="fade-up">
                            <div class="info-box">
                                <img className={styles.vectorIcon4} alt="" src="/vector2.svg" />
                                {/* <i class="bx bx-map"></i> */}
                                <p className={style.location}>Location</p>
                                <h3>Visit Us</h3>
                                <p>A108 Adam Street, New York, NY 535022</p>
                            </div>
                        </div>

                        <div class="col-xl-3 col-lg-4 mt-4" data-aos="fade-up" data-aos-delay="100">
                            <div class="info-box active">
                                <p className={`text-light ${style.location}`}>Drop a line</p>
                                <h3 className="text-light">Email Us</h3>
                                <p>info@example.com<br></br>contact@example.com</p>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-4 mt-4" data-aos="fade-up" data-aos-delay="200">
                            <div class="info-box">
                                <i class="bx bx-phone-call"></i>
                                <p className={style.location}>24/7 Service</p>
                                <h3>Call Us</h3>
                                <p>+1 5589 55488 55<br />+1 6678 254445 41</p>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div class="row">
                        <div class="col-lg-6" data-aos="fade-up">
                            <img className={style.contactimg} src="/OBJECTS.png" />
                        </div>
                        <div class="col-lg-6 mt-5" data-aos="fade-up">
                            <p className={`text-dark text-center ${style.sendyour}`}> Send Your <span className={`text-primary text-center ${style.msg}`}>Message To Us</span></p>
                            <form  class="php-email-form mt-4">
                                <div class="row">
                                    <div class="col-md-6 form-group">
                                        <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" required />
                                    </div>
                                    <div class="col-md-6 form-group mt-3 mt-md-0">
                                        <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" required />
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6 form-group ">
                                        <input type="number" class="form-control" name="email" id="email" placeholder="Mobile No" required />
                                    </div>
                                    <div class=" col-md-6 form-group ">
                                        <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" required />
                                    </div>
                                </div>
                                <div class="form-group mt-3">
                                    <textarea class="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                                </div>

                                <div class="text-center"><button type="submit">Send Message</button></div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Contact