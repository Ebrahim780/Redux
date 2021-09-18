import axios from 'axios';
import React, { Component } from 'react';
import logo from './../icons/logo.png';
import HoverRating from './rating';

class Header extends Component {
    state = {
        infoHeader: []
    }

    componentDidMount() {
        axios.get('data.json')
            .then(res => {
                this.setState({ infoHeader: res.data })
            })
    }

    render() {
        var info = this.state.infoHeader;
        return (
            <header className="row header justify-content-center align-items-center px-2">
                <div className="col-12 bg-white shadow d-flex flex-column justify-content-center align-items-center p-2">
                    <div className="logo shadow p-2 bg-white">
                        <div className="hidden-box">
                            <img src={logo} alt="logo" className="logo-image" />
                        </div>
                    </div>
                    <div className="title my-2">
                        <h1 className="h3">
                            {info.name}
                        </h1>
                    </div>
                    <div className="rate">
                        <HoverRating />
                    </div>
                    <div className="address">
                        <h6 className="my-2">
                            <b>آدرس: </b>
                            {info.address}
                        </h6>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;