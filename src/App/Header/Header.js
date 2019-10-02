import React from 'react';
import {Link} from "react-router-dom";
import styled from 'styled-components';
import CartButton from './CartButton/CartButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUserCircle, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const HeaderStyled = styled.div`
    .header-wrapper {
        width: ${({theme}) => theme.main.width};
        margin: ${({theme}) => theme.main.margin};
        border-bottom: ${({theme}) => theme.main.border};
        display: flex;
        margin-bottom: 30px;
        color: ${({theme}) => theme.color.primary};
    }
    
    
    img {
      height: 65px; 
      margin: 5px;
    }
    .nav {
        width: 100%;
        
        ul {
            width: inherit;
            display: flex;
            justify-content: space-between;
            align-items: center;

            li {
            display: inline-block;
            margin: 18px;
            font-size: 14px;
            font-weight: 500;
            letter-spacing: 1px;

            &:hover {
               
            }
            i {
                padding: 3px;
            }

            .fa-2x {
                    font-size: 1.8em;
                }

            .li {
                color: ${({theme}) => theme.color.primary};
            }
          }
        }
        
    }
`;


class Header extends React.Component  {

    render() {
        return (
            <HeaderStyled className="Header">
                <div className="header-wrapper">
                    <img src="http://happyhounds.ie/dog-boarding-kennels/wp-content/uploads/2018/08/dog-shop-logo-template-in-vector-format-300x243.png" alt=''/>
                    <nav className="nav">
                        <ul>
                            <div>
                                <li>
                                    <Link to="/" className="li"><FontAwesomeIcon icon={faHome} />HOME</Link>
                                </li>
                                <li>
                                    <Link to="/profile" className="li"><FontAwesomeIcon icon={faUserCircle} />PROFILE</Link>
                                </li>
                            </div>
                            <div>
                                <li>
                                    <Link to="/register" className="li">REGISTER</Link>
                                </li>
                                <li>
                                    <Link to="/login" className="li"><i class="fas fa-user"></i>LOGIN</Link>
                                </li>
                                <li>
                                    <Link to="/cart" className="li"><FontAwesomeIcon className="fa-2x" icon={faShoppingCart} /></Link>
                                </li>
                                <li>
                                    <CartButton />
                                </li>
                            </div>
                        </ul>
                    </nav>
                </div>
                
            </ HeaderStyled>
        );
    }
}

export default Header;