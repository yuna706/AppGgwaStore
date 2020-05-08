$(function(){

    /***********  header  *********/

    //header3 네비게이션 메뉴에 hover했을 때
    $(".rote").parent().mouseover(function(){
        $(this).children(".rote").addClass("on");
    });
    $(".rote").parent().mouseout(function(){
        $(".rote").removeClass("on");
    });


    // 스크롤시 header_sct2
    let h_sct1 = $("#header_sct1");
    let h_sct2 = $("#header_sct2");
    let h_sct3 = $("#header_sct3");
    let h_sct3_sct = h_sct3.offset().top;

    let b = window.screenTop;
    $("section").click(function(){
        console.log(b);
    })

    if(h_sct3_sct == 0){
        h_sct2.velocity('fadeIn', {duration: 100, display: 'flex'});
    }
});

