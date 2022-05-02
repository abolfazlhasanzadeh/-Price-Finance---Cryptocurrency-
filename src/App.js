import React , {useState, useEffect} from 'react';
import axios from "axios"
import './App.css';
import Coin from './Coin'


function App() {

  const [coins , setCoins] = useState([])

  const [search , setSearch] = useState('')

  useEffect(()=>{
    axios
    .get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false')
    .then(res=>{
      setCoins(res.data)
    }).catch(error=> console.log(error))
  },[]);



  const handleChengr = e => {
    setSearch(e.target.value)
  }


  const filtersCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
    )



  return (
    <div className="coin-app">
      <div className='coin-search'>
      <h1>search a currency</h1>
      <form>
        <input className='coin-input' type="text" placeholder='Search' onChange={handleChengr}/>
      </form>
      </div>
      {filtersCoins.map(coin =>{
        return(
          <Coin key={coin.id}
           name={coin.name}
           image={coin.image}
           symbol={coin.symbol}
           volume={coin.market_cap}
           price={coin.current_price}
           priceChenge={coin.market_cap_change_percentage_24h}
           marketcap={coin.market_cap}

           />
        )
      })}
    </div>
  );
}

export default App;
