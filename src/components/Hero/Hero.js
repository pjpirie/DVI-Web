import React from 'react';
import './Hero.css';
import Video from '../../assets/video/icecreamCustom4_1.mp4';

const Hero = () => {
    return (
        <div className="Hero__Container">

            <div className="Hero__About__Section">
                <div className="Hero__About__Section__Text">
                    <h1 className="Gradient__Heading_Big">Mama's Always The Best</h1>

                    <h1 className="Gradient__Heading">Produced in the heart of Portobello since 1831, </h1>
                    <p>Mama’s is a family owned and run business, entrenched in the community of Edinburgh.  Learning how to make ice cream while working at a local hotel Amato Castiglione dreamt of starting his own business and managed to save just enough to begin production in the family home.
                    </p>
                </div>
            </div>
            <video autoPlay muted loop>
                <source src={Video} type="video/mp4" />
            </video>
        </div>
    );
}

export default Hero;
