$(document).ready(function(){
    //fullpage
    $('#fullpage').fullpage({
        anchors:['intro','profile','web','edit','contact'],
        sectionsColor:['','','#ffdfc2','#fee8c8','#fff586'],
        //현재 섹션이 나타난 후 (활성화 된 후, 열린 후)
        menu:"#myMenu",
        //anchorLink : fullpage 에서 사용하는 앵커 연결하라는 매개변수
        //index : fullpage에서 사용하는 .section의 인덱스번호, 1부터 시작함.
        afterLoad:function(anchorLink, index){
            //만약 활성화된 section이 두번째 section이면
            if(index == 1){
                
            }else if(index == 2){
                //자식객체 애니메이션
                $('.profile h1').addClass('active');
                $('.profile .box > div').addClass('active');
            }else if(index == 3){
                //자식객체 애니메이션
                $('.web h1').addClass('active');
                $('.web .swiper').addClass('active');
            }else if(index == 4){
                //자식객체 애니메이션
                $('.edit h1').addClass('active');
                $('.edit .gallery').addClass('active')

            }else{
                //자식객체 애니메이션
                $('.contact h1').addClass('active');
                $('.contact .contact_wrap').addClass('active');

            }

        }
    });
    //skillbar
    jQuery('.skillbar').each(function(){
        jQuery(this).find('.skillbar-bar').delay(1000).animate({
            width:jQuery(this).attr('data-percent')
        },3000);
    });
    //swiper slide
    var swiper = new Swiper('.swiper', {
        loop: true,
        //Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });
    //editorial gallery 
    $('.big_img ul li').hide();
    $('.big_img ul li').eq(0).show();
    $('.thum_img ul li').click(function(){
        var idx=$(this).index();
        $('.big_img ul li').hide();
    $('.big_img ul li').eq(idx).fadeIn();
    });
});