
document.addEventListener('DOMContentLoaded', () => {
  //total variable to track cost of registration
let total = 0
//when the page loads, focus should be in the name field
$('#name').focus();
//hide the colors unless a design has been selected
$('#colors-js-puns').hide();
//append the total cost element
$('<p>').addClass("total").text("Total: $" + total).insertAfter($('label:contains("npm Workshop — Wednesday 1pm-4pm, $100")'));
//isValidName function takes a name as an argument, and ensures it is more than 3 letters of any case
const isValidName = (name) => {

  if(/^[a-z\S]{3,}/i.test(name)){
    return true;
    console.log("Name is long enough!")
  } else {
    console.log("Name must be at least 3 letters long");
    $('name').css('color', 'red');
  }
}

$('#name').on("keyup change", (event) => {
  let name = $(event.target).text()
  isValidName(name);
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


//Show payment instructions based upon the payment method selected
$('#payment').change( (event) => {
  //hide the Select Payment Method option
  $('#payment option[value="select_method"]').hide();
  //set variable from the clicked options
  const selectedInput = $(event.target).val();
  const creditCardInfo = $('#credit-card');
  const paypalInfo = $('p:contains("If you selected the PayPal option we\'ll take you to Paypal\'s site to set up your billing information, when you click \“Register\” below")');
  const bitcoinInfo = $('p:contains("If you selected the Bitcoin option we\'ll take you to the Coinbase site to set up your billing information. Due to the nature of exchanging Bitcoin, all Bitcoin transactions will be final.")')
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
