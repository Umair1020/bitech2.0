import styles from "../../index.module.css"
import { useRef, useState } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useMediaQuery } from "react-responsive";
import "animate.css"
import style from "../Cards/service.module.css"

const Testimonial = () => {
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
                    dots: true
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

                <section id="testimonials" className="testimonials animate__animated animate__backInLeft">



                        <header className="section-header">
                            <h2>Testimonials</h2>
                            <p className="testmonialpara">Our Services & Our Goal</p>
                        </header>
                        <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="200" >
                            <div className="swiper-wrapper">
                                <Slider ref={sliderRef} {...settings} >
                                    <div className={style.parent}>
                                        <div className={currentSlide === 0 ? style.center2 : style.side2} key={0}>
                                            <div className="swiper-slide">
                                                <div className="testimonial-item" key={0}>
                                                    <div className="profile mt-auto">
                                                        <img src="/ellipse-17@2x.png" class="testimonial-img" alt="" />
                                                        <img alt="" src="/group-10.svg" className="m-auto star" />
                                                        <h3>Saul Goodman</h3>
                                                        <h4>Ceo &amp; Founder</h4>
                                                    </div>
                                                    <p>
                                                        Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                                                    </p>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={style.parent}>
                                        <div className={currentSlide === 1 ? style.center2 : style.side2} key={1}>
                                            <div className="swiper-slide">
                                                <div className="testimonial-item">
                                                    <div className="profile mt-auto">
                                                        <img src="/ellipse-18@2x.png" class="testimonial-img" alt="" />
                                                        <img alt="" src="/group-10.svg" className="m-auto star" />
                                                        <h3>Sara Wilsson</h3>
                                                        <h4>Designer</h4>
                                                    </div>
                                                    <p>
                                                        Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                                                    </p>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={style.parent}>
                                        <div className={currentSlide === 2 ? style.center2 : style.side2} key={2}>
                                            <div className="swiper-slide" >
                                                <div className="testimonial-item" key={2}>
                                                    <div className="profile mt-auto">
                                                        <img src="/ellipse-19@2x.png" class="testimonial-img" alt="" />
                                                        <img alt="" src="/group-10.svg" className={`m-auto ${styles.star}`} />
                                                        <h3>Jena Karlis</h3>
                                                        <h4>Store Owner</h4>
                                                    </div>
                                                    <p>
                                                        Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                                                    </p>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={style.parent}>
                                        <div className={currentSlide === 3 ? style.center2 : style.side2} key={3}>
                                            <div className="swiper-slide" >
                                                <div className="testimonial-item" key={3}>
                                                    <div className="profile mt-auto">
                                                        <img src="/ellipse-17@2x.png" class="testimonial-img" alt="" />
                                                        <img alt="" src="/group-10.svg" className="m-auto" />
                                                        <h3>Matt Brandon</h3>
                                                        <h4>Freelancer</h4>
                                                    </div>
                                                    <p>
                                                        Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
                                                    </p>

                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    <div className={currentSlide === 4 ? style.center2 : style.side2} key={4}>
                                        <div className="swiper-slide">
                                            <div className="testimonial-item" >
                                                <div className="profile mt-auto">
                                                    <img src="/ellipse-17@2x.png" class="testimonial-img" alt="" />
                                                    <img alt="" src="/group-10.svg" className="m-auto" />
                                                    <h3>John Larson</h3>
                                                    <h4>Entrepreneur</h4>
                                                </div>
                                                <p>
                                                    Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
                                                </p>

                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                    </div>
                </section>
            </Mobile>
            <Desktop>
                <section id="testimonials" className="testimonials animate__animated animate__backInLeft">
                    <div className="container-fluid">
                        <header className="section-header">
                            <h2>Testimonials</h2>
                            <p className="testmonialpara">Our Services & Our Goal</p>
                        </header>
                        <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="200" >
                            <div className="swiper-wrapper">
                                <div class="row justify-content-center">

                                    <div class="col-xl-3 col-lg-3 mt-4" data-aos="fade-up">
                                        <div className={style.parent}>

                                            <div className="swiper-slide">
                                                <div className="testimonial-item" key={0}>
                                                    <div className="profile mt-auto">
                                                        <img src="/ellipse-17@2x.png" class="testimonial-img" alt="" /><br />
                                                        <img alt="" src="/group-10.svg" className={`m-auto ${styles.star}`} />
                                                        <h3>Saul Goodman</h3>
                                                        <h4>Ceo &amp; Founder</h4>
                                                    </div>
                                                    <p>
                                                        Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                                                    </p>

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-xl-3 col-lg-3 mt-4" data-aos="fade-up">
                                        <div className="swiper-slide">
                                            <div className="testimonial-item">
                                                <div className="profile mt-auto">
                                                    <img src="/ellipse-18@2x.png" class="testimonial-img" alt="" /><br />
                                                    <img alt="" src="/group-10.svg" className={`m-auto ${styles.star}`} />
                                                    <h3>Sara Wilsson</h3>
                                                    <h4>Designer</h4>
                                                </div>
                                                <p>
                                                    Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                                                </p>
                                            </div>
                                        </div>

                                    </div>
                                    <div class="col-xl-3 col-lg-3 mt-4" data-aos="fade-up">
                                        <div className="swiper-slide" >
                                            <div className="testimonial-item" key={2}>
                                                <div className="profile mt-auto">
                                                    <img src="/ellipse-19@2x.png" class="testimonial-img" alt="" /><br />
                                                    <img alt="" src="/group-10.svg" className={`m-auto ${styles.star}`} />
                                                    <h3>Jena Karlis</h3>
                                                    <h4>Store Owner</h4>
                                                </div>
                                                <p>
                                                    Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                                                </p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <img className={styles.ellipseIcon} alt="" src="/ellipse-17@2x.png" />
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
                </div> */}
            </Desktop>
        </div>

    )
}

export default Testimonial