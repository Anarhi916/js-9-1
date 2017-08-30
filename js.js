$(document).ready(function(){

  $("button").on("click", getNumbers);
  
  function getNumbers(){
     $.post(
       "a1.php",
      {
        num1 : $(".inp1").val(),
        num2 : $(".inp2").val()
      }, 
      function (data){
        $("p").text(data);
      }
    )      
     
  }
});






