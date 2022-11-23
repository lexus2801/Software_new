import React, { Component } from 'react';
import { connect } from 'react-redux';

class SubcribeSection extends Component {
    render() {
        return (
            <section className='subscribe_section layout_padding'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-7 mx-auto">
                            <div className="subscribe_form ">
                                <div className="heading_container">
                                    <h2>
                                        subscribe our newsletter
                                    </h2>
                                </div>
                                <form action="">
                                    <input type="email" placeholder="Enter your email" />
                                    <button>
                                        subscribe
                                    </button>
                                </form>
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

export default connect(mapStateToProps, mapDispatchToProps)(SubcribeSection);
