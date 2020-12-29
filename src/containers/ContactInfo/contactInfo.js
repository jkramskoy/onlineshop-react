import React, { Component } from 'react';
import { connect } from 'react-redux';

class ContactInfo extends Component {

    componentDidMount = () => {
        console.log('ContactInfo', this.props.cartProducts);
    }

    render() {
        return (
            <div>
                <h2>Contact Info</h2>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        cartProducts: state.cartProducts
    }
}

export default  connect(mapStateToProps, null)(ContactInfo);
