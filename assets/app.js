function burger_menu() {
    if($('#menu').css('display') == "none") {
        $('#menu').slideDown("slow");
    } else {
        $('#menu').slideUp("slow");
    }    
}