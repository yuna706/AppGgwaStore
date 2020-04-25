$(function(){
    //header3 네비게이션 메뉴에 hover했을 때
    $(".rote").parent().mouseover(function(){
        $(this).children(".rote").addClass("on");
    })
    $(".rote").parent().mouseout(function(){
        $(".rote").removeClass("on");
    })
})