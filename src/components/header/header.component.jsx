import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import './header.styles.scss';
import { ReactComponent as Logo} from '../../assets/crown.svg';
import { auth } from "../../firebase/firebase.utils";

const Header = ({currentUser}) => (

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
                {
                    currentUser ? 
                    <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
                    :
                    <Link className="option" to='/signin'>SIGN IN</Link>
                }
            </BrowserRouter>
            
        </div>
    </div>
    
)
export default Header;