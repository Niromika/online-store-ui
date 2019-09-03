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
                color:  ${({theme}) => theme.label.primary};
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
                        </ul>
                    </nav>
                </div>
                
            </ HeaderStyled>
        );
    }
}

export default Header;