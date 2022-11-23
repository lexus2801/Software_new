import React, { Component } from 'react';
import { connect } from 'react-redux';
class ClientSection extends Component {

    render() {
        return (
            <section className='client_section layout_padding'>
                <div className="container">
                    <div className="heading_container ">
                        <h2>
                            What is says our clients
                        </h2>
                    </div>
                    <div id="carouselExample2Indicators" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExample2Indicators" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExample2Indicators" data-slide-to="1"></li>
                            <li data-target="#carouselExample2Indicators" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="client_container layout_padding2">
                                    <div className="client_detail">
                                        <p>
                                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                                            alteration in
                                            some form, by injected humour, or randomised words which don't look even slightly believable.
                                        </p>
                                    </div>
                                    <div className="client_box ">
                                        <div className="img-box">
                                            <img src="assets/images/client.png " alt="" />
                                        </div>
                                        <div className="name">
                                            <h5>
                                                Randomised
                                            </h5>
                                            <h6>
                                                <span>
                                                    Lorem Ipsum
                                                </span>
                                                <img src="assets/images/quote.png" alt="" />
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="client_container layout_padding2">
                                    <div className="client_detail">
                                        <p>
                                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                                            alteration in
                                            some form, by injected humour, or randomised words which don't look even slightly believable.
                                        </p>
                                    </div>
                                    <div className="client_box ">
                                        <div className="img-box">
                                            <img src="assets/images/client.png " alt="" />
                                        </div>
                                        <div className="name">
                                            <h5>
                                                Randomised
                                            </h5>
                                            <h6>
                                                <span>
                                                    Lorem Ipsum
                                                </span>
                                                <img src="assets/images/quote.png" alt="" />
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="client_container layout_padding2">
                                    <div className="client_detail">
                                        <p>
                                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                                            alteration in some form, by injected humour, or randomised words which don't look
                                        </p>
                                    </div>
                                    <div className="client_box ">
                                        <div className="img-box">
                                            <img src="assets/images/client.png " alt="" />
                                        </div>
                                        <div className="name">
                                            <h5>
                                                Randomised
                                            </h5>
                                            <h6>
                                                <span>
                                                    Lorem Ipsum
                                                </span>
                                                <img src="assets/images/quote.png" alt="" />
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(ClientSection);
