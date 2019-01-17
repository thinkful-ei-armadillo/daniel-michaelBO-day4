/* global $ */
'use strict';

function getResults(){
  $('#numberchooser').on('submit', function(event) {
    
    event.preventDefault();
  
    $('.js-results').empty();
    const inputNum = $('#number-choice').val();    
    let mathResult = [];

    for ( let i = 1; i <= inputNum; i++ ) {
      if ( i % 15 === 0 ) {
        mathResult.push($('<div class="fizz-buzz-item"><span>fizzbuzz</span></div>'));
      }
      else if ( i % 5 === 0 ) {
        mathResult.push($('<div class="fizz-buzz-item"><span>buzz</span></div>'));
      }
      else if ( i % 3 === 0 ) {
        mathResult.push($('<div class="fizz-buzz-item"><span>fizz</span></div>'));
      }
      else {
        mathResult.push($(`<div class="fizz-buzz-item"><span>$(i)</span></div>`));
      }
    }
    
    $('.js-results').append(mathResult);
  });
}

