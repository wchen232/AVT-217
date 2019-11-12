$(document).ready(function(){
  console.log("Document is ready");

  $('.Macaroni').click(function() {
    $('.Macaroni').toggleClass('Macaroni2');
    $('.number5').toggleClass('transparency');
  });
    // $('.number1').css('text-align', 'left');
  $('.Lasagne').click(function() {
    $('.Lasagne').toggleClass('Lasagne2');
    $('.number4').toggleClass('transparency');
  });

  $('.Spaghetti').click(function() {
    $('.Spaghetti').toggleClass('Spaghetti2');
    $('.number3').toggleClass('transparency');
  });

  $('.Fettuccini').click(function() {
    $('.Fettuccini').toggleClass('Fettuccini2');
    $('.number2').toggleClass('transparency');
  });

  $('.Puhskinti').click(function() {
    $('.Puhskinti').toggleClass('Puhskinti2');
    $('.number1').toggleClass('transparency');
  });
});
