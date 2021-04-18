import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

const Review = ({ review }) => {
    console.log(review.photo)




    return (

        // <div className="col-md-3 mt-5" style={{ boxShadow: "0 0 5px grey" }}>
            <Carousel
                plugins={[
                    'infinite',
                    'arrows',
                    {
                        resolve: slidesToShowPlugin,
                        options: {
                            numberOfSlides: 2
                        }
                    },
                ]}
            >
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
            </Carousel>
        // </div>

    );
};

export default Review;