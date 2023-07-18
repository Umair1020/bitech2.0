import styles from "../../index.module.css"

const Servicecard = () => {
    return (
        <div>
            <div className={styles.services1}>SERVICES</div>
            <div className={styles.rectangleParent1}>
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
        </div>
    )
}

export default Servicecard