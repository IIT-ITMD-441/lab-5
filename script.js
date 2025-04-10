function f1() {
    let bill_total = parseFloat(document.getElementById("bill_total").value);
    let error = document.getElementById("error");

    if (isNaN(bill_total) || bill_total < 0) {
      error.innerHTML = "Input not valid";
      document.getElementById("bill_tax").value = "";
    } else if (bill_total > 0) {
      error.innerHTML = "";
      let bill_tax = ((bill_total * .11) + bill_total).toFixed(2);
      document.getElementById("bill_tax").value = bill_tax;
    } 

    reset();
}

function f4() {
  let range = document.getElementById("range");
  
  range.oninput = function() {
    document.getElementById("tip_amount").value = range.value;

    let bill_tax = parseFloat(document.getElementById("bill_tax").value);
    let tip_amount = parseFloat(document.getElementById("tip_amount").value);

    
      let total_tt = (bill_tax + tip_amount).toFixed(2);
      document.getElementById("total_tt").value = total_tt;
   
    
  }

  reset();
}

window.addEventListener('load', f4);

function reset(){
  let bill_total = parseFloat(document.getElementById("bill_total").value);
  let bill_tax = parseFloat(document.getElementById("bill_tax").value);
  let tip_amount = parseFloat(document.getElementById("tip_amount").value);
  let total_tt = parseFloat(document.getElementById("total_tt").value);
  let range = document.getElementById("range");

  if (bill_total === 0 ) {
    document.getElementById("bill_tax").value = "";
    document.getElementById("tip_amount").value = "";
    document.getElementById("total_tt").value = "";
    document.getElementById("range").value = 0;
}
}










  
            