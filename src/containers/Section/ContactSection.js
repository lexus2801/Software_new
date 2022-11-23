import React, { Component } from 'react';
import { connect } from 'react-redux';
class ContactSection extends Component {
    render() {
        return (
            <section className='contact_section'>
                <div className="contact_container">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="contact_form layout_padding">
                                    <div className="heading_container">
                                        <h2>
                                            Get in touch
                                        </h2>
                                    </div>
                                    <form action="">
                                        <input type="text" placeholder="Full name " />
                                        <div className="top_input">
                                            <input type="email" placeholder="Email" />
                                            <input type="text" placeholder="Phone Number" />
                                        </div>

                                        <input type="text" placeholder="Message" className="message_input" />
                                        <button>
                                            Send
                                        </button>
                                    </form>
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

export default connect(mapStateToProps, mapDispatchToProps)(ContactSection);
