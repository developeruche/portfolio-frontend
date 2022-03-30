import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';

// import {Link} from "react-router-dom"  //this would be transformed to a next.JS router

import portfolio_action from "../../actions/pages_action"
import {ChasingDots} from "better-react-spinkit"
import Broswer from "./Broswer";
import Link from "next/link"

function Portfolio() {
    const [du_project, setDu_project] = useState([])

    useEffect(() => {
        async function fetch_project(){
            const res = await portfolio_action.home_page_requests()
            setDu_project(res)
        }
        fetch_project()
    }, [])
    return (
        <div>
            <section className="portfolio section" id="portfolio">
                <h2 className="section__title">Portfolio</h2>
                <span className="section__subtitle">Most recent Work</span>

                <div className="portfolio__container container swiper-container">
                <div className="swiper-wrapper">
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={1}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        onReachEnd={() => {console.log("Portfolio projects have reached it end.")}}
                        >
                        {
                            du_project ? du_project.map(project => {
                                return(
                                    <SwiperSlide key={project.id}>
                                        <div className="portfolio__content grid swiper-slide">
                                                {/* <img src={project.image.file_upload} alt="Portfolio One" className="portfolio__img" /> */}
                                                <Broswer image={project.main_image} />
            
                                                <div className="portfolio__data">
                                                    <h3 className="portfolio__title">{project.title}</h3>
                                                    <p className="portfolio__description">{project.short_description}</p>
                                                    <a href={project.demo_url} className="button button--flex button--small portfolio__button">
                                                        Demo
                                                        <i className="uil uil-arrow-right button__icon"></i>
                                                    </a>
                                                </div>

                                                
                                        </div>
                                    </SwiperSlide>
                                )
                            }) : (
                                <SwiperSlide>
                                        <div className="portfolio__content grid swiper-slide">
                                                <div className="portfolio__data">
                                                    <div className="loading_container">
                                                        <ChasingDots />
                                                    </div>
                                                </div>
                                        </div>
                                </SwiperSlide>
                            )
                        } 
                        <SwiperSlide>
                        <div className="portfolio__content grid swiper-slide last_project_slide">
                                <div className="portfolio__data">
                                    <h3 className="portfolio__title">@developeruche Project</h3>
                                    <p className="portfolio__description">Like what you see?? I am just getting started.</p>
                                    <Link href="/projects">
                                        <span className="button button--flex button--small portfolio__button">
                                            View All Projects
                                            <i className="uil uil-arrow-right button__icon"></i>
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                </div>
            </section>
        </div>
    )
}

export default Portfolio
