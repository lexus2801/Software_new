import React, { Component } from 'react';
import { connect } from 'react-redux';
import HistoryOderPageBody from './HistoryOderPageBody.js'
import Footer from '../ClientCommon/Footer';
import HomeHeader from '../ClientCommon/HomeHeader';

class HistoryOderPage extends Component {
    constructor(props) {
        super(props); 
        this.state = {
        } 
    }

    render() {
        const { isLoggedIn } = this.props;
        return (
            <div>
                <HomeHeader isLoggedIn={isLoggedIn}/>
                <HistoryOderPageBody/>
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

export default connect(mapStateToProps, mapDispatchToProps)(HistoryOderPage);
