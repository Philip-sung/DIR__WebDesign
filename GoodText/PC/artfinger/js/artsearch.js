 
    $(document).ready(function(){
  var modalLayer = $("#modalLayer");
  var modalLink = $(".modalLink");
  var modalCont = $(".modalContent");
  var marginLeft = modalCont.outerWidth()/2;
  var marginTop = modalCont.outerHeight()/2; 

  modalLink.click(function(){
    modalLayer.fadeIn(1000);
    $(".hois").addClass("aftf");    
    $(this).blur();
    $(".modalContent > a").focus(); 
    return false;
  });

  $(".modalContent > .close-btn").click(function(){
    modalLayer.fadeOut("slow");
     $(".hois").removeClass("aftf");      
    modalLink.focus();
  });		
});
 