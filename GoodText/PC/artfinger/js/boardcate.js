$(function(){
  $('.board_sub').mouseenter(function(){
    $('.board_cate').fadeIn(200);
  });
  $('.board_sub').mouseleave(function(){
    $('.board_cate').fadeOut(200);
  });
});