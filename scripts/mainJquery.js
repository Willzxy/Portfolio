$('body').ready( () => {
    // variaveis

    // preparacao
    $('main .sobre_mim h1, main .sobre_mim p').css("opacity", 0)

    // eventos
    $(window).scroll( e => {
        let positionScroll = $(window).scrollTop()
        let target1 = 'main .sobre_mim h1, main .sobre_mim p'
        if(positionScroll >= 200 && !$(target1).attr("visible") ){
            $(target1).animate({
                opacity: 1
            }, 2000)

            $(target1).attr("visible", "true")
            console.log("o evento foi disparado")
        }

    })

})