document.addEventListener('DOMContentLoaded', () => {
  //total variable to track cost of registration
let total = 0
//const that holds the credit card payment info
const creditCardInfo = $('#credit-card');
//const that holds the paypal payment info
const paypalInfo = $('p:contains("If you selected the PayPal option we\'ll take you to Paypal\'s site to set up your billing information, when you click \“Register\” below")');
//const that holds the bitcoin payment info
const bitcoinInfo = $('p:contains("If you selected the Bitcoin option we\'ll take you to the Coinbase site to set up your billing information. Due to the nature of exchanging Bitcoin, all Bitcoin transactions will be final.")')
//name warning text
const $nameWarning = "<p> Name must be at least 3 letters! </p>";
//when the page loads, focus should be in the name field
$('#name').focus();
//hide the colors unless a design has been selected
$('#colors-js-puns').hide();
//append the total cost element
$('<p>').addClass("total").text("Total: $" + total).insertAfter($('label:contains("npm Workshop — Wednesday 1pm-4pm, $100")'));
//isValidName function takes a name as an argument, and ensures it is more than 3 letters of any case

$($nameWarning).insertAfter($('#name'));
$('p:contains("Name must be at least 3 letters!")').addClass("name-warning");
//hidden on default
$('.name-warning').hide();

//email warning text
const $emailWarning = " <p> Please enter a valid email address! </p>"
$($emailWarning ).insertAfter($('#mail'));
$('p:contains("Please enter a valid email address!")').addClass("email-warning");
//hidden on default
$('.email-warning').hide();

//activity warning textContent
const $activityWarning = "<p> Please select at least one activity! </p>";
$($activityWarning).insertAfter($('.total'));
$('p:contains("Please select at least one activity!")').addClass("activity-warning");
//hiddden on default
$('.activity-warning').hide();

//Credit card warning for less than 13 numbers
const $creditCardWarningSub13Numbers = "<p> Credit Card numbers must be at least 13 numbers </p>"
$($creditCardWarningSub13Numbers).insertAfter($('input[name=user_cc-num]'));
$('p:contains("Credit Card numbers must be at least 13 numbers")').addClass("credit-card-warning-13");
//hidden by default
$('.credit-card-warning-13').hide();

//credit card warning for 16 or more characters
const $creditCardWarning16plusNumbers = "<p> Credit Card numbers can only be between 13-16 numbers long </p>";
$($creditCardWarning16plusNumbers).insertAfter($('input[name=user_cc-num]'));
$('p:contains("Credit Card numbers can only be between 13-16 numbers long")').addClass("credit-card-warning-16");
//hidden by default
$('.credit-card-warning-16').hide();

//Zip code warning;
const $zipCodeWarning = "<p> Zip Code must be 5 digits only </p>";
$($zipCodeWarning).insertAfter($('input[name=user_zip]'));
$('p:contains("Zip Code must be 5 digits only")').addClass("zip-code-warning");
//hidden by default
$('.zip-code-warning').hide();

const $cvvWarning = "<p> CVV must be 3 digits only </p>";
$($cvvWarning).insertAfter($('input[name=user_cvv]'));
$('p:contains("CVV must be 3 digits only")').addClass("cvv-warning");
//hidden by default
$('.cvv-warning').hide()

const isValidName = (name) => {

    if(name.length === 0 || /^[a-z\S]{3,}/i.test(name) === false){
      $('.name-warning').show();
      $('.name-warning').css("color", "red");
      $('input[name=user_name]').css("border",  "2px solid red");
      return false;
    } else {
      //if true, make sure the warning is hidden and update the border back to original stlying
      $('.name-warning').hide();
      $('input[name=user_name]').css("border",  "2px solid black");
        return true;
      }
  //close function
}

const isValidEmail = (email) => {

    if	(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email) === false || email.length === 0){
      //show warning;
      $('.email-warning').show();
      //update text color
      $('.email-warning').css("color", "red");
      //update border for warning;
      $('input[name=user_email]').css("border",  "2px solid red");
      return false
    } else {
      //hide warning;
      $('.email-warning').hide();
      //reset border qualities
      $('input[name=user_email]').css("border",  "2px solid black");
      return true
    }
  //close function
}

const isAnActivitySelected = () => {
  //test to see if any of the checkboxes have been selected.
  if($('[type="checkbox"]:checked').length > 0){
    $('.activity-warning').hide();
    $('[type="checkbox"]').parent().css("color", "black");
  } else {
    $('.activity-warning').show();
    $('.activity-warning').css("color", "red");
    $('[type="checkbox"]').parent().css("color", "red");
  }
//close function
}

const isValidCreditCardNumber = (creditCardNumber) => {
      //show credit card number warning (conditional based upon length)
  if(/^\d{13,16}$/.test(creditCardNumber) === false || creditCardNumber.length === 0){
    if(creditCardNumber.length > 16){
      $('.credit-card-warning-16').show();
      $('.credit-card-warning-13').hide();
      $('.credit-card-warning-16').css("color", "red");
    } else if( creditCardNumber > 0 && creditCardNumber < 13){
      $('.credit-card-warning-16').hide();
      $('.credit-card-warning-13').show();
      $('.credit-card-warning-13').css("color", "red");
    }
    //update border for warning;
    $('input[name=user_cc-num]').css("border",  "2px solid red");
  } else {

    //hide warning text;
    $('.credit-card-warning-13').hide();
    $('.credit-card-warning-16').hide();
    //reset border qualities.
    $('input[name=user_cc-num]').css("border",  "2px solid black");
  }
  //close function
}

const isValidZipCode = (zipCode) => {
  if(/^\d{5}$/.test(zipCode) === false || zipCode.length === 0){
    //show error message
    $('.zip-code-warning').show();
    //update text colour to red;
    $('.zip-code-warning').css("color", "red");
    //update border for warning
    $('input[name=user_zip]').css("border", "2px solid red");
  } else {
    //hide error message
    $('.zip-code-warning').hide();
    //update border back to original settings
    $('input[name=user_zip]').css("border", "2px solid black");
  }
  //close function
}

const isValidCVV = (cvv) => {
  if(/^\d{3}$/.test(cvv) === false || cvv.length === 0){
    //show error message
    $('.cvv-warning').show();
    //update text colour to red;
    $('.cvv-warning').css("color", "red");
    //update border for warning
    $('input[name=user_cvv]').css("border", "2px solid red");
  } else {
    //hide error message
    $('.cvv-warning').hide();
    //update border back to original settings
    $('input[name=user_cvv]').css("border", "2px solid black");
  }
  //close function
}

const validateForm = () => {
  if($('#payment option[value="credit-card"]')){
    if(isValidName(name) &&
    isValidEmail(email) &&
    isAnActivitySelected() &&
    isValidCreditCardNumber(creditCardNumber) &&
    isValidZipCode(zipCode) &&
    isValidCVV(cvv)){
      return true;
    } else {
      return false;
    }
  } else {
     if (isValidName(name) &&
    isValidEmail(email) &&
    isAnActivitySelected()){
      return true;
    } else {
      return false;
    }
  }
}
//add event listener for real-time error messaging in the name field
$('#name').on("keyup change", (event) => {
  let name = $(event.target).val();
  isValidName(name);
});
//add event listener for real-time error messaging in the email field
$('#mail').on("keyup change", (event) => {
  let email = $(event.target).val();
  isValidEmail(email);
});
//add event listener for real-time error messaging in the credit card number field
$('input[name=user_cc-num]').on("keyup change", (event) => {
  let creditCardNumber = $(event.target).val();
  isValidCreditCardNumber(creditCardNumber);
});
//add event listener for real-time error messaging in the zip code field
$('input[name=user_zip]').on("keyup change", (event) => {
  let zipCode = $(event.target).val();
  isValidZipCode(zipCode);
});
//add event listener for real time error messaging for the CVV field
$('input[name=user_cvv]').on("keyup change", (event) => {
  let cvv = $(event.target).val();
  isValidCVV(cvv);
});
//add submit listener to validate individual listeners before the submit button can be pushed.
$('form').submit((event) => {

if(validateForm()){

} else {
  event.preventDefault();
}

});

//add event listener to the title field
$('#title').change( () => {
  //if the user selects other, then display the input field for other roles
  if($('#title option:selected').text() === "Other"){
  $('<input> </input>').insertAfter($('#title')).addClass("other-title");
  $('.other-title').attr('type', 'text').attr('placeholder', 'Your Job Role');
  }
  //if user selects another role, remove .other-title
if($('#title option:selected').text() != "Other"){
  $('.other-title').remove();
}
});

//show only the relevant t-shrit colours based on user input.
//add change listener to the tshirt field.
$('#design').change( () => {
//when a design is selected, show the colour option menu
$('#colors-js-puns').show();
//if js puns are selected, hide heart js options, and show js puns options
  if($('#design option:selected').val() === "js puns"){
    $('#color option[value ="cornflowerblue"]').attr("selected", true);
    $('#color option[value ="tomato"]').hide();
    $('#color option[value ="steelblue"]').hide();
    $('#color option[value ="dimgrey"]').hide();
    $('#color option[value ="cornflowerblue"]').show();
    $('#color option[value ="darkslategrey"]').show();
    $('#color option[value ="gold"]').show();
  }
//if heart js chosen, hide js puns, and show heart js options
  if($('#design option:selected').val() === "heart js"){
    $('#color option[value ="tomato"]').attr("selected", true);
    $('#color option[value ="cornflowerblue"]').hide();
    $('#color option[value ="darkslategrey"]').hide();
    $('#color option[value ="gold"]').hide();
    $('#color option[value ="tomato"]').show();
    $('#color option[value ="steelblue"]').show();
    $('#color option[value ="dimgrey"]').show();
  }
});


//Add an event listener to the parent element of all of the checkboxes.
$('[type="checkbox"]').click( (event) => {
//target the element that was just clicked and store in a variable
const clickedInput = $(event.target);
//store the value of the text conten for the label
const text = clickedInput.parent().text();
//get the index value of the $ in the string
const $index = text.indexOf('$');
//get the cost of the workshop by using a slice from the $index (+1 to get just the number), and the length of the string
let cost = text.slice($index +1 , text.length);
//parse cost to an int for easy math
cost = parseInt(cost);
//if checkbox is checked add to total
if(clickedInput.is(':checked')){
  total += cost;
} else {
  //else if checkbox is unchecked, minus from total
  total -= cost;
}
$('.total').text("Total: $" + total);

//disable conflicting workshops
//get the index of the hyphen in the text
const dashIndex = text.indexOf('—');
//get the index of the comma in the text
const commaIndex = text.indexOf(',');
//get the string of day and time from the text
const dayAndTime = text.slice(dashIndex + 1, commaIndex);
//select the checkboxes
const checkboxes = $('[type="checkbox"]');
//loop through all checkboxes
for(let i = 0; i < checkboxes.length; i++){
  //store in a variable
  let checkboxText = checkboxes[i].parentElement.textContent;
//check if day and time are contained in the text of other options, and check that it is not the same option
    if(checkboxText.includes(dayAndTime) && text !== checkboxText){
      //if clickedInput is checked, disable conflicting options, and change text to grey
      if(clickedInput.is(':checked')){
    $('[type="checkbox"]').eq(i).attr("disabled", true);
    $('[type="checkbox"]').eq(i).parent().css("color", "dimgrey");
    } else {
      //else if unchecked, reactivate element, and change text to black.
      $('[type="checkbox"]').eq(i).attr("disabled", false);
      $('[type="checkbox"]').eq(i).parent().css("color", "black");
    }
  }
}
//end event listener
});
//credit card should be selected by default.
creditCardInfo.show();
paypalInfo.hide();
bitcoinInfo.hide();
//Show payment instructions based upon the payment method selected
$('#payment').change( (event) => {
  //hide the Select Payment Method option
  $('#payment option[value="select_method"]').hide();
  //set variable from the clicked options
  const selectedInput = $(event.target).val();

  //switch on the value of the option
  switch(selectedInput){
    case "credit card":
    //if credit card selected, ensure credit card option is shown, and others hidden
    creditCardInfo.show();
    paypalInfo.hide();
    bitcoinInfo.hide();
    break;
    case "paypal":
    //if paypal option is chosen, ensure paypal information is shown, and others hidden
    paypalInfo.show();
    bitcoinInfo.hide();
    creditCardInfo.hide();
    break;
    case "bitcoin":
    //if bitcoin option is chosen, ensure bitcoin information is shown, and others hidden
    bitcoinInfo.show();
    creditCardInfo.hide();
    paypalInfo.hide();
  }
});




});
