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
  calculateTotal();
}

function f4() {
  let range = document.getElementById("range");

  range.oninput = function() {
    document.getElementById("tip_amount").value = range.value;
    calculateTotal();
  }
  reset();
}

function reset(){
  let bill_total = parseFloat(document.getElementById("bill_total").value);
  let bill_tax = parseFloat(document.getElementById("bill_tax").value);
  let tip_amount = parseFloat(document.getElementById("tip_amount").value);
  let total_tt = parseFloat(document.getElementById("total_tt").value);
  let converted_tip_amount = parseFloat(document.getElementById("tip_amount").value);
  let converted_total_tt = parseFloat(document.getElementById("total_tt").value);
  let range = document.getElementById("range");

  if (bill_total === 0 ) {
    document.getElementById("bill_tax").value = "";
    document.getElementById("tip_amount").value = "";
    document.getElementById("total_tt").value = "";
    document.getElementById("converted_tip_amount").value = "";
    document.getElementById("converted_total_tt").value = "";
    document.getElementById("range").value = 0;
  }
}

function test(){
  let dropdown = document.getElementById("dropdown");

  dropdown.oninput = function() {
    //let value = dropdown.value;
    //document.getElementById("idk").innerHTML = value;
    calculateTotal();
  }
}

function calculateTotal(){
  let bill_tax = parseFloat(document.getElementById("bill_tax").value) || 0;
  let tip_amount = parseFloat(document.getElementById("tip_amount").value) || 0;
  let value = document.getElementById("dropdown").value;
  let total_tt = bill_tax + tip_amount;

  if (bill_tax === 0 && tip_amount === 0) {
    document.getElementById("converted_total_tt").value = "";
    return;
  }

  document.getElementById("total_tt").value = total_tt.toFixed(2);
  document.getElementById("tip_amount").value = tip_amount.toFixed(2);
  

  if (value === "euro"){
    tip_amount = tip_amount * .95;
    total_tt = (bill_tax + tip_amount) * .95;
  }else if(value === "rupee"){
    tip_amount = tip_amount * 85;
    total_tt = (bill_tax + tip_amount) * 85;
  }

  document.getElementById("converted_total_tt").value = total_tt.toFixed(2);
  document.getElementById("converted_tip_amount").value = tip_amount.toFixed(2);
}

window.addEventListener("load", () => {
  f4();
  test();
});            