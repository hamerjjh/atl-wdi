// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.
"use strict";
/// DO NOT EDIT ABOVE THIS LINE ///

var makeChange = function(price, payment) {
  // Your Code Here
  let changeLeft = Math.round(100*payment - 100*price);
  if (changeLeft <= 0) {return [0,0,0,0];
} else {
console.log(change);
const quarters = Math.floor(change / 25);  
change = change % 25;
const dimes = Math.floor(change / 10);  
change = change % 10;
const nickels = Math.floor(change / 5);  
change = change % 5;

}
  var changeLeft = [], quantity;

};

/// DO NOT EDIT BELOW THIS LINE ///
module.exports = {
  makeChange: makeChange
};
