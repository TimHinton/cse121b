// import { get } from 'request';

// replace the "demo" apikey below with your own key from https://www.alphavantage.co/support/#api-key
var BTCurl = 'https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_WEEKLY&symbol=BTC&market=CNY&apikey=3CS91X3D308IIDV1';
var ETHurl = 'https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_WEEKLY&symbol=ETH&market=CNY&apikey=3CS91X3D308IIDV1';
var APLurl = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=AAPL&apikey=3CS91X3D308IIDV1';
var TESurl = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=TSLA&apikey=3CS91X3D308IIDV1';

const bitInfo = document.getElementById('bit');
const ethInfo = document.getElementById('eth');


async function getCryptoInfo(url, id) {
    const response = await fetch(url);
    const data = await response.json();
    //console.log(data);

    let meta = data["Meta Data"];
    //console.log(meta);

    let metaArray = Object.entries(meta);
    for ([key, value] of metaArray){
        let metaContainer = document.createElement("p");
        metaContainer.innerHTML = `${key} : ${value}`;
        id.appendChild(metaContainer);
    }

    let timeSeries = Object.keys(data)[1];
    let timeSeriesValues = data[timeSeries];
    let latestDate = Object.keys(timeSeriesValues).shift();

    let pricesToday = timeSeriesValues[latestDate];

    let todayArray = Object.entries(pricesToday);
    for ([key, value] of todayArray){
        let todayContainer = document.createElement("p");
        todayContainer.innerHTML = `${key} : ${value}`;
        id.appendChild(todayContainer);
    }
}

function Display () {
    reset();
    let sortValue = document.getElementById('display');

    let righty = document.getElementById('right_column');
    let lefty = document.getElementById('left_column');
    //console.log(sortValue.value);
    if (sortValue.value == "crypto") {
        lefty.textContent = 'Bitcoin';
        let addDivL = document.createElement("div");
        addDivL.id = "bit";
        lefty.appendChild(addDivL);

        righty.textContent = 'Etherium';
        let addDivR = document.createElement("div");
        addDivR.id = "eth";
        righty.appendChild(addDivR);

        const bitInfo = document.getElementById('bit');
        const ethInfo = document.getElementById('eth');
        getCryptoInfo(BTCurl, bitInfo);
        getCryptoInfo(ETHurl, ethInfo);

    } else if (sortValue.value == "stocks") {
        lefty.textContent = 'Apple';
        let addDivL = document.createElement("div");
        addDivL.id = "bit";
        lefty.appendChild(addDivL);

        righty.textContent = 'Tesla';
        let addDivR = document.createElement("div");
        addDivR.id = "eth";
        righty.appendChild(addDivR);

        const bitInfo = document.getElementById('bit');
        const ethInfo = document.getElementById('eth');
        getCryptoInfo(APLurl, bitInfo);
        getCryptoInfo(TESurl, ethInfo);
    }

}

function reset () {
    bitInfo.innerHTML = "";
    ethInfo.innerHTML = "";
}

getCryptoInfo(BTCurl, bitInfo);
getCryptoInfo(ETHurl, ethInfo);

document.getElementById('display').addEventListener('change', Display);

const thisYear = new Date();
document.querySelector('#year').textContent = thisYear.getFullYear();