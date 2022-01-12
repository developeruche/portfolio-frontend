import {useState, useEffect} from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';


// Importing Testimonial images
import testimonial__one from "../../assets/images/testimonial1.jpg"
import testimonial__two from "../../assets/images/testimonial2.jpg"
import testimonial__three from "../../assets/images/testimonial3.jpg"

import testimonial_action from "../../actions/pages_action"

function Testimonial() {
    const [du_testimonial, setDu_testimonial] = useState([])

    useEffect(() => {
        async function fetch_testimonial(){
            const res = await testimonial_action.testimonial_page_requests()
            setDu_testimonial(res)
        }
        fetch_testimonial()

    }, [])

    return (
        <>
            {
                du_testimonial ? (
                    <section class="testimonial section">
                    <h2 class="section__title">Testimonial</h2>
                    <span class="section__subtitle">My client saying</span>
    
                    <div class="testimonial__container container swiper-container">
                        <div class="swiper-wrapper">
                        <Swiper
                            spaceBetween={50}
                            slidesPerView={"2"}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                            >
                                {
                                    du_testimonial ? du_testimonial.map(testimonial => {
                                        return (
                                            <SwiperSlide>
                                                <div class="testimonial__content swiper-slide">
                                                <div class="testimonial__data">
                                                    <div class="testimonial__header">
                                                        <img src={testimonial.pics.file_upload} alt="" class="testimonial__img" />
                
                                                        <div>
                                                            <h3 class="testimonial__name">{testimonial.name}</h3>
                                                            <span class="testimonial__client">Client</span>
                                                        </div>
                                                    </div>
                
                                                    <div>
                                                        <i class="uil uil-star testimonial__icon-star"></i>
                                                        <i class="uil uil-star testimonial__icon-star"></i>
                                                        <i class="uil uil-star testimonial__icon-star"></i>
                                                        <i class="uil uil-star testimonial__icon-star"></i>
                                                        <i class="uil uil-star testimonial__icon-star"></i>
                                                    </div>
                                                </div>
                                                    <p class="testimonial__description">
                                                        {testimonial.text}
                                                    </p>
                                                
                                            </div>
                                            </SwiperSlide>
                                        )
                                    }) : ""
                                }
                                </Swiper>
                        </div>
                    </div>
                </section>
                ) : ""
            }
        </>
    )
}

export default Testimonial
