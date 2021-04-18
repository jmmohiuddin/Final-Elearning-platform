import React, { useEffect, useState } from 'react';
import dumyImage from '../../../../images/wall-sheets.jpg'
import Review from '../Review/Review';
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import './Reviews.css'

const Reviews = () => {
    const [reviewData, setReviewData] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/allReviews')
            .then(res => res.json())
            .then(data => setReviewData(data))
    }, [])
    //<Review review={review}></Review>

    return (
        <div className="mt-5" style={{backgroundColor:'#ECF2FA'}}>
            <div className="justify-content-center align-items-center d-flex" >
                <div className="text-center mt-5" style={{ borderBottom: "5px solid #f29702" }}>
                    <h3>What Client Says About Us</h3>
                </div>
            </div>

            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="container">
                            <div className="row ms-5 mt-5">
                                {
                                    reviewData.map(review =>

                                        <div className="col-md-4 ">
                                            <div className="card" style={{ width: "18rem" }}>
                                                <div className="justify-content-center align-items-center d-flex mt-3">
                                                    <img src={review.photo} style={{ width: '50px', borderRadius: '50%' }} className="card-img-top img-fluid" alt="..." />
                                                </div>
                                                <div className="card-body text-center">
                                                    <div>
                                                        <h5 className="card-text">{review.name}</h5>
                                                        <h3 className="card-text">{review.company}</h3>
                                                        <p className="card-text">{review.description}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    )
                                }
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next " type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span className="carousel-control-next-icon bg-black" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;