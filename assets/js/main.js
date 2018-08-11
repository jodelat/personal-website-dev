$(document).ready(function(){

  $(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
    $('nav').addClass('transparent');
  } else {
    $('nav').removeClass('transparent');
  }
});

$(".nav-link").on("click", function() {
  var scroll = "." + $(this).attr('href').split("#")[1];
  console.log(scroll)
    $('html, body').animate({
        scrollTop: $(scroll).offset().top
    }, 1000);
});
})
console.log("this is here");
