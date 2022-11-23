import React, { Component } from 'react';
import queryString from 'query-string'
import { connect } from 'react-redux';
import ProductDetailPageBody from './ProductDetailPageBody.js'
import Footer from '../ClientCommon/Footer';
import HomeHeader from '../ClientCommon/HomeHeader';
import './ProductPage.scss'
class ProductDetailPage extends Component {
    constructor(props) {
        super(props); 
        this.id=''  
    }
    render() {
        const value=queryString.parse(this.props.location.search);
        let id=value.id;
        return (
            <div>
                <HomeHeader/>
                <ProductDetailPageBody id={id}/> 
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

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailPage);
