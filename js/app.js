'use strict';

const tableElement = document.getElementById('CookieBox');

let hours = ['6 am: ', '7 am: ', '8 am: ', '9 am: ', '10 am: ', '11 am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ',];

//Creating lab07 constructor function.
function StoreFront(name, min, max, avg) {
  this.cityName = name; //allows the cusomization of the property/value name. 
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.cookiesSoldEveryHour = [];
  this.dailyTotal = 0;
  this.generateRandNumOfCust = function () {
    return Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
  };

  this.render = function () {
    this.id = `${this.Cityname}`;

    let cityArticle = document.createElement('article');
    cityArticle.setAttribute('id', this.id);
  };

  this.calcCookiesHour = function () {
    console.log('hi from calc cookies hour');
    for (let i = 0; i < hours.length; i++) {
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
    cityName.textContent = this.cityName;
    firstRow.appendChild(cityName);

    for (let i = 0; i < hours.length; i++) {
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
      console.log(storeArray[j].cookiesSoldEveryHour[i]);
      hourly += storeArray[j].cookiesSoldEveryHour[i];
      hourly2 += storeArray[j].cookiesSoldEveryHour[i];
    }
    let timeTotal2 = document.createElement('td');
    timeTotal2.textContent = `${hourly}`;
    tableElement.appendChild(timeTotal2);
  }
  let timeTotal3 = document.createElement('td');
  timeTotal3.textContent = `${hourly2}`;
  tableElement.appendChild(timeTotal3);
}

let Seattle = new StoreFront('Seattle', 23, 65, 6.3);
let Tokyo = new StoreFront('Tokyo', 3, 24, 1.2);
let Dubai = new StoreFront('Dubai', 11, 38, 3.7);
let Paris = new StoreFront('Paris', 20, 38, 2.3);
let Lima = new StoreFront('Lima', 2, 16, 4.6);

let storeArray = [Seattle, Tokyo, Dubai, Paris, Lima];

renderHours();
Seattle.tableRender();
Tokyo.tableRender();
Dubai.tableRender();
Paris.tableRender();
Lima.tableRender();
storeSales();

$('form').on('submit', function(event) {
  event.preventDefault(); // prevent the form from submitting and reloading the page

  // get the values from the form inputs
  let name = $('#store-name').val();
  let min = parseInt($('#min-customers').val());
  let max = parseInt($('#max-customers').val());
  let avg = parseFloat($('#avg-cookies').val());

  // create a new StoreFront object with the input values
  let newStore = new StoreFront(name, min, max, avg);

  // add the new store to the storeArray and render its table row
  storeArray.push(newStore);
  newStore.tableRender();

  // update the total sales row
  tableElement.deleteRow(-1); // delete the old total sales row
  storeSales(); // render the new total sales row
});
