import styles from "../../index.module.css"
import { useMediaQuery } from "react-responsive"
import style from "./about.module.css"
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { useRef, useState } from "react";

const About = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const Desktop = ({ children }) => {
        const isDesktop = useMediaQuery({ minWidth: 992 })
        return isDesktop ? children : null
    }

    const Mobile = ({ children }) => {
        const isMobile = useMediaQuery({ maxWidth: 767 })
        return isMobile ? children : null
    }
    const sliderRef = useRef(null);


    var settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    // dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div>
            <Mobile>
                <div className={style.aboutimg}>
                    <img className={style.groupIcon} alt="" src="/group.svg" />
                </div>
                <h4 className={style.abouth4}>About Us</h4>
                <h3 className={style.abouth3}>Grow Your Business With
                    Our Agency</h3>
                <p className={style.para}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                <div className={styles.innovativeWebsiteDesign}>
                    Innovative website Design
                </div>
                <div className={styles.uiuxDesignWith}>
                    Ui/Ux Design With Global Trend
                </div>
                <div className={styles.webAdnEmail}>Web adn email hosting serivce</div>
                <img className={styles.vectorIcon1} alt="" src="/vector1.svg" />
                <img className={styles.vectorIcon2} alt="" src="/vector1.svg" />
                <img className={styles.vectorIcon3} alt="" src="/vector1.svg" />
                <div><br /><br /><br /><br /><br /><br /><br />
                    <h4 className={style.CAPABILITIES}>OUR CAPABILITIES</h4>
                    <h3 className={style.forward}>Forward Thinking Team Of
                        Designers & Developers</h3>
                    <p className={style.para2}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>

                    <Slider ref={sliderRef} {...settings}>
                        <div className={style.parent}>
                            <div className={currentSlide === 0 ? style.center : style.side} key={0}>
                                <div className="col-md-3 col-sm-3 " >
                                    <div className="box text-center p-4">
                                        <div className="number" data-to="20" data-speed="150" ></div>
                                        <div className="title">Software Development</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={style.parent} >
                            <div className={currentSlide === 1 ? style.center : style.side} key={1}>
                                <div className="col-md-3 col-sm-3 " key={2}>
                                    <div className="box text-center p-4">
                                        <div className="number" data-to="200" data-speed="150"></div>
                                        <div className="title">Graphic Design</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={style.parent}>
                            <div className={currentSlide === 2 ? style.center : style.side} key={2}>
                                <div className="col-md-3 col-sm-3 " key={3}>
                                    <div className="box text-center p-4">
                                        <div className="number" data-to="200" data-speed="150"></div>
                                        <div className="title">Game Design</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={style.parent}>
                            <div className={currentSlide === 3 ? style.center : style.side} key={3}>
                                <div className="col-md-3 col-sm-3 " key={4}>
                                    <div className="box text-center p-4">
                                        <div className="number" data-to="200" data-speed="150"></div>
                                        <div className="title"> Web Development</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>

                </div >
            </Mobile >
            <Desktop>

                <div className={styles.frameChild14} />
                <div className={styles.innovativeWebsiteDesign}>
                    Innovative website Design
                </div>
                <div className={styles.uiuxDesignWith}>
                    Ui/Ux Design With Global Trend
                </div>
                <div className={styles.webAdnEmail}>Web adn email hosting serivce</div>
                <div className={styles.growYourBusinessContainer}>
                    <p className={styles.wereADigital1}>{`Grow Your Business With `}</p>
                    <p className={styles.wereADigital1}>Our Agency</p>
                </div>
                <div className={styles.forwardThinkingTeamContainer}>
                    <p className={styles.wereADigital1}>Forward Thinking Team Of</p>
                    <p className={styles.wereADigital1}>{`Designers & Developers`}</p>
                </div>
                {/* <div className={styles.forwardThinkingTeamContainer1}>
                    <p className={styles.wereADigital1}>Forward Thinking Team Of</p>
                    <p className={styles.wereADigital1}>{`Designers & Developers`}</p>
                </div> */}
                <div className={styles.loremIpsumIs1}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s
                </div>
                <div className={styles.loremIpsumIs2}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s
                </div>
                {/* <div className={styles.loremIpsumIs3}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s
                </div> */}
                <div className={styles.aboutUs}>ABOUT US</div>
                <div className={styles.ourCapabilities}>OUR CAPABILITIES</div>
                {/* <div className={styles.aboutUs1}>ABOUT US</div> */}
                <img className={styles.groupIcon} alt="" src="/group.svg" />
                {/* <img className={styles.vectorIcon1} alt="" src="/vector1.svg" />
                <img className={styles.vectorIcon2} alt="" src="/vector1.svg" />
                <img className={styles.vectorIcon3} alt="" src="/vector1.svg" /> */}
                {/* <div className={styles.frameChild15} />
                <div className={styles.frameChild16} />
                <div className={styles.frameChild17} />
                <div className={styles.frameChild18} /> */}
                {/* <div className={styles.div}>80%</div>
                <div className={styles.div1}>90%</div>
                <div className={styles.div2}>85%</div>
                <div className={styles.div3}>100%</div> */}
                {/* <div className={styles.softwareDevelopment}>
                    <p className={styles.wereADigital}>{`Software `}</p>
                    <p className={styles.wereADigital}>Development</p>
                </div>
                <div className={styles.graphicDesign1}>Graphic Design</div>
                <div className={styles.gameDesign}>Game Design</div>
                <div className={styles.webDevelopment}>
                    <p className={styles.wereADigital}>{`Web `}</p>
                    <p className={styles.wereADigital}>Development</p>
                </div> */}
                <img className={styles.groupIcon1} alt="" src="/group1.svg" />
                {/* <div className={styles.frameChild19} />
                <div className={styles.frameChild20} />
                <div className={styles.frameChild21} />
                <div className={styles.frameChild22} />
                <div className={styles.frameChild23} />
                <div className={styles.frameChild24} />
                <div className={styles.frameChild25} /> */}
            </Desktop >
        </div >

    )
}

export default About