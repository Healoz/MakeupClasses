// Syncronising date and calendar scrollbars

// https://stackoverflow.com/questions/12039038/how-to-synchronize-two-scrollbars-for-divs 

$("#date-scroll").scroll(function () { 
    $("#calendar-scroll").scrollLeft($("#date-scroll").scrollLeft());
  });
  $("#calendar-scroll").scroll(function () { 
    $("#date-scroll").scrollLeft($("#calendar-scroll").scrollLeft());
  });

