
document.addEventListener('DOMContentLoaded', () => {

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

$('#colors-js-puns').show();

  if($('#design option:selected').val() === "js puns"){
    $('#color option[value ="cornflowerblue"]').attr("selected", true);
    $('#color option[value ="tomato"]').hide();
    $('#color option[value ="steelblue"]').hide();
    $('#color option[value ="dimgrey"]').hide();
  }

  if($('#design option:selected').val() === "heart js"){
    $('#color option[value ="tomato"]').attr("selected", true);
    $('#color option[value ="cornflowerblue"]').hide();
    $('#color option[value ="darkslategrey"]').hide();
    $('#color option[value ="gold"]').hide();
  }

});




})
