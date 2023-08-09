import styles from "../../index.module.css"
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useMediaQuery } from "react-responsive"
import React, { useState, useRef } from 'react';
import style from "./service.module.css"
import "../../App.css"
import "animate.css"
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
                <br /> <br /> <br /> <br />
                <p className="text-secondary fw-bold text-center">Service</p>
                <h1 className="text-dark fw-bold text-center">Our Services & Our Goal</h1>
                <Slider ref={sliderRef} {...settings} className="animate__animated animate__backInLeft">

                    <div className={style.parent}>
                        <div className={currentSlide === 0 ? style.center : style.side} key={0}>
                            <div className={style.card4} >
                                <div className={style.serviceicon}> <br />
                                    <img className={style.image} src="/vector.svg" />
                                </div>
                                <h2 className={style.webcontainer}>UI/UX Design</h2>
                                <p className={styles.p}>Website Design</p>
                                <p className={styles.p}>App Design</p>
                                <p className={styles.p}>User Stories</p>
                                <p className={styles.p}>User flow charts</p>
                                <p className={styles.p}>Wireframes</p>
                                <button className={style.btn2}>
                                    <p className={style.p}>Learn More</p>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className={style.parent} >
                        <div className={currentSlide === 1 ? style.center : style.side} key={1}>
                            <div className={style.card1} >
                                <div> <br />
                                    <img className={style.image} src="/serviceicon.png" />
                                </div><br />
                                <h3>Development</h3>
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
                                <div><br />
                                    <img className={style.image} src="/group-4.svg" />
                                </div>
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

                </Slider>
            </Mobile>
            <Desktop>
                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center">
                        <p className="text-secondary fw-bold text-center">Service</p>
                        <h1 className="text-dark fw-bold text-center">Our Services & Our Goal</h1>
                        <div className="col-md-3 col-sm-6 mx-5" >

                            <div className={style.card1} >
                                <div> <br />
                                    <img className={style.image} src="/serviceicon.png" />
                                </div><br />
                                <h3>Development</h3>
                                <p className={styles.logonDesign}>Logon Design</p>
                                <p className={style.logonDesign}>Business Card</p>
                                <p className={style.logonDesign}>Stationery</p>
                                <p className={style.logonDesign}>Label Design</p>
                                <p className={style.logonDesign}>Letterhead</p>
                                <p className={style.logonDesign}>Billboard Design</p>
                                
                                <button className={style.btn}>
                                    <p className={style.p}>Learn More</p>
                                </button>

                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 mx-5" >

                            <div className={style.card2} >
                                <div className={style.serviceicon}> <br />
                                    <img className={style.image2} src="/vector.svg" />
                                </div>
                                <h2 className={style.webcontainer}>UI/UX Design</h2>
                                <p className={styles.p}>Website Design</p>
                                <p className={styles.p}>App Design</p>
                                <p className={styles.p}>User Stories</p>
                                <p className={styles.p}>User flow charts</p>
                                <p className={styles.p}>Wireframes</p>
                                <button className={style.btn2}>
                                    <p className={style.p}>Learn More</p>
                                </button>

                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 mx-5" >

                            <div className={style.card1} >
                                <div><br />
                                    <img className={style.image} src="/group-4.svg" />
                                </div>
                                <h2 className={style.webcontainer}>Graphic Design</h2>
                                <p className={styles.logonDesign}>Logon Design</p>
                                <p className={style.logonDesign}>Business Card</p>
                                <p className={style.logonDesign}>Stationery</p>
                                <p className={style.logonDesign}>Label Design</p>
                                <p className={style.logonDesign}>Letterhead</p>
                                <p className={style.logonDesign}>Billboard Design</p>
                               
                                <button className={style.btn}>
                                    <p className={style.p}>Learn More</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Desktop >

        </div >
    )
}

export default Servicecard