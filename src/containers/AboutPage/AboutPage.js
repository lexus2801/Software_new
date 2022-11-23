import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeHeader from '../ClientCommon/HomeHeader.js';
import Footer from '../ClientCommon/Footer.js';
import AboutSection from '../Section/AboutSection.js';
import InfoSection from '../Section/InfoSection.js';
class AboutPage extends Component {
    render() {
        const { isLoggedIn } = this.props;
        return (
            <div className="sub_page">
                <div className='hero_area'>
                    <HomeHeader isLoggedIn={isLoggedIn}/>      
                </div>
                <AboutSection />
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

export default connect(mapStateToProps, mapDispatchToProps)(AboutPage);
