import styles from "../../index.module.css"

const Testimonial = () => {
    return (
        <div>
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
        </div>
    )
}

export default Testimonial