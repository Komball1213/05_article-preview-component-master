
$(".pop-up").hide()
$(".share-icon-white").hide();

// $(".share-dark").hide();
$(".share").click(function(){
    $(".pop-up").toggle();
    $(".share-icon").toggle();
    $(".share-icon-white").toggle();
    
})





document.getElementById("share").onclick = function (){
   document.getElementById("share").classList.toggle("share-dark")
  };


  // togglethe Back ground color

    // $('.share').on('click',function(){
    //   if($(this).attr('data-click-state') == 1) {
    //       $(this).attr('data-click-state', 0);
    //       $(this).css('background-color', 'hsl(210, 46%, 95%)')
    //     }
    //   else {
    //     $(this).attr('data-click-state', 1);
    //     $(this).css('background-color', 'hsl(217, 19%, 35%)')
    //   }
    // });
 
