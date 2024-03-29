const Mexc = require('../../dist/js/package')

const client = new Mexc.Spot()
client.config.apiKey = "mx0vgl790qpkEB4Qk2"
client.config.apiSecret = "63d6bdff7ad1470c87cd492684fb45a8"
const symbol = "SHXUSDT" 

let n = 1
let bought = 1
let sold = 1
let quantity = 0
let pepe = 0
let buyValue = 0
let sellValue = 0



    //while (n < 50) {
    while (0 == 0) {        

        const price = client.tickerPrice(symbol)  
        //console.log(price.price + horaFormateada)
        const ahora = new Date(); // Obtiene la fecha y hora actuales

  const horas = ahora.getHours().toString().padStart(2, '0'); // Obtiene las horas y las formatea
  const minutos = ahora.getMinutes().toString().padStart(2, '0'); // Obtiene los minutos y los formatea
  const segundos = ahora.getSeconds().toString().padStart(2, '0'); // Obtiene los segundos y los formatea
  const milisegundos = ahora.getMilliseconds().toString().padStart(3, '0'); // Obtiene los milisegundos y los formatea

  // Construye la cadena de hora con milisegundos en el formato deseado (ejemplo: "12:34:56.789")
  const horaFormateada = `${horas}:${minutos}:${segundos}.${milisegundos}`;
  
  console.log(price.price + " -- " + horaFormateada)
       /* if (n > 50 ){
        console.log("holkii")}
        n = n +1
        //console.log((buyValue+2) * 1.1)
       if ((price.price > 0) && (pepe == 0)){
            const sellPrice = client.newOrder(symbol, "SELL", "MARKET", { quantity: 250380})        
            console.log("vendido en " + sellPrice.price)          
            pepe = 1
        }*/
    }    

     //COMPRAR NTD
     while (bought  == 0 ){
        const buyPrice = client.newOrder(symbol, "BUY", "MARKET", { quoteOrderQty: 22})        
        if (buyPrice == 400) {
            console.log("No existe ese symbol")
            }
        else {
            console.log(buyPrice)
            quantity = buyPrice.origQty
            buyValue = buyPrice.price
            console.log("comprado en " + buyValue)
            console.log("número de tokens " + quantity)
            bought = 1
        }    
    }

    while (sold == 0) {

        const sellPrice = client.tickerPrice(symbol)
        sellValue = sellPrice.price
        console.log(sellValue)           
        buyValue = (buyValue * 1.1)
        if (n > 20) {
            const sellPrice = client.newOrder(symbol, "SELL", "MARKET", { quantity: quantity})        
            console.log("vendido en " + sellPrice.price)
            sold = 1
        }
        n = n +1
    }

    while (1  == 0 ){
        const sellPrice = client.newOrder(symbol, "SELL", "MARKET", { quantity: 26477829})   
        if (sellPrice == 400) {
            console.log("No existe ese symbol")
            }
        else {
            console.log(sellPrice)
            console.log("vendido en " + sellPrice.price)
        }    
    }


    