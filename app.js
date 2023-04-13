'use strict';

const tableElement = document.getElementById('CookieBox');

let hours = ['6 am: ', '7 am: ', '8 am: ', '9 am: ', '10 am: ', '11 am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ',];

let storeArray = [Seattle, Tokyo, Dubai, Paris, Lima];

//Creating lab07 constructor function.
function StoreFront(name, min, max , avg){
  this.cityName = name; //allows the cusomization of the property/value name. 
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.cookiesSoldEveryHour = [];
  this.dailyTotal = 0;
  this.generateRandNumOfCust = function() {
    return Math.floor(Math.random() * (this.max - this.min + 1) ) + this.min;
  }
};


  this.render = function(){
    this.id = `${this.Cityname}`;
  
  let cityArticle = document.createElement('article');
  cityArticle.setAttribute('id', this.id);

  this.calcCookiesHour = function() {
    for(let i = 0; i < hours.length; i++){
      let randomCust = this.generateRandNumOfCust();
      let randomCookiesEachHour = Math.ceil(randomCust * this.avg);
      this.cookiesSoldEveryHour.push(randomCookiesEachHour);
      this.dailyTotal += randomCookiesEachHour;
    }
};

this.tableRender = function () {
  this.calcCookiesHour();
  let firstRow = document.createElement('tr');
  tableElement.appendChild(firstRow);
  let cityName = document.createElement('td');
  cityName.textContent = this.name;
  firstRow.appendChild(cityName);

    for(let i = 0; i < hours.length; i++){
      let firstElem = document.createElement('td');
      firstElem.textContent = `${this.cookiesSoldEveryHour[i]}`
      firstRow.appendChild(firstElem);

}
    let total = document.createElement('td');
    total.textContent = this.dailyTotal
    firstRow.appendChild(total)
}
  }

  function renderHours() {
    let tr = document.createElement('tr');
    tableElement.appendChild(tr);
    let thElem = document.createElement('th');
    tr.appendChild(thElem);
    for (let i = 0; i < hours.length; i++) {
      let thElem = document.createElement('th');
      thElem.textContent = `${hours[i]}`
      tr.appendChild(thElem);
    }
    let total = document.createElement('th');
    total.textContent = "Daily Total"
    tr.appendChild(total);
  }
  
  
function storeSales() {
  let timeTotal = document.createElement('td');
  timeTotal.textContent = "Total Sales";
  tableElement.appendChild(timeTotal);
  let hourly2 = 0;
  for (let i = 0; i < hours.length; i++) {
    let hourly = 0;
    for (let j = 0; j < storeArray.length; j++) {
      hourly += storeArray[j].cookiesPerHourArray[i];
      hourly2 += storeArray[j].cookiesPerHourArray[i];
    }
    let timeTotal2 = document.createElement('td');
    timeTotal2.textContent = `${hourly}`;
    tableElement.appendChild(timeTotal2);
  }
  let timeTotal3 = document.createElement('td');
  timeTotal3.textContent = `${hourly2}`;
  tableElement.appendChild(timeTotal3);
}

let Seattle = new Store('Seattle', 23, 65, 6.3);
let Tokyo = new Store('Tokyo', 3, 24, 1.2);
let Dubai = new Store('Dubai', 11, 38, 3.7);
let Paris = new Store('Paris', 20, 38, 2.3);
let Lima = new Store('Lima', 2, 16, 4.6);



renderHours();
Seattle.tableRender();
Tokyo.tableRender();
Dubai.tableRender();
Paris.tableRender();
Lima.tableRender();
storeSales();
