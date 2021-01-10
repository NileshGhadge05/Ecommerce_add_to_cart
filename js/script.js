var product_total_amt = document.getElementById('product_total_amt');
var total_cart_amt = document.getElementById('total_cart_amt');
var shipping_charge = document.getElementById('shipping_charge');
var discountCode = document.getElementById('discount_code1');

const decreaseNumber = (incrdecr,itemprice) => {
  var itemval = document.getElementById(incrdecr);
  var itemprice = document.getElementById(itemprice);
  //console.log(itemval.value);

  if(itemval.value <= 0) {
    itemval.value = 0;
  }else {
    itemval.value = parseInt(itemval.value) - 1;
    itemval.style.background = '#fff';
    itemval.style.color = '#4f4f4f';
    itemprice.innerHTML = parseInt(itemprice.innerHTML) - 12;
    product_total_amt.innerHTML = parseInt(product_total_amt.innerHTML) - 12;
    total_cart_amt.innerHTML = parseInt(product_total_amt.innerHTML) + parseInt(shipping_charge.innerHTML);
  }
}

const increaseNumber = (incrdecr,itemprice) => {
  var itemval = document.getElementById(incrdecr);
  var itemprice = document.getElementById(itemprice);
  //console.log(itemval.value);

  if(itemval.value >= 50) {
    itemval.value = 50;
    alert('Max 50 allowed!');
    itemval.style.background = 'red';
    itemval.style.color = '#fff';
  }else {
    itemval.value = parseInt(itemval.value) + 1;
    itemprice.innerHTML = parseInt(itemprice.innerHTML) + 12;
    product_total_amt.innerHTML = parseInt(product_total_amt.innerHTML) + 12;
    total_cart_amt.innerHTML = parseInt(product_total_amt.innerHTML) + parseInt(shipping_charge.innerHTML);
  }
}

const discount_code = () => {
  let totalamtcurr = parseInt(total_cart_amt.innerHTML);
  let error_throw = document.getElementById('error_throw');
  if(discountCode.value === 'Nilesh55') {
    let newtotalamt = totalamtcurr - 55;
    total_cart_amt.innerHTML = newtotalamt;
    error_throw.innerHTML = "Code Applied!";
    error_throw.style.color = '#27ae60';
  }else {
    error_throw.innerHTML = "Invalid Code.";
    error_throw.style.color = '#e74c3c';
  }
}