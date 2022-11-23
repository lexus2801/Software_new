import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeHeader from '../ClientCommon/HomeHeader.js';
import Footer from '../ClientCommon/Footer.js';
import InfoSection from '../Section/InfoSection';
import ContactSection from '../Section/ContactSection';
class ContactPage extends Component {
    render() {
        return (
            <div className="sub_page">
                <div className='hero_area'>
                    <HomeHeader />      
                </div>
                <ContactSection />
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

export default connect(mapStateToProps, mapDispatchToProps)(ContactPage);
