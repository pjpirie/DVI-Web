import React from 'react';
import './Footer.css';
import Logo from '../../assets/logo/Mamas_WordMark_NoBG.svg';

const Footer = () => {
    return (
        <div className="Footer__Container">

            <img className="Footer__Logo" src={Logo} />
            <p>Mama's Ice Cream LTD™ 2021©</p>
        </div>
    );
}

export default Footer;
