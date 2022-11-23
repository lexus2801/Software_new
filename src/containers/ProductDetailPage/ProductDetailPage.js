import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeHeader from '../../containers/ClientCommon/HomeHeader.js';
import Footer from '../../containers/ClientCommon/Footer.js';
import AboutSection from '../Section/AboutSection.js';
import ProductSection from '../Section/ProductSection.js';
import InfoSection from '../Section/InfoSection.js';
class ProductDetailPage extends Component {
    render() {
        return (
            <div className="sub_page">
                <div className='hero_area'>
                    <HomeHeader />      
                </div>
                <div className="layout_padding-top layout_padding2-bottom">
                    <ProductSection />
                    <ProductSection />
                    <ProductSection />
                </div>
                <InfoSection />
                <Footer />
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

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailPage);
