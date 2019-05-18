function checktext() {
  let userAnswer = document.getElementById('stupid').value.toLowerCase();
  alert(userAnswer)
  if ( userAnswer.length >= 10  ){
      if(userAnswer == "695hmiukf8gdlpa"){
        alert("YEY! CODE CORRECT!");
        let urli = new URL(window.location.href).pathname
          fetch('https://stupidhack-addiktio.herokuapp.com/complete' + urli, {
          method: 'POST'
        })
      }
      else{
        alert("STUPUUD! TRYE AGAIN!");
      }
    }
    else {
      alert( "TOTALLY WRONG CODE");
    }
  }
