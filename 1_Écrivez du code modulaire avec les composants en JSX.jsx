function Banner() {
    const title = "la maison jungle"
    return (<h1>{ title.toUpperCase() }</h1>)
  }
  function Cart() {
    const monsteraPrice = 8
    const lierrePrice = 10
    const bouquetPrice = 15
    
    return (<div>
      <h2>Panier</h2>
      <ul>
        <li>Monstera : {monsteraPrice}</li>
        <li>Lierre : {lierrePrice}</li>
        <li>Bouquet de fleurs : {bouquetPrice}</li>
      </ul>
        Total : {monsteraPrice+lierrePrice+bouquetPrice}€
      </div>)
  }
  
  ReactDOM.render(<div><Banner /><Cart /></div>, document.getElementById('root'))
