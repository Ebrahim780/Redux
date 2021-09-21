import Head from 'next/head'
import { API } from './api';
import React, { useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Rate } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';
import Image from 'next/image';

export default function Home() {
    const [data, setData] = useState('');
    const [loading, setLoading] = useState(false);
    const [cart, setCart] = useState([]);
    const [cartTotal, setCartTotal] = useState(0);

    useEffect(() => {
        if (!data.id) {
            const config = {
                url: '/a8d03157-a077-44db-9746-695e18a7549e',
                apiVersion: 'api'
            };
            API.get(config)
                .then(res => {
                    setData(res.data);
                    setLoading(false);
                    console.log('SUCCESS!!');
                })
                .catch(error => {
                    setLoading(false);
                    console.log('FAILURE!!');
                });
        }

        total();

    }, [cart])

    const addToCart = (el) => {
        setCart([...cart, el])
    }

    const removeFromCart = (el) => {
        let copy = [...cart];
        let otherItems = copy.filter((cartItem) => cartItem.id !== el.id);
        let removeOneQuantity = copy.filter(i => i.id === el.id);
        removeOneQuantity.pop();
        setCart([...otherItems, ...removeOneQuantity]);
    };

    const total = () => {
        let totalVal = 0;
        for (let i = 0; i < cart.length; i++) {
            totalVal += cart[i].price;
        }
        setCartTotal(totalVal);
    };

    return (
        <div className="container-fluid bg-light">
            {!loading &&
                <Loader
                    type="Puff"
                    color="#00BFFF"
                    height={100}
                    width={100}
                    timeout={1000}
                    className="loading"
                />
            }
            <Head>
                <title>Single Market Store</title>
                <meta name="description" content="single market store" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <div className="row header justify-content-center align-items-center px-2">
                    <div
                        className="col-12 bg-white shadow d-flex flex-column justify-content-center align-items-center p-2">
                        <div className="logo shadow p-2 bg-white">
                            <Image src='/images/logo.png' alt="logo" width="100%" height="100%" />
                        </div>
                        <div className="title my-2">
                            <h1 className="h3">Techno Market</h1>
                        </div>
                        <div className="rate d-flex justify-content-center align-items-center">
                            <span className="mx-2">{data.rate_average}</span>
                            {data.average ? <Rate readOnly defaultValue={data.rate_average} allowHalf /> :
                                <Rate readOnly defaultValue={3} />}
                            <span className="mx-2">{data.rate_count}</span>
                        </div>
                        <div className="address">
                            <h6 className="my-2">{data.address}</h6>
                        </div>
                    </div>
                </div>
                <div className="row items my-3 g-3">
                    {(data && data.products.length) && data.products.map(product => {
                        return <div className="col-12 col-lg-3 col-sm-4" key={product.id}>
                            <div
                                className="item bg-white shadow d-flex flex-column justify-content-between align-items-center p-2">
                                <img src={product.image} alt="image" className="mb-2" width="100%" height="100%" />
                                <span className="text-center">{product.name}</span>
                                <span>$ <span className="text-danger">{product.price}</span></span>
                                <div className="counter rounded border border-1 row my-2">
                                    <div
                                        className="col-4 h-100 d-flex justify-content-center align-items-center pointer-event"
                                        onClick={() => {addToCart(product)}}>+
                                    </div>
                                    <div
                                        className="col-4 bg-light h-100 d-flex justify-content-center align-items-center">
                                        {cart.filter(t => t.id === product.id).length}
                                    </div>
                                    <div className="col-4 h-100 d-flex justify-content-center align-items-center"
                                        onClick={() => {
                                            removeFromCart(product)
                                        }}>-
                                    </div>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </main>
            <footer className="row justify-content-around align-items-center text-white">
                <div className="col-4 text-center">
                    $ <strong className="h6">{cart.length ? cartTotal : 0}</strong>
                </div>
                <div className="col-4 text-center">
                    <h6>Basket</h6>
                </div>
                <div className="col-4 text-center cart">
                    <div className="count">{cart.length}</div>
                    <Image src="/images/cart.png" alt="cart" className="ml-2" width={25} height={25} />
                </div>
            </footer>
        </div>
    )
}