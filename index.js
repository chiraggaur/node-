// const _ = require('lodash');

import _ from "lodash"; // 2 ways to import
import moment from "moment";


console.log(_.chunk(['a', 'b', 'c', 'd'], 2));

console.log(_.compact([0, 1, false, 2, '', 3]));

var users = [
    { 'user': 'barney', 'age': 36, 'active': true },
    { 'user': 'fred',   'age': 40, 'active': false }
  ];
   
  console.log(_.filter(users, function(o) { return !o.active; }));


  // moment

  console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));

  console.log(moment().format('dddd'));    

  console.log(moment("20150911", "YYYYMMDD").from("20141111"));


//   Check if the year 2020 is a leap year

console.log(moment().isLeapYear(2016));

// Check is 2010-01-01 date after 2018-01-01

console.log(moment("20100101").isAfter("20180101")); 

// adds 7 days to current date

console.log(moment().add(7, 'days').calendar());    

// adds 7 months to current date

console.log(moment().add(7, 'month').calendar());    

