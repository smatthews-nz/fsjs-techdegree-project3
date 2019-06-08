
document.addEventListener('DOMContentLoaded', () => {

//when the page loads, focus should be in the name field
$('#name').focus();

//add event listener to the title field
$('#title').change( () => {
  //if the user selects other, then display the input field for other roles
  if($('#title option:selected').text() === "Other"){
  $('<input> </input>').insertAfter($('#title')).addClass("other-title");
  $('.other-title').attr('type', 'text').attr('placeholder', 'Your Job Role');
  }

  //if user selects another role, remove .other-user_title
if($('#title option:selected').text() != "Other"){
  $('.other-title').remove();
}

});

//show only the relevant t-shrit colours based on user input.





})
