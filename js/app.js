
document.addEventListener('DOMContentLoaded', () => {
let total = 0
//when the page loads, focus should be in the name field
$('#name').focus();
//hide the colors unless a design has been selected
$('#colors-js-puns').hide();

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

//append the running total
$('<p>').addClass("total").text("Total: $" + total).insertAfter($('label:contains("npm Workshop — Wednesday 1pm-4pm, $100")'));
//Add an event listener to the parent element of all of the checkboxes.
$('[type="checkbox"]').click( () => {
//add running total for workshop costs if main workshop is checked.
if($('[name="all"]').is(':checked')){
  total += 200;
} else if($('[name="js-frameworks"]').is(':checked')){
  total += 100;
}
$('.total').text("Total: $" + total);
//if checkbox for Frameworks is checked, disable Express checkbox
if($('[type="checkbox"]').eq(1).prop('checked')){
  $('[type="checkbox"]').eq(3).attr('disabled', true);
  $('label:contains("Express Workshop — Tuesday 9am-12pm, $100")').css('color', 'gray');
} else if ($('[type="checkbox"]').eq(3).prop('checked')){
  $('[type="checkbox"]').eq(1).attr('disabled', true);
  $('label:contains("JavaScript Frameworks Workshop — Tuesday 9am-12pm, $100")').css('color', 'gray');
}

//if libraries workshop is checked, disable Node.js workshop checkbox
if($('[type="checkbox"]').eq(2).prop('checked')){
  $('[type="checkbox"]').eq(4).attr('disabled', true);
  $('label:contains("Node.js Workshop — Tuesday 1pm-4pm, $100")').css('color', 'gray');
} else if($('[type="checkbox"]').eq(4).prop('checked')){
  $('[type="checkbox"]').eq(2).attr('disabled', true);
  $('label:contains("JavaScript Libraries Workshop — Tuesday 1pm-4pm, $100")').css('color', 'gray');
}

});






});
