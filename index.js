fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Csolana%2Cethereum%2Cpolkadot%2Ccardano&vs_currencies=usd&include_24hr_change=true')
    .then(res => res.json())
    .then(json => {
        const container = document.querySelector('.crypto-container');
        const coins = Object.getOwnPropertyNames(json);

        for (let coin of coins) {
            const coinInfo = json[`${coin}`];
            const price = coinInfo.usd;
            const change = coinInfo.usd_24h_change.toFixed(4);

            container.innerHTML += `
                <div class="coin ${change < 0 ? 'falling': 'rising'}">
                    <div class="coin-logo">
                        <img src="imgs/${coin}.png">
                    </div>

                    <div class="coin-name">
                        <h3>${coin.charAt(0).toUpperCase() + coin.slice(1)}</h3>
                    </div>

                    <div class="coin-price">
                        <span class="price">$${price}</span>
                        <span class="change">${change}</span>
                    </div>
                </div>
            `;
        }
    });

fetch('https://api.twelvedata.com/time_series?symbol=GOOGL,ORCL,MSFT,META,AAPL&interval=1min&apikey=24b0d87d97e94039b691ce3c8b8263f8')
    .then(res => res.json())
    // .then(res => console.log(res))
    .then(json => {
        const container = document.querySelector('.stock-container');
        const stocks = Object.getOwnPropertyNames(json);

        for (let stock of stocks) {
            const stockInfo = json[`${stock}`];
            const price = stockInfo.values[0].close;
            const change = (stockInfo.values[0].close - stockInfo.values[0].open).toFixed(4);

            container.innerHTML += `
                <div class="coin ${change < 0 ? 'falling': 'rising'}">
                    <div class="coin-logo">
                        <img src="imgs/${stock}.png">
                    </div>

                    <div class="coin-name">
                        <h3>${stock.charAt(0).toUpperCase() + stock.slice(1)}</h3>
                    </div>

                    <div class="coin-price">
                        <span class="price">$${price}</span>
                        <span class="change">${change}</span>
                    </div>
                </div>
            `;
        }
    });