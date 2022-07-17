import React, { useState, useEffect } from 'react'
import 'semantic-ui-css/semantic.min.css'
import basket from './../icons/cart.png'
import logo from './../icons/logo.png'
import HoverRating from './Rating.jsx'
import LoaderHuge from './Loader.jsx'
import axios from 'axios'
import { useSelector } from 'react-redux'

// store
import store from '../store'
import { addCart, removeCart, total } from '../store/reducer'


const Main = () => {
  const cart = useSelector(state => state.cart)
  const cartTotal = useSelector(state => state.cartTotal)
  const [info, setInfo] = useState('')
  const [loading, setLoading] = useState(false)

  const api = axios.create({
    baseURL: 'https://run.mocky.io/v3/a8d03157-a077-44db-9746-695e18a7549e'
  })

  useEffect(() => {
    // eslint-disable-next-line
    if (!info.id) {
      api.get()
        .then(res => {
          setInfo(res.data)
          setLoading(true)
          console.log('SUCCESS!')
        })
        .catch(error => {
          setLoading(false)
          console.log('FAILURE!')
        })
    }
    console.log(store.getState())
    store.dispatch(total(cart))
    // eslint-disable-next-line
  }, [cart])

  return (
    <div className="container-fluid bg-light">
      {!loading &&
        <LoaderHuge />
      }
      <main>
        <header className="row header justify-content-center align-items-center px-2">
          <div className="col-12 bg-white shadow d-flex flex-column justify-content-center align-items-center p-2">
            <div className="logo shadow p-2 bg-white">
              <div className="hidden-box">
                <img src={logo} alt="logo" className="logo-image" />
              </div>
            </div>
            <div className="title my-2">
              <h1 className="h2">
                {info.name}
              </h1>
            </div>
            <div className="rate">
              <HoverRating />
            </div>
            <div className="address">
              <h6 className="my-2 fw-bolder">
                {info.address}
              </h6>
            </div>
          </div>
        </header>
        <div className="row items my-3 g-3">
          {(info && info.products.length) && info.products.map(product => {
            return (
              <div className="col-12 col-lg-3 col-sm-4" key={product.id}>
                <div className="item bg-white shadow d-flex flex-column justify-content-between align-items-center p-2">
                  <img src={product.image} alt="" className="mb-2" />
                  <span className="text-center">{product.name}</span>
                  <span>
                    <span>$ </span>
                    <span className="text-danger">{product.price}</span>
                  </span>
                  <div className="counter rounded border border-1 row my-2">
                    <div className="col-4 h-100 d-flex justify-content-center align-items-center pointer-event"
                      onClick={() => store.dispatch(addCart(product))}>+</div>
                    <div className="col-4 h-100 d-flex justify-content-center align-items-center bg-light">
                      {cart.filter(db => db.id === product.id).length}
                    </div>
                    <div className="col-4 h-100 d-flex justify-content-center align-items-center pointer-event"
                      onClick={() => store.dispatch(removeCart(product))}>-</div>
                  </div>
                </div>
              </div>
            )
          }
          )}
        </div>
      </main>
      <footer className="footer row justify-content-around align-items-center text-white text-center">
        <div className="col-4">
          <span>$</span>
          <strong className="h6 ms-2 m-0">
            {cart.length ? cartTotal : 0}
          </strong>
        </div>
        <div className="col-4">
          <h6>Basket</h6>
        </div>
        <div className="col-4 cart">
          <div className="count">
            {cart.length}
          </div>
          <div className="hidden-box">
            <img src={basket} alt="cart" className="cart-image" />
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Main