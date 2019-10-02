import React from 'react';
import UserService from '../services/user.service';
import {Link} from 'react-router-dom';
import styled from 'styled-components';


const ProfileStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    .data-container {
        width: 400px;
        box-shadow: ${({theme}) => theme.box_shadow.category};
        background: ${({theme}) => theme.main.background_secondery};
        border-radius: 5px;
        padding: 14px;

        .data {
            font-weight: 500;
            font-size: 28px;
            height: 100%;
            color: #222;
        }
    }
`;
 
class Profile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            profile: {}
        }
    }

    componentDidMount() {
        UserService
            .me()
            .then( response => response.json())
            .then( user => {
                this.setState({
                    profile: user
                });
            });
    }

    render() {
        return (
            <ProfileStyled className="Profile">
                <div className="data-container">
                    <h1 className="title">Profile</h1>
                    <div className="data">{this.state.profile.first_name}</div>
                    <div className="data">{this.state.profile.last_name}</div>
                    <div className="data">{this.state.profile.email}</div>
                    <div className="data">{this.state.profile.bday}</div>
                    <Link to="/profile/edit">
                        <button className="btn btn-success edit">edit</button>
                    </Link>    
                </div>
            </ProfileStyled>
        );
    }
}

export default Profile;