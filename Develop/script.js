// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  var timeBlocks = $('.time-block');

  timeBlocks.each(function() {
    var timeBlock = $(this);


    var timeBlockHour = timeBlock.attr('id').split('-')[1];
    var currentHour = dayjs().hour();
    console.log(currentHour);
     
    if (timeBlockHour <= currentHour ) {
        timeBlock.addClass('past');

       } else if (timeBlockHour === currentHour) {
        timeBlock.removeClass('past');
        timeBlock.addClass('present');
       } else {
        timeBlock.removeClass('past');
        timeBlock.removeClass('present')
        timeBlock.addClass('future');
       }
      
  })
  // The comparison that we need to make is between timeBlockHour 
  // and the currentHour. we may have to parse the number to string. 
  //  
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.


var dayJsObject = dayjs();
console.log(dayJsObject.format("dddd MMMM DD, YYYY h:mm A"));

$("#currentDay").text(dayJsObject.format("dddd MMMM DD, YYYY h:mm A"))

$( ".saveBtn" ).click(function() {
  var id=$(this).parent().attr("id");
  var value= $(this).siblings("textarea").val();
  localStorage.setItem(id, value);
  console.log(window.localStorage.getItem(id));
  

  });

});

// Add click event listener
