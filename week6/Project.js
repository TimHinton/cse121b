// import { get } from 'request';

// replace the "demo" apikey below with your own key from https://www.alphavantage.co/support/#api-key
var BTCurl = 'https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_WEEKLY&symbol=BTC&market=CNY&apikey=3CS91X3D308IIDV1';
var ETHurl = 'https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_WEEKLY&symbol=ETH&market=CNY&apikey=3CS91X3D308IIDV1';

const bitInfo = document.getElementById('bit');
const ethInfo = document.getElementById('eth');

async function getCryptoBit(url, id) {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    let meta = data["Meta Data"];
    console.log(meta);

    let metaP = document.createElement("p");
    metaP.textContent = `${meta}`;
    id.appendChild(metaP);

    /*meta.forEach(element => {
        let para = document.createElement("p");
        para.innerHTML = element;
        id.appendChild(para);
    });*/

    let cryptoValue = data["Time Series (Digital Currency Weekly)"];
    let cryptoToday = cryptoValue.today;
    console.log(cryptoToday);
    
    /*cryptoValue.map( element => {
        let valueContainer = document.createElement("p");
        valueContainer.innerHTML = element;
        id.appendChild(valueContainer);
    })*/

    
    let cryptoP = document.createElement("p");
    cryptoP.innerHTML = cryptoValue;
    id.appendChild(cryptoP);
    
    //document.querySelector('#bit').innerHTML = html.join();
}


getCryptoBit(BTCurl, bitInfo);


const thisYear = new Date();
document.querySelector('#year').textContent = thisYear.getFullYear();
let day = thisYear.getDate();
let month = thisYear.getMonth() + 1;
let year = thisYear.getFullYear();
let today = `${year}-${month}-${day}`;