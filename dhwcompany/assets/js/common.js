/*
document.querySelector('.open-button').onclick = function () {
    document.querySelector('.nav').style.width = "70%";
}

document.querySelector('.close-button').onclick = function () {
    document.querySelector('.nav').style.width = "0";
}
*/

//slideMenu animation


$(function () {
    $('.open-button').on("click", function() {
        $('.nav').css({'width' : '70%', 'display' : 'block'});
    });

    $('.close-button').on("click", function() {
        $('.nav').css({'width' : '0'});
    });
});

$(function() {
    $("#open-button").on("click", function() {
      $(".fadeIn").fadeIn(900);
    });
  
    $("#close-button").on("click", function() {
      $(".fadeOut").hide(300);
    });
});