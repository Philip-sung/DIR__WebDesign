 


$(document).ready(function(){
    
      
    
     
      /*로고 변경취소  var  toplogo_im1 = $("#toplogo_lin").attr("src");*/
      var  back_im1 = $("#main_01").attr("src");
  	  var  backlin1 = $("#main_01_lin").attr("href");        
      var  back_im2 = $("#main_02").attr("src");
  	  var  backlin2 = $("#main_02_lin").attr("href");        
      var  back_im3 = $("#main_03").attr("src");
  	  var  backlin3 = $("#main_03_lin").attr("href");   
      var  snslin1 = $("#sns_01_lin").attr("href");     
      var  snslin2 = $("#sns_02_lin").attr("href");     
      var  snslin3 = $("#sns_03_lin").attr("href");     
      var  snslin4 = $("#sns_04_lin").attr("href");  
      var  snslin5 = $("#sns_05_lin").attr("href");      
    
      /*로고 변경취소  $(".toplogo_im").attr("src", toplogo_im1);*/
      $(".sect1").css("background-image", 'url(' + back_im1 + ')');
      $(".sect2").css("background-image", 'url(' + back_im2 + ')');
      $(".sect3").css("background-image", 'url(' + back_im3 + ')');
    
      $("#backl1").attr("href", backlin1);    
	  $("#backl2").attr("href", backlin2);    
	  $("#backl3").attr("href", backlin3);
      $(".snsl1").attr("href", snslin1); 
      $(".snsl2").attr("href", snslin2); 
      $(".snsl3").attr("href", snslin3); 
      $(".snsl4").attr("href", snslin4); 
      $(".snsl5").attr("href", snslin5); 
      $(".section a").each(function() {
        3 < $(this).attr("href").length && $(this).addClass("show") 
      });
      $(".snscate a").each(function() {
        3 < $(this).attr("href").length && $(this).addClass("show") 
      });
     
      
 
});    