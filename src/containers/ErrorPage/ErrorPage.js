import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ErrorPage.scss';

class ErrorPage extends Component {

    render() {

        return (
            <div className='bodyError'>
                <div className='number divError'>404</div>
                <div className='text divError'><span>Oops...</span><br />Page not found</div>
                <a className="me" href="https://codepen.io/uzcho_/pens/popular/?grid_type=list" target="_blank"></a>
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

export default connect(mapStateToProps, mapDispatchToProps)(ErrorPage);
