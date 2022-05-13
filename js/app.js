

    let screenHeight = $(window).height();
    let currentPosion = $(this).scrollTop();
    if (currentPosion > screenHeight){
        $(".up-to-top").css("display","flex");
    }else {
        $(".up-to-top").css("display","none");
    }

    let currentSectionId;

    $(window).scroll(function(){
        let currentPosion1 = $(this).scrollTop();
        if(currentPosion1 >= screenHeight){
            $(".side_nav").addClass("side-nav-scroll");
            setActive(currentSectionId);
        }else{
            $(".side_nav").removeClass("side-nav-scroll");
            setActive("home");
        }

        if (currentPosion1 >= screenHeight){
            $(".up-to-top").css("display","flex");
        }else {
            $(".up-to-top").css("display","none");
        }
    });


    $(".navbar-toggler").click(function () {
        let result=$("#menu-btn").attr("aria-expanded");
        if (result=="true"){
            $(".menu-icon").removeClass("fa-bars").addClass("fa-close");
        }else {
            $(".menu-icon").removeClass("fa-close").addClass("fa-bars");
        }
    });

    // Waypoint
    // var waypoint=$("#home").waypoint(function () {
    //     $(".nav-link").removeClass("current-section");
    //     $(".nav-link[href='#home']").addClass("current-section");
    // });
    //
    // var waypoint=$("#about").waypoint(function () {
    //     $(".nav-link").removeClass("current-section");
    //     $(".nav-link[href='#about']").addClass("current-section");
    // },{
    //     offset: '25%'
    // });
    //
    // var waypoint=$("#services").waypoint(function () {
    //     $(".nav-link").removeClass("current-section");
    //     $(".nav-link[href='#services']").addClass("current-section");
    // },{
    //     offset: '25%'
    // });
    //
    // var waypoint=$("#pricing").waypoint(function () {
    //     $(".nav-link").removeClass("current-section");
    //     $(".nav-link[href='#pricing']").addClass("current-section");
    // },{
    //     offset: '25%'
    // });
    //
    // var waypoint=$("#contactus").waypoint(function () {
    //     $(".nav-link").removeClass("current-section");
    //     $(".nav-link[href='#contactus']").addClass("current-section");
    // },{
    //     offset: '25%'
    // });

    function setActive(current){
        $(".nav-link").removeClass("current-section")
        $(`.nav-link[href='#${current}']`).addClass('current-section');
    }

    function navScroll(){
        let currentSection=$("section[id]");
        currentSection.waypoint(function (direction) {

            if(direction=="down"){
                 currentSectionId=$(this.element).attr("id");
                setActive(currentSectionId);
            }

        },{ offset: '10px'
        });

        currentSection.waypoint(function (direction) {
            if(direction=="up"){
                 currentSectionId=$(this.element).attr("id");
                setActive(currentSectionId);
            }
        },{offset: '-4px'
        });
    }

    navScroll();

    wow = new WOW(
        {
            boxClass:     'wow',      // default
            animateClass: 'animate__animated', // default
            offset:       0,          // default
            mobile:       true,       // default
            live:         true        // default
        }
    )
    wow.init();

    $('.pricing-slide').slick({
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1000,
        speed: 700,
        arrows: false,

        slidesToShow: 3,
        slidesToScroll: 3,
        settings:[
            {autoplay:true,}
        ],
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    $(window).on("load",function () {
        $('.loader-container').fadeOut(500,function () {
            $(this).remove();
        });
    });

