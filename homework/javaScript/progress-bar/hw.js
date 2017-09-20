// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.

var timerUI = {
  drawNumericDisplay: function(timerValue){
    // sets the numeric display to the current value of the timer
    document.getElementById('numeric-display').textContent = timerValue;
  },
  drawProgressBars: function(timerValue){
    // Your Code Here
    const timePassed = 100 - timerValue;
    document.getElementsByClassName('progress-bar')[0].style.width = timePassed + '%';
  },
  drawLitFuses: function(timerValue){
    // Your Code Here
    var percentUnburnt = timerValue/100;
    document.getElementsByClassName('unburnt')[0].style.width = percentUnburnt*98 + '%';
    document.getElementsByClassName('burnt')[0].style.width = (1 - percentUnburnt)*98 + '%';
  },
  drawCrawlers: function(timerValue){
    // Your Code Here
    var timePassed = 100 - timerValue;
    if (timerValue%2 === 0) {
      document.getElementsByClassName('crawler')[0].style.marginTop = '0px';
    }
    else {
      document.getElementsByClassName('crawler')[0].style.marginTop = '10px';
    }
    document.getElementsByClassName('crawler')[0].style.marginLeft = (timePassed*10) + 'px';
  }
};
