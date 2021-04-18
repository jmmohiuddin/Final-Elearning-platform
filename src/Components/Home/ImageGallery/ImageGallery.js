import React from 'react';
import image1 from '../../../images/alexandra-gorn-JIUjvqe2ZHg-unsplash.jpg'
import image2 from '../../../images/israa-hilles-xP0gM0Dh-MY-unsplash.jpg'
import image3 from '../../../images/joshua-coleman-LboV5Qpqm1E-unsplash.jpg'
import image4 from '../../../images/michael-oxendine-GHCVUtBECuY-unsplash.jpg'
import image5 from '../../../images/philipp-berndt-5i0GnoTTjSE-unsplash.jpg'
import image6 from '../../../images/stefen-tan-lYLeIM2W-cw-unsplash.jpg'
import image7 from '../../../images/im3rd-media-RTxQBPGA3IQ-unsplash.jpg'
import image8 from '../../../images/yeonhee-NmX5oj0w9tY-unsplash.jpg'
import './ImageGallery.css'
const ImageGallery = () => {
    return (
        <div className="mt-5">
            <div className="justify-content-center align-items-center d-flex"  >
                <div className="text-center"  style={{ borderBottom: "5px solid #f29702", }}>
                    <h1 >Discover The Latest Painting</h1>
                    <h1 className="mb-3">Working Design </h1>
                </div>
            </div>
            <div className="justify-content-center align-items-center d-flex mt-5 m-5">
                <div className="row rows">
                    <div className="column">
                        <img className="img-fluid" src={image1} alt="" />
                        <img className="img-fluid" src={image2} alt="" />
                    </div>
                    <div className="column">
                        <img className="img-fluid" src={image3} alt="" />
                        <img className="img-fluid" src={image4} alt="" />
                    </div>
                    <div className="column">
                        <img className="img-fluid" src={image5} alt="" />
                        <img className="img-fluid" src={image6} alt="" />
                    </div>
                    <div className="column">
                        <img className="img-fluid" src={image7} alt="" />
                        <img className="img-fluid" src={image8} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImageGallery;