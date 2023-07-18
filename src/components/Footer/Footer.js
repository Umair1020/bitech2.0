import styles from "./footer.module.css"

const Footer = () => {
    return (
        <div>
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

        </div>
    )
}

export default Footer