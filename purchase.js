"use strict";
const $ = selector => document.querySelector(selector);

// Calculate the subtotal of the sale without tax, the amount of sale, the amount of sales tax, and the total. 
// Assume the sales tax is 9.25%.
// woah

const item1 = 14.95;
const item2 = 23.95;
const item3 = 5.95;
const item4 = 11.95;
const item5 = 4.95;

const tax = 9.25;

document.getElementById('item_1').value = item1
document.getElementById('item_2').value = item2;
document.getElementById('item_3').value = item3;
document.getElementById('item_4').value = item4;
document.getElementById('item_5').value = item5;

const calculate = () => { 
    let subtotal = item1+item2+item3+item4+item5;
    let total = subtotal*(tax+1);
    let tax_total = total-subtotal;

    document.getElementById('subtotal').value = subtotal;
    document.getElementById('amount_of_sale_tax').value = subtotal;
    document.getElementById('total').value = total;


 
    // TODO
};

// clear text boxes
const clear_form = () => { 
    // TODO

document.getElementById('item_1').value = "";
document.getElementById('item_2').value = "";
document.getElementById('item_3').value = "";
document.getElementById('item_4').value = "";
document.getElementById('item_5').value = "";
document.getElementById('subtotal').value = "";
document.getElementById('amount_of_sale_tax').value = "";
document.getElementById('total').value = "";
};

document.addEventListener("DOMContentLoaded", () => {
    // hook up click events for both buttons
    $("#calculate").addEventListener("click", calculate);
    $("#clear_form").addEventListener("click", clear_form);

    // set focus on first text box after the form loads
    $("#item_1").focus();
});
