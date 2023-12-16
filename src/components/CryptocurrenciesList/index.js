// Write your JS code here

import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrenciesList extends Component {
  state = {cryptoData: [], isLoading: true}

  componentDidMount() {
    this.getCryptoData()
  }

  getCryptoData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const responseData = await response.json()
    console.log(responseData)
    const updatedData = responseData.map(item => ({
      currencyLogo: item.currency_logo,
      currencyName: item.currency_name,
      euroValue: item.euro_value,
      id: item.id,
      usdValue: item.usd_value,
    }))
    this.setState({cryptoData: updatedData, isLoading: false})
  }

  renderCryptoDetails = () => {
    const {cryptoData} = this.state

    return (
      <div className="crypto-main-container">
        <h1 className="crypto-heading"> Cryptocurrency Tracker </h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="crypto-image"
        />
        <div className="coin-type-container">
          <div className="coin-rows-container">
            <p className="coin-heading"> Coin Type </p>
            <p className="usd-heading"> USD </p>
            <p className="usd-heading"> EURO </p>
          </div>
          {cryptoData.map(eachItem => (
            <CryptocurrencyItem cryptoDetails={eachItem} key={eachItem.id} />
          ))}
        </div>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return isLoading ? (
      <Loader type="Rings" color="#ffffff" height={80} width={80} />
    ) : (
      this.renderCryptoDetails()
    )
  }
}

export default CryptocurrenciesList
