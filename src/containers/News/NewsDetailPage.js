import React, { Component } from 'react';
import { connect } from 'react-redux';
import Footer from '../ClientCommon/Footer';
import HomeHeader from '../ClientCommon/HomeHeader';
import NewsDetailPageBody from './NewsDetailPageBody.js';

class NewsDetailPage extends Component {
    constructor(props) {
        super(props);   
        this.id=''  
    }
    render() {
        const value = this.props.match.params.id;
        let id = value
        return (
            <div>
                <HomeHeader/>
                <NewsDetailPageBody id={id}/>
                <Footer/>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsDetailPage);
