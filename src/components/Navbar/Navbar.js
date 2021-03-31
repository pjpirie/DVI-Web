import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuItems } from './MenuItems/MenuItems';
import './Navbar.css';
import './Navbar.responsive.css';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import Logo from '../../assets/logo/Mamas_WordMark_NoBG.svg';



const Navbar = () => {

    const [clicked, setClicked] = useState(false);

    const handleClick = (e) => {
        setClicked(!clicked);
    }

    return (
        <div className="Navbar__Container">
            <nav className="Navbar__Items">
                <img className="Navbar__Logo" src={Logo} />
                <div className="Navbar__Menu__Icon" onClick={handleClick}>
                    {!clicked ? <MenuIcon /> : <CloseIcon />}
                </div>
                <ul className={clicked ? 'Navbar__Menu active' : 'Navbar__Menu'}>
                    {
                        MenuItems.map((item, index) => {
                            return (
                                <Link to={item.url} onClick={handleClick}>
                                    <li key={index}>
                                        <a className={item.cName}>{item.title}</a>
                                    </li>
                                </Link>
                            )
                        })
                    }
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
