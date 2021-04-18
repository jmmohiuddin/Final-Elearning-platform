import React from 'react';
import paint from '../../../images/yeonhee-NmX5oj0w9tY-unsplash.jpg'
import Typical from 'react-typical'
const Header = () => {
    return (
        <div className="container mt-3 text-black" >
            <div className="row">
                <div className="col-md-6 justify-content-center align-items-center d-flex MS-3" >
                    <div style={{ borderLeft: "10px solid #41A4DF", }}>
                        <h1  className="ms-3">The Best Quality<br />Painting For Your Home</h1>
                        <Typical style={{color:'#41A4DF'}} className="ms-3"
                            steps={['Quality Panting', 2000, 'Wall Painting!', 2000, 'Wall Sheets!', 2000, ]}
                            loop={Infinity}
                            wrapper="p"
                        />
                    </div>
                </div>
                <div className="col-md-6 mt-3">
                    <img className="img-fluid mb-3" src={paint} alt="imag" style={{ width: "800px", backgroundSize: "cover", height:'600px' }} />
                </div>
            </div>

        </div>
    );
};

export default Header;