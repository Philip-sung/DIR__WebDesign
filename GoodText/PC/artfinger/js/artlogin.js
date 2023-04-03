 
    $(document).ready(function(){
  var loginLayer = $("#loginLayer");
  var loginLink = $(".loginLink");
  var loginCont = $(".loginContent");
  var marginLeft = loginCont.outerWidth()/2;
  var marginTop = loginCont.outerHeight()/2; 

    loginLink.click(function(){
    loginLayer.fadeIn(1000);
   
    $(this).blur();
    $(".loginContent > a").focus(); 
    return false;
  });

  $(".loginContent > .close-btn").click(function(){
    loginLayer.fadeOut("slow");
    loginLink.focus();
  });		
});
 