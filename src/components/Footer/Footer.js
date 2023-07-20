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
                <footer id="footer">
                    <div class="footer-top">
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

                                <div class="col-sm-3 footer-links">
                                    <h4>Quick Links</h4>
                                    <ul>
                                        <li><i class="bx bx-chevron-right"></i> <a href="#">Home</a></li>
                                        <li><i class="bx bx-chevron-right"></i> <a href="#">About us</a></li>
                                        <li><i class="bx bx-chevron-right"></i> <a href="#">Gallery</a></li>
                                        <li><i class="bx bx-chevron-right"></i> <a href="#">Contact</a></li>
                                        <li><i class="bx bx-chevron-right"></i> <a href="#">SiteMap</a></li>
                                    </ul>
                                </div>

                                <div class="col-sm-3 footer-links">
                                    <h4>Contact Us</h4>
                                    <ul>
                                        <li><i class="bx bx-chevron-right"></i> <a href="#">A-37, Sector 62, Noida-20</a></li>
                                        <li><i class="bx bx-chevron-right"></i> <a href="#">090078601</a></li>
                                        <li><i class="bx bx-chevron-right"></i> <a href="#">xyz@gmail.com</a></li>
                                    </ul>
                                </div>

                                <div class="col-sm-3 footer-links">
                                    <h4>Get Help</h4>
                                    <ul>
                                        <li><i class="bx bx-chevron-right"></i> <a href="#">Our Team</a></li>
                                        <li><i class="bx bx-chevron-right"></i> <a href="#">Partner</a></li>
                                        <li><i class="bx bx-chevron-right"></i> <a href="#">FAQ</a></li>
                                        <li><i class="bx bx-chevron-right"></i> <a href="#">Blog</a></li>
                                    </ul>
                                </div>


                                <div className={styles.divider} />
                                <div className={styles.bitechGraphicsallRights}>
                                    2023 Bitech Graphics.All rights reserved
                                </div>
                                <div className={styles.portfolioHowIt}>
                                    <li className={styles.blankLine}>Portfolio</li>
                                    <li className={styles.blankLine}>How it works</li>
                                    <li className={styles.blankLine}>Pricing</li>
                                    <li className={styles.blankLine}>About</li>
                                    <li className={styles.blankLine}>Login</li>
                                </div>

                            </div>
                        </div>
                    </div>
                </footer>

            </Mobile>
            <Desktop>
                <div className={styles.bitech1}>Bitech</div>
                <div className={styles.loremIpsumIs7}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500shas been the industry's standard dummy text ever since
                    the 1500s
                </div>
                <img className={styles.frameChild43} alt="" src="/group-71.svg" />
                <div className={styles.quickLinksHomeContainer}>
                    <p className={styles.quickLinks}>Quick Links</p>
                    <p className={styles.blankLine}>&nbsp;</p>
                    <li className={styles.blankLine}>Home</li>
                    <p className={styles.blankLine}>&nbsp;</p>
                    <li className={styles.blankLine}>About Us</li>
                    <p className={styles.blankLine}>&nbsp;</p>
                    <li className={styles.blankLine}>Gallery</li>
                    <p className={styles.blankLine}>&nbsp;</p>
                    <li className={styles.blankLine}>Contact</li>
                    <p className={styles.blankLine}>&nbsp;</p>
                    <li className={styles.blankLine}>Site Map</li>
                </div>
                <div className={styles.contactUsA37Container}>
                    <p className={styles.quickLinks}>Contact Us</p>
                    <p className={styles.blankLine}>&nbsp;</p>
                    <p className={styles.blankLine}>A-37, Sector 62, Noida-20</p>
                    <p className={styles.blankLine}>&nbsp;</p>
                    <p className={styles.blankLine}>090078601</p>
                    <p className={styles.blankLine}>&nbsp;</p>
                    <p className={styles.blankLine}>xyz@gmail.com</p>
                    <p className={styles.blankLine}>&nbsp;</p>
                    <p className={styles.blankLine}>&nbsp;</p>
                    <p className={styles.siteMap}>&nbsp;</p>
                </div>
                <div className={styles.getHelpOurContainer}>
                    <p className={styles.quickLinks}>Get Help</p>
                    <p className={styles.blankLine}>&nbsp;</p>
                    <p className={styles.blankLine}>Our Team</p>
                    <p className={styles.blankLine}>&nbsp;</p>
                    <p className={styles.blankLine}>Partner</p>
                    <p className={styles.blankLine}>&nbsp;</p>
                    <p className={styles.blankLine}>FAQ</p>
                    <p className={styles.blankLine}>&nbsp;</p>
                    <p className={styles.blankLine}>Blog</p>
                    <p className={styles.blankLine}>&nbsp;</p>
                    <p className={styles.blankLine}>&nbsp;</p>
                    <p className={styles.blankLine}>&nbsp;</p>
                </div>
                <div className={styles.frameChild44} />
                <div className={styles.bitechGraphicsallRights}>
                    2023 Bitech Graphics.All rights reserved
                </div>
                <div className={styles.portfolioHowIt}>
                    <li className={styles.blankLine}>Portfolio</li>
                    <li className={styles.blankLine}>How it works</li>
                    <li className={styles.blankLine}>Pricing</li>
                    <li className={styles.blankLine}>About</li>
                    <li className={styles.blankLine}>Login</li>
                </div>
            </Desktop>
        </div>
    )
}

export default Footer