import React, { Component } from 'react';
import { connect } from 'react-redux';
class InfoSection extends Component {

    render() {
        return (
            <section className='info_section layout_padding2'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="logo_detail">
                                <div className="logo-box">
                                    <a className="navbar-brand" href="index.html">
                                        <img src="assets/images/logo.png" alt="" />
                                        <span>
                                            Jetcycle
                                        </span>
                                    </a>
                                </div>
                                <p>
                                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
                                    in some form, by injected humour, or
                                </p>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="address_box">
                                <h6>
                                    Address
                                </h6>
                                <p>
                                    Available online in VietNam
                                </p>
                                <p>
                                    (+84) 789633504
                                </p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="link_box">
                                {/* <h6>
                                    Menu
                                </h6>
                                <ul className="  ">
                                    <li className=" ">
                                        <a className="" href="index.html">Home <span className="sr-only">(current)</span></a>
                                    </li>
                                    <li className="">
                                        <a className="" href="about.html">About </a>
                                    </li>
                                    <li className="">
                                        <a className="" href="product"> Our cycles </a>
                                    </li>
                                    <li className="">
                                        <a className="" href="contact.html">Contact us</a>
                                    </li>
                                </ul> */}
                            </div>
                        </div>
                    </div>
                    <div className="social_container">
                        <div className="social_box">
                            {/* <a href="">
                                <img src="assets/images/facebook-logo-button.png" alt="" />
                            </a>
                            <a href="">
                                <img src="assets.images/twitter-logo-button.png" alt="" />
                            </a>
                            <a href="">
                                <img src="assets/images/linkedin.png" alt="" />
                            </a>
                            <a href="">
                                <img src="assets/images/instagram.png" alt="" />
                            </a> */}
                        </div>
                    </div>
                </div>
            </section>
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

export default connect(mapStateToProps, mapDispatchToProps)(InfoSection);
