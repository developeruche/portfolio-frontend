import {useState} from 'react'

function ServicesSection() {
    const [onOne, setOnOne] = useState(false)
    const [onTwo, setOnTwo] = useState(false)
    const [onThree, setOnThree] = useState(false)
    const [onFour, setOnFour] = useState(false)
    const [onFive, setOnFive] = useState(false)




    return (
        <div>
        <section className="services section" id="services">
                <h2 className="section__title">Services</h2>
                <span className="section__subtitle">What i offer</span>

                <div className="services__container container grid">
                    <div className="services__content">
                        <div>
                            <i className="uil uil-web-grid services__icon"></i>
                            <h3 className="services__title">Web <br /> Designer</h3>
                        </div>

                        <span className="button button--flex button--small button--link services__button" onClick={()=> {
                            setOnOne(true)
                        }}>
                            View More
                            <i className="uil uil-arrow-right button__icon"></i>
                        </span>

                        <div className={`services__modal ${onOne ? "active-modal" : ""}`}>
                            <div className="services__modal-content">
                                <h4 className="services__modal-title">Web <br /> Designer</h4>
                                <i className="uil uil-times services__modal-close" onClick={() => {
                                    setOnOne(false)
                                    setOnTwo(false)
                                    setOnThree(false)
                                    setOnFour(false)
                                    setOnFive(false)
                                }}></i>

                                <ul className="services__modal-services grid">
                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p>I develop slick user interface</p>
                                    </li>
                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p>Web Page Development</p>
                                    </li>
                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p>I create quality UX element interaction</p>
                                    </li>
                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p>I develop optimized and excellent performing backend</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="services__content">
                        <div>
                            <i className="uil uil-arrow services__icon"></i>
                            <h3 className="services__title">Software <br /> Developer</h3>
                        </div>

                        <span className="button button--flex button--small button--link services__button" onClick={()=> {
                            setOnTwo(true)
                        }}>
                            View More
                            <i className="uil uil-arrow-right button__icon"></i>
                        </span>

                        <div className={`services__modal ${onTwo ? "active-modal" : ""}`}>
                            <div className="services__modal-content">
                                <h4 className="services__modal-title">Frontend <br /> Developer</h4>
                                <i className="uil uil-times services__modal-close" onClick={() => {
                                    setOnOne(false)
                                    setOnTwo(false)
                                    setOnThree(false)
                                    setOnFour(false)
                                    setOnFive(false)
                                }}></i>

                                <ul className="services__modal-services grid">
                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p>I develop slick GUI application</p>
                                    </li>
                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p>I development System software from the foundation</p>
                                    </li>
                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p>I develop software for Various application and env</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div className="services__content">
                        <div>
                            <i class="uil uil-mobile-android services__icon"></i>

                            <h3 className="services__title">Mobile App <br /> Designer</h3>
                        </div>

                        <span className="button button--flex button--small button--link services__button" onClick={()=> {
                            setOnThree(true)
                        }}>
                            View More
                            <i className="uil uil-arrow-right button__icon"></i>
                        </span>

                        <div className={`services__modal ${onThree ? "active-modal" : ""}`}>
                            <div className="services__modal-content">
                                <h4 className="services__modal-title">Mobile App <br /> Designer</h4>
                                <i className="uil uil-times services__modal-close" onClick={() => {
                                    setOnOne(false)
                                    setOnTwo(false)
                                    setOnThree(false)
                                    setOnFour(false)
                                    setOnFive(false)
                                }}></i>

                                <ul className="services__modal-services grid">
                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p>I develop slick flat design mobile application</p>
                                    </li>
                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p>I develop cross platform application</p>
                                    </li>
                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p>I carryout payment integration in application</p>
                                    </li>
                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p>I carryout backend implementation for these applications</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="services__content">
                        <div>
                            <i class="uil uil-bill services__icon"></i>
                            <h3 className="services__title">Payment <br /> Integration</h3>
                        </div>

                        <span className="button button--flex button--small button--link services__button" onClick={()=> {
                            setOnFour(true)
                        }}>
                            View More
                            <i className="uil uil-arrow-right button__icon"></i>
                        </span>

                        <div className={`services__modal ${onFour ? "active-modal" : ""}`}>
                            <div className="services__modal-content">
                                <h4 className="services__modal-title">Payment <br /> Integration</h4>
                                <i className="uil uil-times services__modal-close" onClick={() => {
                                    setOnOne(false)
                                    setOnTwo(false)
                                    setOnThree(false)
                                    setOnFour(false)
                                    setOnFive(false)
                                }}></i>

                                <ul className="services__modal-services grid">
                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p>I implement safe and reliable payment Integration</p>
                                    </li>
                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p>I work with Stripe</p>
                                    </li>
                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p>I work with paystack</p>
                                    </li>
                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p>I work with flutterwave</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="services__content">
                        <div>
                            <i class="uil uil-robot services__icon"></i>

                            <h3 className="services__title">Artificial <br /> Intelligence</h3>
                        </div>

                        <span className="button button--flex button--small button--link services__button" onClick={()=> {
                            setOnFive(true)
                        }}>
                            View More
                            <i className="uil uil-arrow-right button__icon"></i>
                        </span>

                        <div className={`services__modal ${onFive ? "active-modal" : ""}`}>
                            <div className="services__modal-content">
                                <h4 className="services__modal-title">Artificial <br /> Intelligence</h4>
                                <i className="uil uil-times services__modal-close" onClick={() => {
                                    setOnOne(false)
                                    setOnTwo(false)
                                    setOnThree(false)
                                    setOnFour(false)
                                    setOnFive(false)
                                }}></i>

                                <ul className="services__modal-services grid">
                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p>I carryout data analysis and prediction</p>
                                    </li>
                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p>I implement Machine learning</p>
                                    </li>
                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p>I implement Deep learning</p>
                                    </li>
                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p>I implement Neural Networks</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default ServicesSection
