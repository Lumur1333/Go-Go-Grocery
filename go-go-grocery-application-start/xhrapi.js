let dealsSection = document.getElementById('deals');

//Store the request URL
let requestURL = 'https://lumur1333.github.io/Go-Go-Grocery/go-go-grocery-application-start/dailydeals.json';

//create a new XHR object
let request = new XMLHttpRequest();

//open the request
request.open('GET', requestURL);

//set up response type
request.responseType = 'json';

//send the request using send();
request.send();

request.onload = function () {
    let dailyDeals = request.response;
    console.log(dailyDeals);
    dealInfo(dailyDeals);
};

function dealInfo(jsonObj) {
    let dealInfo = jsonObj['dailyDeals'];

    for (let i = 0; i < dealInfo.length; i++) {
        let div = document.createElement('div');
        div.setAttribute('class', 'col-md-3');
        let desc = document.createElement('h3');
        let price = document.createElement('p');
        let image = document.createElement('img');

        image.setAttribute('src', 'https://lumur1333.github.io/Go-Go-Grocery/go-go-grocery-application-start/images/' + dealInfo[i].image);
        image.setAttribute('alt', dealInfo[i].item);
        desc.textContent = dealInfo[i].item;
        price.textContent = '$' + dealInfo[i].price

        div.appendChild(desc);
        div.appendChild(price);
        div.appendChild(image);
        dealsSection.appendChild(div);
    }
}