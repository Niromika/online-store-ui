import React from 'react';
import UserService from '../services/user.service';
import './Profile.scss';
 
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
                console.log(this.state.profile);
            });
    }

    render() {
        return (
            <div className="Profile">
                <div className="data-container">
                    <h1 className="title">Profile</h1>
                    <div className="data">{this.state.profile.first_name}</div>
                    <div className="data">{this.state.profile.last_name}</div>
                    <div className="data">{this.state.profile.email}</div>
                    <div className="data">{this.state.profile.bday}</div>
                </div>
            </div>
        );
    }
}

export default Profile;