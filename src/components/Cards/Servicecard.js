import styles from "../../index.module.css"
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useMediaQuery } from "react-responsive"
import React, { useState, useRef } from 'react';
import style from "./service.module.css"
import "../../App.css"

const Servicecard = () => {

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

    const next = () => {
        sliderRef.current.slickNext();
    };

    const previous = () => {
        sliderRef.current.slickPrev();
    };
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
                <Slider ref={sliderRef} {...settings}>
                    <div className={style.parent}>
                        <div className={currentSlide === 0 ? style.center : style.side} key={0}>
                            <div className={style.card1} >
                                <img className={style.image} src="/vector.svg" />
                                <h2 className={style.webcontainer}>UI/UX Design</h2>
                                <p className={styles.p}>Website Design</p>
                                <p className={styles.p}>App Design</p>
                                <p className={styles.p}>User Stories</p>
                                <p className={styles.p}>User flow charts</p>
                                <p className={styles.p}>Wireframes</p>
                                <button className={style.btn}>
                                    <p className={style.p}>Learn More</p>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className={style.parent} >
                        <div className={currentSlide === 1 ? style.center : style.side} key={1}>
                            <div className={style.card1} >
                                <img className={style.image} src="/serviceicon.png" />
                                <h3>Development</h3>
                                <p className={styles.logonDesign}>Logon Design</p>
                                <p className={style.logonDesign}>Business Card</p>
                                <p className={style.logonDesign}>Stationery</p>
                                <p className={style.logonDesign}>Label Design</p>
                                <p className={style.logonDesign}>Letterhead</p>
                                <p className={style.logonDesign}>Billboard Design</p>
                                <p className={style.logonDesign}>etc...</p>
                                <button className={style.btn}>
                                    <p className={style.p}>Learn More</p>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className={style.parent}>
                        <div className={currentSlide === 2 ? style.center : style.side} key={2}>
                            <div className={style.card1} >
                                <img className={style.image} src="/group-4.svg" />
                                <h2 className={style.webcontainer}>Graphic Design</h2>
                                <p className={styles.logonDesign}>Logon Design</p>
                                <p className={style.logonDesign}>Business Card</p>
                                <p className={style.logonDesign}>Stationery</p>
                                <p className={style.logonDesign}>Label Design</p>
                                <p className={style.logonDesign}>Letterhead</p>
                                <p className={style.logonDesign}>Billboard Design</p>
                                <p className={style.logonDesign}>etc...</p>
                                <button className={style.btn}>
                                    <p className={style.p}>Learn More</p>
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* <div className="row">
                        <div className="col-lg-4">
                            <div className={currentSlide === 0 ? 'center' : 'side'} key={0}>
                                <img alt="" src="/vector.svg" />
                                <div className={styles.uiuxDesign}>
                                    <div className={styles.uiuxDesign}>UI/UX Design</div>
                                    <div className={styles.websiteDesignAppContainer}>
                                        <p className={styles.wereADigital}>Website Design</p>
                                        <p className={styles.wereADigital}>App Design</p>
                                        <p className={styles.wereADigital}>User Stories</p>
                                        <p className={styles.wereADigital}>User flow charts</p>
                                        <p className={styles.wereADigital}>Wireframes</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className={currentSlide === 1 ? 'center' : 'side'} key={1}>
                                <img className={styles.logoimg} src="/group-4.svg" />
                                <h2>Graphic Design</h2>
                                <div className={style.logonDesignBusiness}>
                                    <p className={styles.logonDesign}>Logon Design</p>
                                    <p className={style.logonDesign}>Business Card</p>
                                    <p className={style.logonDesign}>Stationery</p>
                                    <p className={style.logonDesign}>Label Design</p>
                                    <p className={style.logonDesign}>Letterhead</p>
                                    <p className={style.logonDesign}>Billboard Design</p>
                                    <p className={style.logonDesign}>etc...</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className={currentSlide === 2 ? 'center' : 'side'} key={2}>
                                <img alt="" src="/serviceicon.png" />
                                <h3>Development</h3>
                                <div className={style.logonDesignBusiness}>
                                    <p className={styles.logonDesign}>Logon Design</p>
                                    <p className={style.logonDesign}>Business Card</p>
                                    <p className={style.logonDesign}>Stationery</p>
                                    <p className={style.logonDesign}>Label Design</p>
                                    <p className={style.logonDesign}>Letterhead</p>
                                    <p className={style.logonDesign}>Billboard Design</p>
                                    <p className={style.logonDesign}>etc...</p>
                                </div>
                            </div>
                        </div>

                    </div> */}
                </Slider>
            </Mobile>
            <Desktop>
                <div className={styles.services1}>SERVICES</div>
                <div className={styles.rectangle1}>
                    {/* <div className={styles.groupChild3} />
                    <div className={styles.groupChild4} />
                    <div className={styles.groupChild5} />
                    <div className={styles.groupChild6} />
                    <div className={styles.groupChild7} />
                    <div className={styles.groupChild8} /> */}
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <img className={styles.frameInner} alt="" src="/group-4.svg" />
                        <div className={styles.graphicDesign}>Graphic Design</div>
                        <div className={styles.logonDesignBusinessContainer}>
                            <p className={styles.wereADigital}>Logon Design</p>
                            <p className={styles.wereADigital}>Business Card</p>
                            <p className={styles.wereADigital}>Stationery</p>
                            <p className={styles.wereADigital}>Label Design</p>
                            <p className={styles.wereADigital}>Letterhead</p>
                            <p className={styles.wereADigital}>Billboard Design</p>
                            <p className={styles.wereADigital}>etc...</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <img className={styles.frameInners} alt="" src="/serviceicon.png" />
                        <div className={styles.development}>Development</div>
                        <div className={styles.logonDesignBusinessContainer1}>
                            <p className={styles.wereADigital}>Logon Design</p>
                            <p className={styles.wereADigital}>Business Card</p>
                            <p className={styles.wereADigital}>Stationery</p>
                            <p className={styles.wereADigital}>Label Design</p>
                            <p className={styles.wereADigital}>Letterhead</p>
                            <p className={styles.wereADigital}>Billboard Design</p>
                            <p className={styles.wereADigital}>etc...</p>
                        </div>
                    </div>
                    {/* <div className={styles.ellipseDiv} />
                    <div className={styles.frameChild1} />
                    <div className={styles.frameChild2} />
                    <div className={styles.frameChild3} />
                    <div className={styles.frameChild4} />
                    <div className={styles.frameChild5} />
                    <div className={styles.frameChild6} />
                    <div className={styles.frameChild7} />
                    <div className={styles.frameChild8} />
                    <div className={styles.frameChild9} />
                    <div className={styles.frameChild10} />
                    <div className={styles.frameChild11} />
                    <div className={styles.frameChild12} />
                    <div className={styles.frameChild13} /> */}
                    <div className="col-lg-4">
                        <div className={styles.uiuxDesignParent}>
                            <div className={styles.uiuxDesign}>UI/UX Design</div>
                            <div className={styles.websiteDesignAppContainer}>
                                <p className={styles.wereADigital}>Website Design</p>
                                <p className={styles.wereADigital}>App Design</p>
                                <p className={styles.wereADigital}>User Stories</p>
                                <p className={styles.wereADigital}>User flow charts</p>
                                <p className={styles.wereADigital}>Wireframes</p>
                            </div>
                            {/* <div className={styles.groupChild9} />
                            <div className={styles.groupChild10} />
                            <div className={styles.groupChild11} />
                            <div className={styles.groupChild12} />
                            <div className={styles.groupChild13} /> */}
                        </div>
                    </div>
                    <img className={styles.vectorIcon} alt="" src="/vector.svg" />
                </div>
            </Desktop>
        </div>
    )
}

export default Servicecard