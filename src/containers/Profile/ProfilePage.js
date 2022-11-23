import React, { Component } from 'react';
import { connect } from 'react-redux';
import BodyProfile from './BodyProfile.js'
import Footer from '../ClientCommon/Footer';
import HomeHeader from '../ClientCommon/HomeHeader';

class ProfilePage extends Component {
    constructor(props) {
        super(props);   
    }
    render() {
        const { isLoggedIn } = this.props;
        return (
            <div>
                <HomeHeader isLoggedIn={isLoggedIn}/>
                <BodyProfile/> 
                <Footer/>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
