import Hero from '../../components/Hero/Hero';
import React from 'react';
import './Landing.css';
import './Landing.responsive.css';
import Map from '../../assets/map.png';
import VanIcon from '../../assets/SVG/Asset 3.svg';
import IceCreamGroupIcon from '../../assets/SVG/Asset 2.svg';
import IceCreamIcon from '../../assets/SVG/Asset 1.svg';
import Button from '@material-ui/core/Button';

const Landing = () => {
    return (
        <div className="Landing__Container Container">
            <Hero />
            <div className="Landing__Exp__Section">
                <div className="Landing__Exp__Section__Text">
                    <h2 className="Landing__Heading">The Mama's Experience</h2>
                </div>
                <div className="Landing__Exp__Item__Section">
                    <div className="Landing__Exp__Item">
                        <img src={VanIcon} />
                        <h3>Hear Our Van</h3>
                    </div>
                    <div className="Landing__Exp__Item">
                        <img src={IceCreamGroupIcon} />
                        <h3>See Our Selection</h3>
                    </div>
                    <div className="Landing__Exp__Item">
                        <img src={IceCreamIcon} />
                        <h3>Love Our Ice Cream</h3>
                    </div>
                </div>
            </div>
            <div className="Landing__Rewards__Section">
                <h1> Sign up for a Mama's Rewards Card</h1>
                <Button variant="contained" color="primary">Sign Up Now</Button>
            </div>
            <div className="Landing__Map__Section">
                <div className="Landing__Map__Section__Text">
                    <h2 className="Landing__Heading">Our Big Expansion</h2>
                    <p>We have recently decided to expand across the UK and want to maintain our local, family feel and nature.  This is not a small undertaking and we need to get it right first time.  We are approaching you to help us create an exciting and original campaign to help us.
                    We already have national distribution and placement deals with Waitrose and Sainsbury’s.  We are also investing in a high-profile Facebook strategy and have already bought considerable magazine advertising.
                    </p>
                </div>
                <div className="Landing__Map__Section__Map">
                    <img src={Map} alt="Map of Mama's Ice Cream Locations" />
                </div>
            </div>

        </div>
    );
}

export default Landing;
