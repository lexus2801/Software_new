import React, { Component } from 'react';
import { connect } from 'react-redux';
import BuyProductPageBody from './BuyProductPageBody.js'
import Footer from '../ClientCommon/Footer';
import HomeHeader from '../ClientCommon/HomeHeader';

class ProductClientPage extends Component {
    constructor(props) {
        super(props); 
        this.state = {
        } 
        this.id=''
    }

    render() {
        const value = this.props.match.params.id;
        let id = value
        const { isLoggedIn } = this.props;
        return (
            <div>
                <HomeHeader isLoggedIn={isLoggedIn}/>
                <BuyProductPageBody id={id}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(ProductClientPage);
