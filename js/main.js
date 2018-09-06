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
        translateY: (el, i) => {
            return [-i-5+'px', 0];
        },
        rotate: (el, i) => {
            return [30+i+'deg', 0];
        },
        delay: (el, i) => {
            return (i*20);
        },
        elasticity: 0,
    });

    main_tl.add({
        targets: '.screen-1 h2:nth-of-type(1)',
        translateY: 0,
        fontSize: ['1.75rem', '1.25rem'], 
    })

    main_tl.add({
        targets: '.screen-1 h2:nth-of-type(2) .letter',
        opacity: [0,1],
        translateY: (el,i) => {
            return [i*15+'px', '0px'];
        },
        delay: (el,i) => {
            return (i*12);
        },
        offset: '-=875',
    });

    main_tl.add({
        targets: '.screen-1 h2:nth-of-type(3) .letter',
        opacity: [0,1],
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
        targets: '.screen-2 h2:nth-of-type(2) .letter',
        scale: [1,0],
        translateY: (el,i) => {
            return [0, -i+'px'];
        },
        delay: 650,
        easing: 'easeInOutQuint'

     })

     main_tl.add({
        targets: '.screen-2 h2:nth-of-type(3)',
        opacity: [1,0],
        translateX: ['0px', '-100px'],
        elasticity: 0,
        offset: '-=650'
     })

     main_tl.add({
        targets:'.screen-2 h2:nth-of-type(1)',
        opacity: [1,0],
        translateX: ['0px', '100px'],
        offset: '-=950'
     })

})