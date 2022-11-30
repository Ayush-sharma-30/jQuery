$("h1").css("color","red");     // same as document.querySelector("h1").style.color="red";

console.log($("h1").css("color"));  // returns value of color of h1

$("h1").addClass("big-title margin-50");

$("h1").hasClass("margin-50");  //will tell if it has the mentioned class or not

$("h1").text("hi");   // update text of h1 to hi.

$("h1").html("<em>hey</em>");   // consider em tag as well or consider html as well.

console.log($("img").attr("src"));  //helps to get attributes and if we pass another parameter to attr,
                                    // its value get sets to src.

$("h1").click(function() {
  $("h1").css("color","purple");
});                                 // adding an event listener to h1

$("button").click(function() {
  $("h1").css("color","purple");
});                               // here we don't need to write a for loop to add listener to all buttons.

$("h1").on("mouseover",function() {
  $("h1").css("color","purple");
});                                   // adding an event listener to h1

$("h1").before("<button>New</button>");   // we can create new html elements on the way. Similarly, we have
                                          // after, prepend, append.

$("button").remove();                // remove all button element from page.

$("h1").click(function() {
  $("h1").hide();                   // hide selected elementw .show() make it reappear. .toggle() will
});                                 // toggle between hide and show.

$("h1").click(function() {
  $("h1").fadeOut();             // slowly make the element disappear. .fadeIn() do opposite. .fadeToggle()
});


$("h1").click(function() {
  $("h1").slideUp();            // collapses element upwards. .slideDown()   .slideToggle()
});

$("h1").click(function() {
  $("h1").animate({opacity: 0.5});    // custom animation. Define new css inbetween {} but can only take
});                                   // properties having numerical value. Can't change color, etc.


$("h1").click(function() {
  $("h1").slideUp().slideDown().animate({opacity: 0.5});  // series of animations
});
