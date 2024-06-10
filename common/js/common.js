$(()=>{

    /* timer */
    function Timer() {
        let today = new Date();
        let endDate = new Date(2024,4,13,0,0);
        if (today > endDate) {
            $('.button-banner-content-wrap a.button-banner-box.workshop').attr('href', '#');
        }
        console.log('마감시간: 2024.05.13.0.0');
        console.log(new Date());
    }
    setInterval(Timer, 10000);
    Timer();


    /* nav event */
    $nav_menu_wrap = $('nav.nav-menu-wrap');
    $hover_text = $('.hover-text');
    $hover_text.each(function(){
        $(this).attr('data-hover', $(this).text());
    });

    const logo_src = $('.logo-box > a > img').attr('src');
    /* menu event */
    $menu_icon = $('.menu-icon');
    $menu_icon.click(function(e){
        e.preventDefault();
        if(!$nav_menu_wrap.hasClass('open')){
            $nav_menu_wrap.addClass('open');
            // $('.logo-box > a > img').attr('src', '/theme/new_dnc/img/main/logo-white.svg');
            $('.menu-box').addClass('nav-white');
            $('.side-icon-box').addClass('nav-white');
            $('.burger-box').addClass('active');
            $('.menu-box').addClass('hide');
            $menu_texts = gsap.utils.toArray($hover_text);
            $menu_texts.forEach( (text, index) => {
                gsap.fromTo(text, 1, {
                    opacity: 0,
                    y: "100%",
                },{
                    opacity: 1,
                    y: "0%",
                    duration: .8,
                    delay: (index + 1) * .2,
                });
            })
        }else{
            setTimeout(()=>{
                $('.logo-box > a > img').attr('src', logo_src);
                $nav_menu_wrap.removeClass('open');
                $('.menu-box').removeClass('nav-white');
                $('.side-icon-box').removeClass('nav-white');
                $('.burger-box').removeClass('active');
                $('.menu-box').removeClass('hide');
            }, 2000);
            $menu_texts = gsap.utils.toArray($hover_text);
            $menu_texts.forEach( (text, index) => {
                gsap.fromTo(text, 1, {
                    opacity: 1,
                    y: "0%",
                },{
                    opacity: 0,
                    y: "-100%",
                    duration: .8,
                    delay: (index + 1) * .2,
                });
            })
        }
    });

    $hover_text.mouseenter(function(e){
        $hover_text.css({
            opacity: .4,
        });
        $(this).css({
            'transform': 'translateY(-100%)',
            'transform-origin': '0% 0%',
            'opacity': 1,
        });
    })
    .mouseleave(function(){
        $(this).css({
            'transform': 'translateY(0%)',
            'transform-origin': '0% 0%'
        });
        $hover_text.css({
            opacity: 1,
        });
    });


    $('.back-top-btn.sub-scroll').click(function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 1800,)
        return false;
    });
});


const lenis = new Lenis();
lenis.on('scroll', (e) => {
    // console.log(e);
})
function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);