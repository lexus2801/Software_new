import React, { Component } from 'react';
import { connect } from 'react-redux';

import NewsPageBody from './NewsPageBody'
import Footer from '../ClientCommon/Footer';
import HomeHeader from '../ClientCommon/HomeHeader';

class NewsClientPage extends Component {
    constructor(props) {
        super(props);   
    }
    render() {
        const { isLoggedIn } = this.props;
        return (
            <div>
                <HomeHeader isLoggedIn={isLoggedIn}/>
                <NewsPageBody/> 
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

export default connect(mapStateToProps, mapDispatchToProps)(NewsClientPage);
