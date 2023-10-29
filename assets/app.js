// $(document).load($(window).bind("resize", changeMenuDisplay));

// function changeMenuDisplay() {
//     if($(window).width() > 1024) {
//         $('#menu').css('display', 'block');
//         console.log('here');
//     }else if($(window).width() < 1024)  {
//         $('#menu').css('display', 'none');
//         console.log('non');
//     }
// }

$(document).ready(function() {
    $(".diplome_list").mousemove(function(event) {

        var mouseX = event.pageX;
        var mouseY = event.pageY;

        // console.log(mouseX + " , " + mouseY);

        $(".img_follow").offset({
            top : mouseY - 70,
            left : mouseX + 50
        });
    })

    $(".diplome_list_bac, .diplome_list_DU, .diplome_list_CCI, .diplome_list_cciStrass").mouseleave(function() {
        $(".img_follow").css("display", "none");
    })

    $(".diplome_list_bac").mouseenter(function() {
        $(".img_bac").css("display", "block");
    })

    $(".diplome_list_DU").mouseenter(function() {
        $(".img_DU").css("display", "block");
    })

    $(".diplome_list_CCI").mouseenter(function() {
        $(".img_CCI").css("display", "block");
    })

    $(".diplome_list_cciStrass").mouseenter(function() {
        $(".img_CCIStrass").css("display", "block");
    })
    
})


function burger_menu() {
    if($('#menu').css('display') == "none") {
        $('#menu').slideDown("slow");
        $('.head').css("background", "black");
    } else {
        $('#menu').slideUp("slow");
        $('.head').css("background", "transparent");
    }    
};