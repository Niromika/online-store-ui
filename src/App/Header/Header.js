import React from 'react';
import {Link} from "react-router-dom";
import styled from 'styled-components';

const HeaderStyled = styled.div`
    width: 100%;

    .header-wrapper {
        width: 90%;
        border-bottom: 1px solid orangered;
        margin: auto;
        padding: 10px 0;
        display: flex;
    }
    
    
    img {
      height: 60px; 
      transform: rotateY(180deg);
    }
    .nav {
        width: 100%;
        ul {
            width: inherit;
        }
        li {
            display: inline-block;
            margin: 18px;
            font-size: 14px;
            font-weight: 500;
            letter-spacing: 1px;

            &:hover {
               
            }

            .li {
                color:  ${({theme}) => theme.label.primary};
            }
        }
    }

    .h2 {
        color: #fff;
        font-weight: 700;
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
                                <Link to="/" className="li">HOME</Link>
                            </li>
                            <li>
                                <Link to="/login" className="li"><i class="fas fa-user"></i> <span>LOGIN</span></Link>
                            </li>
                            <li>
                                <Link to="/register" className="li">REGISTER</Link>
                            </li>
                            <li>
                                <Link to="/profile" className="li">PROFILE</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                
            </ HeaderStyled>
        );
    }
}

export default Header;