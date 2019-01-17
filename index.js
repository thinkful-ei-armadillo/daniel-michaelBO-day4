// your code here

function getResults(){
  $('button').on('submit', function(event) {
    
    // also figured out that the find was not selecting the id properly 
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
        mathResult.push(`<div class="fizz-buzz-item"><span>$(i)</span></div>`);
      }
    }
  $('.js-results').append(mathResult); // moved here
  })
}

// accidentally put $('.js-results').append(mathResult); here, outside the function

