import React, {Component} from 'react';
//import axiosс from 'axios';
import {connect} from 'react-redux';
import './Profile.css';
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import axios from '../../axios-baseUrl';

class Profile extends Component {

        state = {
            username: "",
            firstName: "",
            lastName: "",
            role: "",
            email: "",
            phone: 0,
            avatarUri: "",
            car: {}
        };

    componentDidMount() {
        // const AuthStr = 'Bearer '.concat("eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VybmFtZTIiLCJzY29wZSI6IlJPTEVfVVNFUiIsImV4cCI6MTU2NDc3NzI2M30.GIlikKV1unpxClqpabghxcUlnEhPjVvqVl7WnxevMltbfe_uBoK47wnFu2DMMn8WqVWGgmMJlnU1S88viKR44w");
        // axios.get('users/me', { headers: { Authorization: AuthStr } })
        //     .then(response => {
        //         // If request is good...
        //         console.log(response.data);
        //     })
        //     .catch((error) => {
        //         console.log('error ' + error);
        //     });

        // const token = sessionStorage.getItem("jwt");
        // let user = JSON.parse(sessionStorage.getItem('jwt'));
        // const token = user.data.id;

        axios.get('/users/me', { headers: {"Authorization" : this.props.token} })
            .then(response => {
                console.log(response);
                this.setState({
                    username: response.username,
                    firstName: response.firstName,
                    lastName: response.lastName,
                    role: response.role,
                    email: response.email,
                    phone: response.email,
                    avatarUri: response.avatarUri,
                    car: response.data.car
                });
            })
            .catch(error => {
                console.log(error);
            });
    }


    render() {

        return (
            <div className="Profile">
                <img src="https://www.w3schools.com/howto/img_avatar.png" alt="image"/>
                <ul>
                    <li><h1>Name: <span className="header">asad sasad{this.state.firstName} {this.state.lastName}</span></h1></li>
                    <li><h1>Username: <span className="header"> asdads{this.state.username}</span></h1></li>
                </ul>
                <hr/>
                <ul style={{paddingRight: 140}}>
                    <li><h2>Role: <span className="header">asad sasad</span></h2></li>
                    <li><h2>Rating as driver: <span className="header"> asdads{this.state.username}</span></h2></li>
                    <li><h2>Rating as passenger: <span className="header"> asdads{this.state.username}</span></h2></li>
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        loading: state.trip.loading,
        token: state.auth.token,
    }
};

//export default Profile;
export default connect(mapStateToProps)(withErrorHandler(Profile, axios));