$(function(){
    $('.break-letters').each(function(){
        $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
    });

    /*
     * Screen 1
     */
    anime({
        targets: '.screen-1 .letter',
        opacity:[0,1],
        rotate:['45deg', '0deg'],
        translateZ: ['14px', 0],
        /*delay: (el, i) => {
            return (i*200);
        },*/
        begin: (anim) => {
            console.log('starting');
        }
    })

})