import React, { Component } from 'react';
import { connect } from 'react-redux';
class SliderSection extends Component {
    render() {
        return (
            <section className=' slider_section position-relative'>
                <div className="jet_box">
                    <hr />
                    <h6>
                        motorcycle
                    </h6>
                    <hr />
                </div>
                <ol className="carousel-indicators indicator-2">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active indicator-li-1">01</li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1">02</li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2">03</li>
                </ol>
                <div className="container-fluid h-100">
                    <div className="row">
                        <div className="col-md-4 offset-md-1">
                            <div className="detail-box">
                                <h1>
                                    Xe Máy <br />
                                    <span>
                                        Motorcycle
                                    </span>
                                </h1>
                                <p>
                                    There are many variations of passages of Lorem Ipsum available.
                                </p>
                                <div className="btn-box">
                                    <a href="/product" className="btn-1">
                                        Shop Now
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7 px-0 h-100">
                            <div className="img_container h-100">
                                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                                    <ol className="carousel-indicators indicator-1">
                                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active indicator-li-1"></li>
                                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                    </ol>
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <div className="img-box">
                                                <img src="https://www.tigitmotorbikes.com/wp-content/uploads/2020/12/yamaha-grande.png" alt="" />
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <div className="img-box">
                                                <img src="https://sp-ao.shortpixel.ai/client/q_glossy,ret_img/http://hondahoangviet.com/wp-content/uploads/2019/01/Honda-SH-Mode-2020-Vang-Nau.png" alt="" />
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <div className="img-box">
                                                <img src="https://www.motoshop35.fr/17354-large_default/pack-performance-kawasaki-z1000sx-2017-2019.jpg" alt="" />
                                            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(SliderSection);
