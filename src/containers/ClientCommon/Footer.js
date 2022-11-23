import React, { Component } from 'react';
import { connect } from 'react-redux';
class Footer extends Component {

    render() {
        return (
            <footer className='footer container-fluid footer_section'>
                <p>
                    &copy; 2019 All Rights Reserved By
                    <a href="https://html.design/">Free Html Templates</a>
                </p>
            </footer>
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

export default connect(mapStateToProps, mapDispatchToProps)(Footer);