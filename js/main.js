$('#buttonStart').click( function() {
  $('#startScreen').fadeout();
});

$(document).ready( function(){
  $('#beerLager').addClass('active');
});

function changeBeer(beertype) {
  $('.active').removeClass('active');
  $('#' + beertype + ', #beer' + beertype).addClass('active');
}
