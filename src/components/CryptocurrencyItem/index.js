// Write your JS code here

import './index.css'

const CryptocurrencyItem = props => {
  const {cryptoDetails} = props
  const {currencyLogo, currencyName, euroValue, usdValue} = cryptoDetails

  return (
    <li className="bitcoin-details">
      <div className="bitcoin-logo-container">
        <img src={currencyLogo} alt={currencyName} className="bitcoin-image" />
        <p className="bitcoin-heading"> {currencyName} </p>
      </div>
      <p className="usd-heading-bitcoin"> {euroValue} </p>
      <p className="usd-heading-bitcoin"> {usdValue} </p>
    </li>
  )
}

export default CryptocurrencyItem
