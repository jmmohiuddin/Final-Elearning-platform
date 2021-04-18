import React from 'react';
import { Link } from 'react-router-dom';
import Zoom from 'react-reveal/Zoom';
import { useSpring, animated } from 'react-spring'
const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`


const Service = ({ service }) => {
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))

    return (
        <Link to={`/service/${service._id}`} className="col-md-4 mt-5" style={{ textDecoration: "none" }}>
            <div>
                <div className="card" style={{ width: "18rem", boxShadow: "0px 0px 10px grey" }}>
                    <animated.div
                        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                        onMouseLeave={() => set({ xys: [0, 0, 1] })}
                        style={{ transform: props.xys.interpolate(trans) }}
                    >
                        <img src={service.imageURL} className="card-img-top img-fluid" alt="..." />
                    </animated.div>


                    <div className="card-body text-center">
                        <div>
                            <h5>{service.name}</h5>
                            <h3>$ {service.price}</h3>
                            <p className="card-text">{service.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Service;