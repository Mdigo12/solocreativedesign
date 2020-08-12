/* ============================
     preloader
============================== */
$(window).on('load', function () {
    $('#status').hide();
    $('#preloader').delay().hide();

});

/* ============================
     Team
============================== */

$(function(){
$("#team-members").owlCarousel({
    items:2,
    loop:true,
    nav: true,
    navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    dots:false,
    autoplay:true,
    smartSpeed:700,
    autoplayHoverPause:true,
});
});
/* ============================
     Progressbars
============================== */
$(function(){
    $("#progress-elements").waypoint(function () {
        $(".progress-bar").css(
            "width",function(){return $(this)
                .attr("aria-valuenow")+"%"})
        this.destroy();
        
    }, {offset:"bottom-in-view"});
});

$(function(){    
        //  $(".progress-bar").css(
        //      "width",function(){return $(this).attr("aria-valuenow")+"%"});

    //  $(".progress-bar").each(function() {
    //      $(this).animate(
    //          {width: $(this).attr("aria-valuenow") + "%"},1000);
    //  });
});
/* ============================
    responsive tabs
============================== */
$(function(){
    $("#services-tabs").responsiveTabs({
              
        
    });
});



/* ============================
    
============================== */



