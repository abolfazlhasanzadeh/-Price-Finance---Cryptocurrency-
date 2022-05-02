import React from 'react'
import './Coin.css'
export default function coin({name , image , symbol, price ,volume ,priceChenge ,marketcap }) {


  



  return (
    <div className='coin-container'>
        <div className='coin-row' >
            <div className='coin'>
                <img src={image} alt="crypto" />
                <h1>{name}</h1>
                <p className='coin-symbol'>{symbol}</p>
            </div>
            <div className='coin-data'>
                <p className='coin-price'>${price.toLocaleString()}</p>
                <p className='coin-volume'>${volume.toLocaleString()}</p>
                {priceChenge < 0 ? (
                  <p className='coin-percent red'>{priceChenge.toFixed(2)}%</p>
                ): (
                  <p className='coin-percent green'>{priceChenge.toFixed(2)}%</p>
                )}
                <p className='coin-marketcap'>
                  Mkt cap :${marketcap.toLocaleString()}
                </p>
            </div>
        </div>
    </div>
  )
}
