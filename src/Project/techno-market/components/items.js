import axios from 'axios';
import React, { Component } from 'react';

class Items extends Component {
    state = {
        products: []
    }

    componentDidMount() {
        axios.get('https://run.mocky.io/v3/a8d03157-a077-44db-9746-695e18a7549e')
            .then(res => {
                this.setState({ products: res.data.products })
            })
    }

    render() {
        return (
            <div className="row items my-3 g-3">
                {this.state.products.map(product => {
                    return (
                        <div className="col-12 col-lg-3 col-sm-4" key={product.id}>
                            <div className="item bg-white shadow d-flex flex-column justify-content-between align-items-center p-2">
                                <img src={product.image} alt="" className="mb-2" />
                                <span className="text-center">{product.name}</span>
                                <span>
                                    <span className="text-danger">{product.price}</span>
                                    <span> تومان</span>
                                </span>
                                <div className="counter rounded border border-1 row my-2">
                                    <div className="col-4 h-100 d-flex justify-content-center align-items-center pointer-event">+</div>
                                    <div className="col-4 h-100 d-flex justify-content-center align-items-center bg-light">0</div>
                                    <div className="col-4 h-100 d-flex justify-content-center align-items-center pointer-event">-</div>
                                </div>
                            </div>
                        </div>
                    )
                })
                }
            </div>
        );
    }
}

export default Items;