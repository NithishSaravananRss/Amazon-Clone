import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import {  loadProducts, loadProductsFetch } from "../data/products.js";
import { loadCart } from "../data/cart.js";
// import '../data/cart-class.js';
// import '../data/backend-pratice.js';


async function loadPage() {
  try{
      //throw 'error1';

    await loadProductsFetch();

    const value = await new Promise((resolve,reject) => {
      // throw 'error2';
      loadCart(() => {
      // reject('error3');
        resolve('value3');
      });
    });  
    
  } catch(error){
    console.log('Unexpected error. please try again later.');
  }

  renderOrderSummary();
  renderPaymentSummary();

}
loadPage();

/*
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
*/

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
