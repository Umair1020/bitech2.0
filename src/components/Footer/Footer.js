import styles from "./footer.module.css"
import { useMediaQuery } from "react-responsive"
import "../../App.css"

const Footer = () => {
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
            <Mobile>
                <br /><br /><br /><br /><br />
                <footer id="footer">
                    <div class={styles.footertop}><br /><br />
                        <div class="container">
                            <div class="row">

                                <div class="col-lg-6 col-md-6 footer-contact">
                                    <h3>Bitech</h3>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting
                                        industry. Lorem Ipsum has been the industry's standard dummy text ever
                                        since the 1500shas been the industry's<br /> standard dummy text ever since
                                    </p>
                                </div>

                                {/* <div class="col-sm-3 footer-links">
                                    <h4>Quick Links</h4>
                                    <ul>
                                        <li><i class="bx bx-chevron-right"></i> <a href="#">Home</a></li>
                                        <li><i class="bx bx-chevron-right"></i> <a href="#">About us</a></li>
                                        <li><i class="bx bx-chevron-right"></i> <a href="#">Gallery</a></li>
                                        <li><i class="bx bx-chevron-right"></i> <a href="#">Contact</a></li>
                                        <li><i class="bx bx-chevron-right"></i> <a href="#">SiteMap</a></li>
                                    </ul>
                                </div> */}

                                <div class="col-sm-3 footer-links">
                                    <h4>Contact Us</h4>
                                    <ul className="list-unstyled">
                                        <li><i class="bx bx-chevron-right"></i> <a href="#">A-37, Sector 62, Noida-20</a></li>
                                        <li><i class="bx bx-chevron-right"></i> <a href="#">090078601</a></li>
                                        <li><i class="bx bx-chevron-right"></i> <a href="#">xyz@gmail.com</a></li>
                                    </ul>
                                </div>

                                {/* <div class="col-sm-3 footer-links">
                                    <h4>Get Help</h4>
                                    <ul>
                                        <li><i class="bx bx-chevron-right"></i> <a href="#">Our Team</a></li>
                                        <li><i class="bx bx-chevron-right"></i> <a href="#">Partner</a></li>
                                        <li><i class="bx bx-chevron-right"></i> <a href="#">FAQ</a></li>
                                        <li><i class="bx bx-chevron-right"></i> <a href="#">Blog</a></li>
                                    </ul>
                                </div> */}
                                <br />   <br />  <br />   <br /> <br />   <br />
                                <hr />
                                <div className="text-center fs-6">
                                    2023 Bitech Graphics.All rights reserved
                                </div>
                                <div className="d-flex justify-content-center fs-6 list-unstyled">
                                    <li className="mx-1 mt-4">Portfolio</li>
                                    <li className="mx-1 mt-4">How it works</li>
                                    <li className="mx-1 mt-4">Pricing</li>
                                    <li className="mx-1 mt-4">About</li>
                                    <li className="mx-1 mt-4">Login</li>
                                </div>

                            </div>
                        </div>
                    </div>
                </footer>

            </Mobile>
            <Desktop>
                <br /><br /><br /><br /><br />
                <footer id="footer">
                    <div class={styles.footertop}> 
                        <div class="container">
                            <div class="row">

                                <div class="col-lg-6 col-md-6 footer-contact">
                                    <h3>Bitech</h3>
                                    <p>
                                        Welcome to BiTech - Visualizing Your Ideas with Innovative Solutions At BiTech, we let our work do the talking. As a leading software house, we specialize in crafting exceptional apps and software solutions that empower your business to thrive in the digital world. Our team of skilled developers, designers, and creative minds work collaboratively to provide you with seamless user experiences and visually captivating graphic designs.

                                    </p>
                                </div>

                                {/* <div class="col-sm-3 footer-links">
                                    <h4>Quick Links</h4>
                                    <ul>
                                        <li><i class="bx bx-chevron-right"></i> <a href="#">Home</a></li>
                                        <li><i class="bx bx-chevron-right"></i> <a href="#">About us</a></li>
                                        <li><i class="bx bx-chevron-right"></i> <a href="#">Gallery</a></li>
                                        <li><i class="bx bx-chevron-right"></i> <a href="#">Contact</a></li>
                                        <li><i class="bx bx-chevron-right"></i> <a href="#">SiteMap</a></li>
                                    </ul>
                                </div> */}

                                <div class="col-lg-6 col-md-6 col-sm-6 footer-links">
                                    <h4 className="text-end">Contact Us</h4>
                                    <ul className="list-unstyled text-end">
                                        <li className="text-end"><i class="bx bx-chevron-right"></i> A-37, Sector 62, Noida-20</li>
                                        <li className="text-end"><i class="bx bx-chevron-right"></i> 090078601</li>
                                        <li className="text-end"><i class="bx bx-chevron-right"></i> xyz@gmail.com</li>
                                    </ul>
                                </div>

                                {/* <div class="col-sm-3 footer-links">
                                    <h4>Get Help</h4>
                                    <ul>
                                        <li><i class="bx bx-chevron-right"></i> <a href="#">Our Team</a></li>
                                        <li><i class="bx bx-chevron-right"></i> <a href="#">Partner</a></li>
                                        <li><i class="bx bx-chevron-right"></i> <a href="#">FAQ</a></li>
                                        <li><i class="bx bx-chevron-right"></i> <a href="#">Blog</a></li>
                                    </ul>
                                </div> */}

                                <hr />
                                <div className="row">
                                    <div class="col-lg-6 col-md-6 col-sm-6  footer-links">
                                        2023 Bitech Graphics.All rights reserved
                                    </div>
                                    <div class="col-lg-6 col-md-6 col-sm-6 footer-links">
                                        <div className="d-flex justify-content-end fs-6 list-unstyled">
                                            <li className="mx-1 ">Portfolio</li>
                                            <li className="mx-1 ">How it works</li>
                                            <li className="mx-1 ">Pricing</li>
                                            <li className="mx-1 ">About</li>
                                            <li className="mx-1 ">Login</li>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </Desktop>
        </div>
    )
}

export default Footer