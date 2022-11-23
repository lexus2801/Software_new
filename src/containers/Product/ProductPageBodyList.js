import React, { Component } from 'react';
import queryString from 'query-string'
import { connect } from 'react-redux';
import './ProductPage.scss'
import Footer from '../ClientCommon/Footer';
import HomeHeader from '../ClientCommon/HomeHeader';
import {getProduct} from '../../services/productService';
import handleAddToCart from '../AddToCart/AddToCart';

class ProductPageBodyList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productList: [],
            total: ''
        }
        this.cart = []
    }

    componentDidMount(){
    //     let curent=this;
    handleAddToCart() 
        // productList && productList.map((item,index)=>{
           
        // })
    //     curent.setState({
    //         total: localStorage.getItem('total')
    //     })
    }
    // handleAddToCart = async (id)=>{
    //     handleAddToCart(id)
    //     this.props.handleAddToCartS()
    // }
    // handleAddToCart = async (id) => {
    //     let cart = this.cart
    //     let storage = localStorage.getItem('cart')
    //     if(storage){
    //         cart=JSON.parse(storage)
    //     }
    //     let product = await getProduct(id)
    //     let item = cart.find(c=>c.product.data.productId==id)
    //     if(item){
    //         item.quantity+=1
    //     }else{
    //         cart.push({product,quantity:1})
    //     }
    //     localStorage.setItem('cart',JSON.stringify(cart))
    // }
    render() {
        let productList = this.props.productList
        return (
            <main className="col-md-9">
                {
                productList && productList.map((item,index) =>{
                    return(
                    <article className="card card-product-list">
                        <div className="row no-gutters">
                            <aside className="col-md-5">
                                <a href="#" className="img-wrap">
                                    <span className="badge badge-danger"> NEW </span>
                                    <img src={item.productImage} />
                                </a>
                            </aside> 
                            <div className="col-md-4">
                                <div className="info-main">
                                    <a href="#" className="h5 title"> {item.productName} </a>
                                    <div className="rating-wrap mb-3">
                                        <ul className="rating-stars">
                                            <li  className="stars-active w-80"> 
                                                <i className="fa fa-star"></i> <i className="fa fa-star"></i> 
                                                <i className="fa fa-star"></i> <i className="fa fa-star"></i> 
                                                <i className="fa fa-star"></i> 
                                            </li>
                                            <li>
                                                <i className="fa fa-star"></i> <i className="fa fa-star"></i> 
                                                <i className="fa fa-star"></i> <i className="fa fa-star"></i> 
                                                <i className="fa fa-star"></i> 
                                            </li>
                                        </ul>
                                        <div className="label-rating">Best Choice</div>
                                    </div> 
                                    <p> {item.productShortDescription} </p>
                                </div>
                            </div> 
                            <aside className="col-sm-3">
                                <div className="info-aside">
                                    <div className="price-wrap">
                                        <span className="price h5"> ${item.productPrice} </span>	
                                        <del className="price-old"> ${item.productPrice*1.3}</del>
                                    </div>
                                    <br />
                                    <p>
                                        <div>
                                            <a href={`/product-detail?id=${item.productId}`} className="btn btn-primary btn-block">
                                                View
                                            </a>
                                            <a href={`/buyproductid=${item.productId}`} className="btn btn-primary btn-block" onClick={()=>handleAddToCart(item.productId)}>
                                                Buy
                                            </a>
                                        </div>
                                    </p>
                                </div>
                            </aside> 
                            
                        </div> 
                    </article>
                )})}  
            </main>
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

export default connect(mapStateToProps, mapDispatchToProps)(ProductPageBodyList);