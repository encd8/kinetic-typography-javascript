$(function(){
    $('.break-letters').each(function(){
        $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
    });

    main_tl = anime.timeline();

    /*
     * Screen 1
     */
    main_tl.add({
        targets: '.screen-1 h2:nth-of-type(1) .letter',
        opacity:[0,1],
        scale:[4,1],
        translateY: (el, i) => {
            return [-i-5+'px', 0];
        },
        rotate: (el, i) => {
            return [30+i+'deg', 0];
        },
        delay: (el, i) => {
            if(i!=el.length){
                return (i*20);
            }
            return i;
        },
        elasticity: 0,
    }).add({
        targets: '.screen-1 h2:nth-of-type(2) .letter',
        opacity: [0,1],
        scale:[4,1],
        translateY: (el, i) => {
            return [i+5+'px', 0];
        },
        rotate: (el, i) => {
            return [-30-i+'deg', 0];
        },
        delay: (el, i) => {
            if(i!=el.length){
                return (i*20);
            }
            return i;
        },
        elasticity: 0,
        offset: '-=750',
    }).add({
        targets: '.screen-1 h2:nth-of-type(3) .letter',
        opacity:[0,1],
        scale:[4,1],
        translateY: (el, i) => {
            return [-i-5+'px', 0];
        },
        rotate: (el, i) => {
            return [30+i+'deg', 0];
        },
        delay: (el, i) => {
            if(i!=el.length){
                return (i*20);
            }
            return i;
        },
        elasticity: 0,
        offset:'-=750',
    }).add({
        targets: '.screen-1 h2',
        opacity: [1,0],
        scale:[1,0],
        delay: 750,
        elasticity:0,
    });

    /*
     * Screen 2 
     */
     main_tl.add({
        targets: '.screen-2 h2:nth-of-type(2)',
        opacity: [0,1],
        scale: [0,1],
        offset: '-=750',
        easing:'easeOutExpo',
     }).add({
        targets: '.screen-2 h2:nth-of-type(3)',
        opacity: [0,1],
        translateX: ['100px', '0px'],
        elasticity: 0
     }).add({
        targets:'.screen-2 h2:nth-of-type(1)',
        opacity: [0,1],
        translateX: ['-100px', '0px'],
        offset: '-=950'
     }).add({
        targets: '.screen-2 h2:nth-of-type(2)',
        scale: [1,4],
        opacity: [1, 0],
        duration: 350,
        delay: 650,
        elasticity:0

     }).add({
        targets: '.screen-2 h2:nth-of-type(3)',
        opacity: [1,0],
        translateX: ['0px', '-100px'],
        elasticity: 0,
        offset: '-=350'
     }).add({
        targets:'.screen-2 h2:nth-of-type(1)',
        opacity: [1,0],
        translateX: ['0px', '100px'],
        offset: '-=950'
     })

     // Screen 3
     main_tl.add({
        targets:'.screen-3 h2:nth-of-type(1)',
        scale: [0,1],
        translateX:[0,30],
        elasticity:0,
        offset:'-=557',
     }).add({
        targets: '.screen-3 h2:nth-of-type(1)',
        translateX:[30,0],
        duration:450,
        elasticity:0,
        fontSize: [1,'2.5em'],
     }).add({
        targets: '.screen-3 h2:nth-of-type(2)',
        scale:[0,1],
        translateX:[-40,0],
        offset: '-=550'
     }).add({
        targets: '.screen-3 h2',
        translateX: 400,
        opacity:[1,0],
        delay:300,
        elasticity:0,
        offset: '-=450'
     });

     // Screen 4
     main_tl.add({
        targets:'.screen-4 h2:nth-of-type(2)',
        translateX: [-400,0],
        opacity:[0,1],
        offset: '-=550',
     }).add({
        targets:'.screen-4 h2:nth-of-type(1)',
        translateY:[-300,-45],
        skewY:'-20deg',
        opacity:[0,1],
        easing: 'easeInCubic',
        duration:200,
     }).add({
        targets: '.screen-4 h2:nth-of-type(2)',
        skewY:'-20deg',
        translateY:-45,
        elasticity:0,
        duration:100,
     }).add({
        targets:'.screen-4 h2',
        opacity: [1,0],
        delay:1000,
     })

     //Screen 5
     main_tl.add({
        targets:'.screen-5 h2',
        opacity:[0,1],
        translateX:[-400,0],
        offset:'-=550',
        elasticity:0,
        delay: (el,i) => {
            return i*15+100;
        }
     })
})