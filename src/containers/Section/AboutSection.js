import React, { Component } from 'react';
import { connect } from 'react-redux';
class AboutSection extends Component {
    render() {
        return (
            <section className='about_section layout_padding'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 ">
                            <div className="img-box">
                                <img src="https://thitruongxemay.com/xe-lead-2018-mau-do/imager_6408.jpg" alt="" />
                            </div>
                        </div>
                        <div className="col-md-6 offset-md-1">
                            <div className="detail-box">
                                <div className="heading_container">
                                    <h2>
                                        about motocycle
                                    </h2>
                                </div>
                                <p>
                                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
                                    in some form, by injected humour, or randomised words which don't look even slightly believable.
                                </p>
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

export default connect(mapStateToProps, mapDispatchToProps)(AboutSection);
