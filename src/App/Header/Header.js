import React from 'react';
import {Link} from "react-router-dom";
import styled from 'styled-components';

const HeaderStyled = styled.div`
    .header-wrapper {
        width: ${({theme}) => theme.main.width};
        margin: ${({theme}) => theme.main.margin};
        border-bottom: ${({theme}) => theme.main.border};
        padding: 10px 0;
        display: flex;
        margin-bottom: 30px;
    }
    
    
    img {
      height: 60px; 
      transform: rotateY(180deg);
    }
    .nav {
        width: 100%;
        
        ul {
            width: inherit;
            display: flex;
            justify-content: space-between;

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
                    <img src="/images/dog-logo.png" alt=''/>
                    <nav className="nav">
                        <ul>
                            <li>
                                <Link to="/" className="li"><i class="fas fa-home"></i>HOME</Link>
                            </li>
                            <li>
                                <Link to="/profile" className="li"><i class="far fa-user-circle"></i>PROFILE</Link>
                            </li>
                            <li>
                                <Link to="/register" className="li">REGISTER</Link>
                            </li>
                            <li>
                                <Link to="/login" className="li"><i class="fas fa-user"></i>LOGIN</Link>
                            </li>
                            <li>
                                <Link to="/cart" className="li"><i class="fas fa-shopping-cart"></i></Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                
            </ HeaderStyled>
        );
    }
}

export default Header;