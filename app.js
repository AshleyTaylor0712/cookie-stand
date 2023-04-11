'use strict';

console.log('hi');

let cookieBox = document.getElementById('seattleList');
console.log(cookieBox);

let hours = ['6 am: ', '7 am: ', '8 am: ', '9 am: ', '10 am: ', '11 am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ',];

//Object that is storing min/max hourly cust. & avg cookies/cust in obj properties.
let seattleObj = {
  name: 'Seattle',
  min: 23,
  max: 65,
  avg: 6.3,
  cookiesSoldEveryHour: [],
  dailyTotal: 0,

  // This Method generates a rand # of cust/hour. (min/max inclusive)
  generateRandNumOfCust: function() {
    return Math.floor(Math.random() * (this.max - this.min + 1) ) + this.min;
  },

  //Calc & store the simulated amounts of cookies purchased each hour at the location using average cookies purchased and the rand. # of cust generated.
  calcCookiesHour: function() {
    for(let i = 0; i < hours.length; i++){
      let randomCust = this.generateRandNumOfCust();
      console.log(randomCust);
      let randomCookiesEachHour = Math.ceil(randomCust * this.avg);
      console.log (randomCookiesEachHour);
      this.cookiesSoldEveryHour.push(randomCookiesEachHour);
      console.log(this.cookiesSoldEveryHour);
    }
    
    
  },
   
      //loop to assign cookie numbers to hours
      timeList: function() {
        this.calcCookiesHour();
       for(let i = 0; i < hours.length; i++){
         let li = document.createElement('li');
         li.textContent = `${hours[i]}: ${this.cookiesSoldEveryHour[i]}`
         //li.textContent = this.generateRandNumOfCust();
         cookieBox.appendChild(li);
         
         
       }
          
          
        }
      
    

}


//console.log(seattleObj.generateRandNumOfCust());
seattleObj.timeList();
