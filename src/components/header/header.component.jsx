import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import './header.styles.scss';
import { ReactComponent as Logo} from '../../assets/crown.svg';

const Header = () => (

    <div className='header'>
        <BrowserRouter>
            <Link className='logo-container' to='/'>
                <Logo className='logo'></Logo>
            </Link>
        </BrowserRouter>
            
        <div className='options'>
            <BrowserRouter>
                <Link className='option' to='/shop'>
                    SHOP
                </Link>
            </BrowserRouter>
            <BrowserRouter>
                <Link className='option' to='/shop'>
                    CONTACT
                </Link>
            </BrowserRouter>
            
        </div>
    </div>
    
)
export default Header;