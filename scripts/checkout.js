import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import {  loadProductsFetch } from "../data/products.js";// if we want to use callback method we can import loadProducts function which is commented
import { loadCart } from "../data/cart.js";
// import '../data/cart-class.js';
// import '../data/backend-pratice.js';


Promise.all([
  loadProductsFetch(),
  new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  })

]).then((values) => {
  console.log(values);
  
  renderOrderSummary();
  renderPaymentSummary();
});


/*
//below is promise
new Promise((resolve) => {
  
  loadProducts(() => { 
    resolve('value1');
  });

}).then((value) => {
  console.log(value);
  
  return new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  });

}).then(() => {
  renderOrderSummary();
  renderPaymentSummary();
})
*/



//below is callback function
/*
loadProducts(() => {
  loadCart(() => {
    renderOrderSummary();
    renderPaymentSummary();
  });
 
});
*/
