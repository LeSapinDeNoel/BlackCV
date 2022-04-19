function burger_menu() {
    if($('#menu').css('display') == "none") {
        $('#menu').slideDown("slow");
        $('.head').css("background", "black");
    } else {
        $('#menu').slideUp("slow");
        $('.head').css("background", "transparent");
    }    
}