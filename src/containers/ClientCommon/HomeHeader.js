import React, { Component, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import * as actions from "../../store/actions";
import handleAddToCart, {getCartTotal} from '../AddToCart/AddToCart';
class HomeHeader extends Component {
    constructor(props){
        super(props);
        this.state = { 
            cartTotal:''
        }
        //const [cart, setCart] = useState([]);
        //this.total=0;
        // useEffect(()=>{
        //     localStorage.setItem('cart',JSON.stringify(cart))
        // },[cart]);
        // const getCartTotal = () =>{
        //     return cart.reduce((sum, {quantity}) => sum + quantity,0)
        // }
    }
    
    render() {
        const { processLogout } = this.props;
        return (
            <header className="header_section">
                <div className="container-fluid">
                    <nav className="navbar navbar-expand-lg custom_nav-container ">
                        <a className="navbar-brand" href="/home">
                            <img src="assets/images/logo.png" alt="" />
                            <span>
                                Jetcycle
                            </span>
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <div className="d-flex ml-auto flex-column flex-lg-row align-items-center">
                                <ul className="navbar-nav  ">
                                    <li className="nav-item" >
                                        <a className="nav-link" href="/about">Introduction <span className="sr-only">(current)</span></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/product">Motorcycle</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/historyorder"> History </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/news">News</a>
                                    </li>
                                    <li className="nav-item">
                                        {this.props.isLoggedIn ? <a className="nav-link" href="/profile"><i class="fa fa-user" aria-hidden="true"></i></a> : <a className="nav-link" href="/login"> Login </a>}
                                    </li>
                                    <li className="nav-item">
                                        <div className="nav-link" onClick={processLogout}>
                                        {this.props.isLoggedIn ?<i className="fa fa-sign-out" aria-hidden="true"></i>:<i></i>}
                                        </div>                        
                                    </li>
                                    
                                </ul>
                                <div className="quote_btn-container ">
                                    {/* <a href="" className="cart_link">
                                        <img src="assets/images/cart.png" alt="" />
                                        <span className="cart_number">{localStorage.getItem('total')}</span>
                                    </a> */}
                                    {/* <form className="form-inline ">
                                        <button className="btn  nav_search-btn" type="submit"></button>
                                    </form> */}
                                    
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        );
    }
}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processLogout: () => dispatch(actions.processLogout()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
