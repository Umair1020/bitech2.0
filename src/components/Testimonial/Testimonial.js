import styles from "../../index.module.css"
import { useRef, useState } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useMediaQuery } from "react-responsive";
import style from "../Cards/service.module.css"

const Testimonial = () => {
    const sliderRef = useRef(null);

    const [currentSlide, setCurrentSlide] = useState(0)
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
                <Slider ref={sliderRef} {...settings}>
                    {/* <div>
                        <div className={currentSlide === 0 ? style.center : style.side} key={0}>
                            <div className={style.card1} >
                                <div className={style.serviceicon}> <br />
                                    <img className={style.image} src="/vector.svg" />
                                </div>
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
                    <div >
                        <div className={currentSlide === 1 ? style.center : style.side} key={1}>
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
                                <p className={style.logonDesign}>etc...</p>
                                <button className={style.btn}>
                                    <p className={style.p}>Learn More</p>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div >
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
                    </div> */}
                    <section id="testimonials" className="testimonials">

                        <div className="container" data-aos="fade-up">

                            <header className="section-header">
                                <h2>Testimonials</h2>
                                <p>What they are saying about us</p>
                            </header>

                            <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="200" >
                                <div className="swiper-wrapper">
                                    <div className={currentSlide === 0 ? "center" : "side"} key={0}>
                                        <div className="swiper-slide">
                                            <div className="testimonial-item">
                                                {/* <div class="stars">
                                                <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                                            </div> */}
                                                <p>
                                                    Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                                                </p>
                                                <div className="profile mt-auto">
                                                    <img src="/ellipse-17@2x.png" class="testimonial-img" alt="" />
                                                    <h3>Saul Goodman</h3>
                                                    <h4>Ceo &amp; Founder</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={currentSlide === 1 ? "center" : 'side'} key={1}>
                                        <div className="swiper-slide">
                                            <div className="testimonial-item">
                                                {/* <div class="stars">
                                                <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                                            </div> */}
                                                <p>
                                                    Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                                                </p>
                                                <div className="profile mt-auto">
                                                    <img src="/ellipse-18@2x.png" class="testimonial-img" alt="" />
                                                    <h3>Sara Wilsson</h3>
                                                    <h4>Designer</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={currentSlide === 2 ? "center" : 'side'} key={2}>
                                        <div className="swiper-slide" >
                                            <div className="testimonial-item">
                                                {/* <div class="stars">
                                                <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                                            </div> */}
                                                <p>
                                                    Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                                                </p>
                                                <div className="profile mt-auto">
                                                    <img src="/ellipse-19@2x.png" class="testimonial-img" alt="" />
                                                    <h3>Jena Karlis</h3>
                                                    <h4>Store Owner</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={currentSlide === 3 ? "center" : 'side'} key={3}>
                                        <div className="swiper-slide" >
                                            <div className="testimonial-item">
                                                {/* <div class="stars">
                                                <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                                            </div> */}
                                                <p>
                                                    Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
                                                </p>
                                                <div className="profile mt-auto">
                                                    <img src="/ellipse-17@2x.png" class="testimonial-img" alt="" />
                                                    <h3>Matt Brandon</h3>
                                                    <h4>Freelancer</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={currentSlide === 4 ? "center" : 'side'} key={4}>
                                        <div className="swiper-slide">
                                            <div className="testimonial-item">
                                                {/* <div class="stars">
                                                <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                                            </div> */}
                                                <p>
                                                    Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
                                                </p>
                                                <div className="profile mt-auto">
                                                    <img src="/ellipse-17@2x.png" class="testimonial-img" alt="" />
                                                    <h3>John Larson</h3>
                                                    <h4>Entrepreneur</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-pagination"></div>
                            </div>

                        </div>
                    </section>
                </Slider>
            </Mobile>
            <Desktop>
                <img className={styles.ellipseIcon} alt="" src="/ellipse-17@2x.png" />
                <img className={styles.frameChild26} alt="" src="/ellipse-18@2x.png" />
                <img className={styles.frameChild27} alt="" src="/ellipse-19@2x.png" />
                <img className={styles.frameChild28} alt="" src="/Group77.png" />
                <img className={styles.frameChild29} alt="" src="/group-10.svg" />
                <img className={styles.frameChild30} alt="" src="/group-10.svg" />
                <div
                    className={styles.loremIpsumIs4}
                >{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard `}</div>
                <div
                    className={styles.loremIpsumIs5}
                >{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard `}</div>
                <div
                    className={styles.loremIpsumIs6}
                >{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard `}</div>
                <div className={styles.johnDoe}>John Doe</div>
                <div className={styles.johnDoe1}>John Doe</div>
                <div className={styles.johnDoe2}>John Doe</div>
                <div className={styles.rectangleParent2}>
                    <div className={styles.groupChild14} />
                    <div className={styles.groupChild15} />
                    <div className={styles.groupChild16} />
                </div>
            </Desktop>
        </div>

    )
}

export default Testimonial