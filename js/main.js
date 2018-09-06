$(function(){
    $('.break-letters').each(function(){
        $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
    });

    main_tl = anime.timeline();

    /*
     * Screen 1
     */
    // 'Kinetic Typography'
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
    });

    // Font size change
    main_tl.add({
        targets: '.screen-1 h2:nth-of-type(1)',
        fontSize: ['1.75rem', '1.25rem'], 
        elasticity:0,
        duration:200,
    })

    // 'With html and CSS'
    main_tl.add({
        targets: '.screen-1 h2:nth-of-type(2) .letter',
        opacity: [0,1],
        translateY: (el,i) => {
            return [i*3+400, 0];
        },
        delay: (el, i) => {
            return (i*25);
        },
        easing: 'easeInElastic',
        elasticity: 0,
        offset: '-=750',
    });

    main_tl.add({
        targets: '.screen-1 h2:nth-of-type(3), .screen-1 h2:nth-of-type(4)',
        opacity: [0,1],
        translateX: ['300px', 0],
        rotateY: ['-180deg', '0deg']
    });

    // Hide
    main_tl.add({
        targets: '.screen-1',
        opacity: [1,0],
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
        offset: '-=750'
     });

     main_tl.add({
        targets: '.screen-2 h2:nth-of-type(3)',
        opacity: [0,1],
        translateX: ['100px', '0px'],
        elasticity: 0
     })

     main_tl.add({
        targets:'.screen-2 h2:nth-of-type(1)',
        opacity: [0,1],
        translateX: ['-100px', '0px'],
        offset: '-=950'
     })

     main_tl.add({
        targets: '.screen-2 h2:nth-of-type(2)',
        scale: [1,4],
        opacity: [1, 0],
        duration: 350,
        delay: 650,
        elasticity:0

     })

     main_tl.add({
        targets: '.screen-2 h2:nth-of-type(3)',
        opacity: [1,0],
        translateX: ['0px', '-100px'],
        elasticity: 0,
        offset: '-=350'
     })

     main_tl.add({
        targets:'.screen-2 h2:nth-of-type(1)',
        opacity: [1,0],
        translateX: ['0px', '100px'],
        offset: '-=950'
     })

})