

let screen_w = window.innerWidth;
let init_width = 960;
let init_height = 700;
let init_margin = 0.04;

if(screen_w < 576) {
    init_width = screen_w - 20;
    init_margin = 0.01;
}
else if(screen_w >= 576 && screen_w < 768) {
    init_width = 740;
    init_height = 400;
    init_margin = 0.01;
}

// iPhone horizontal - 750
console.log('screen_w', screen_w);
console.log('width', init_width);
//            alert('screen_w = ' + screen_w);
//            alert('width = ' + init_width);
// More info about initialization & config:
// - https://revealjs.com/initialization/
// - https://revealjs.com/config/
Reveal.initialize({
    width: init_width,
    height: init_height,
    margin: init_margin,
    hash: true,
    navigationMode: 'grid',
    overview: false,
    touch: true,
    mouseWheel: true,

    // Learn about plugins: https://revealjs.com/plugins/
    plugins: [ RevealMarkdown, RevealHighlight ]
});
function slide_anim_0000() {
    const tl1 = new TimelineMax({ delay: 0.2 });
    const elon = document.querySelector("#elon_0000");
    tl1.from(elon, 0.7, { opacity: 0, y: 70, scale: 0.9});

    const tl2 = new TimelineMax({ delay: 0.3 });
    const pileczki = document.querySelector("#pileczki_0000");
    tl2.from(pileczki, 0.7, { opacity: 0, y: -30, scale: 0.9});

    const tl3 = new TimelineMax({ delay: 0.5 });
    const tl4 = new TimelineMax({ delay: 0.5 });
    const puchar = document.querySelector("#puchar_0000");
    const stolik3d = document.querySelector("#stolik_3d_0000");
    const rightCol = document.querySelector("#right_0000");
    const icon1 = document.querySelector("#icon_vol_0000");
    const icon2 = document.querySelector("#icon_list_0000");
    const icon3 = document.querySelector("#icon_play_0000");

    tl3.from(puchar, 0.7, { opacity: 0, x: 140, y: 80, scale: 0.1});
    tl4.from(stolik3d, 0.7, { opacity: 0, x: -120, y: 80, scale: 0.1})
        .from(rightCol, 0.7, { delay: 0.2, opacity: 0, scale: 0.5, ease: "back.out(2)"});

    const iconsDelay = 2;

    const tlIcon1 = new TimelineMax({ delay: iconsDelay });
    const tlIcon2 = new TimelineMax({ delay: iconsDelay + 0.3});
    const tlIcon3 = new TimelineMax({ delay: iconsDelay + 0.2});
    const leftCol = document.querySelector("#left_col_0000");

    tlIcon1.from(icon1, 0.4, { opacity: 0, scale: 0.3, ease: "back.out(4)"});
    tlIcon2.from(icon2, 0.4, { opacity: 0, scale: 0.3, ease: "back.out(4)"});
    tlIcon3.from(icon3, 0.4, { opacity: 0, scale: 0.3, ease: "back.out(4)"})
        .from(leftCol, 1.5, { opacity: 0, y: -200, ease: "elastic.out(1, 0.4)" });
    
}

function slide_anim_0100() {
    const tl = new TimelineMax({ delay: 0.8 });
    const tl2 = new TimelineMax({ delay: 0.2 });
    const message = document.querySelector("#message_0100");
    tl.from(message, 1.0, { opacity: 0, y: 200 } )
        .from(message, 0.4, { scale: 1.3 } );
    const game1 = document.querySelector("#magiczny_przedmiot_0100");
    const game2 = document.querySelector("#mind_reset_0100");
    const game3 = document.querySelector("#alfabet_game_0100");
    const game4 = document.querySelector("#color_game_0100");
    const game5 = document.querySelector("#zonglowanie_0100");
    tl2.from(game1, 0.3, { opacity: 0 } )
        .from(game2, 0.3, { opacity: 0 } )
        .from(game3, 0.3, { opacity: 0 } )
        .from(game4, 0.3, { opacity: 0 } )
        .from(game5, 0.3, { opacity: 0 } );

}

function slide_anim_0001() {
    const tl = new TimelineMax({ delay: 0.2 });
    const pileczki = document.querySelector("#pileczki_0001");
    tl.from(pileczki, 1, { opacity: 0, x: 250, y: 200, scale: 0.36} );

    const tl2 = new TimelineMax({ delay: 0.2 });
    const yellowBg = document.querySelector("#yellow_sidebar_0001");

    tl2.from(yellowBg, 0.8, { x: 1000} );

    const tl3 = new TimelineMax({ delay: 0.6 });
    const head = document.querySelector("#pileczki_text_0001");
    tl3.from(head, 0.7, { x: 200} );

    const tl4 = new TimelineMax({ delay: 0.8 });
    const desc = document.querySelector("#pileczki_text_desc_0001");
    tl4.from(desc, 0.8, { x: 150} );

    const tl5 = new TimelineMax({ delay: 0.6 });
    const pileczkiMono = document.querySelector("#pileczki_monocolor_0001");
    tl5.from(pileczkiMono, 1, { x: 100} );

}

function slide_anim_0200() {
    const tl = new TimelineMax({ delay: 0.7 });
    const tl2 = new TimelineMax({ delay: 1.0 });
    const alfabetHead = document.querySelector("#alfabet_header_0200");
    const alfabetText = document.querySelector("#alfabet_text_0200");
    tl.from(alfabetHead, 0.6, { opacity: 0 } );
    tl2.from(alfabetText, 1.6, { opacity: 0 } );

    const tl3 = new TimelineMax({ delay: 0.2 });
    const elon = document.querySelector("#elon_0200");

    tl3.from(elon, 1.4, { y: 400, ease: "elastic.out(1, 0.4)"} );

    const icon1 = document.querySelector("#icon_vol_0200");
    const icon2 = document.querySelector("#icon_list_0200");
    const icon3 = document.querySelector("#icon_play_0200");

    const iconsDelay = 1.5;

    const tlIcon1 = new TimelineMax({ delay: iconsDelay });
    const tlIcon2 = new TimelineMax({ delay: iconsDelay + 0.3});
    const tlIcon3 = new TimelineMax({ delay: iconsDelay + 0.2});

    tlIcon1.from(icon1, 0.4, { opacity: 0, scale: 0.3, ease: "back.out(4)"});
    tlIcon2.from(icon2, 0.4, { opacity: 0, scale: 0.3, ease: "back.out(4)"});
    tlIcon3.from(icon3, 0.4, { opacity: 0, scale: 0.3, ease: "back.out(4)"})
        .from(leftCol, 1.5, { opacity: 0, y: -200, ease: "elastic.out(1, 0.4)" });

}

function slide_anim_0201() {
    const tl = new TimelineMax({ delay: 0.5 });
    const elon = document.querySelector("#elon_0201");

    tl.from(elon, 1.4, { opacity: 0 } );
}

function slide_anim_0300() {
    const tl = new TimelineMax({ delay: 0.2 });
    const tl2 = new TimelineMax({ delay: 0.35 });
    const tl3 = new TimelineMax({ delay: 0.8 });
    const tl4 = new TimelineMax({ delay: 1.0 });

    const fotel = document.querySelector("#fotel_0300");
    const elon = document.querySelector("#elon_0300");

    tl.from(fotel, 1.4, { y: -200, opacity: 0, ease: "power2.out" } );
    tl2.from(elon, 1.4, { y: -200, opacity: 0, ease: "power2.out"} );

    const strefaHead = document.querySelector("#strefa_header_0300");

    const strefaText = document.querySelector("#strefa_text_0300");
    tl3.from(strefaHead, 0.6, { opacity: 0 } );
    tl4.from(strefaText, 1.0, { opacity: 0 } );

    const icon1 = document.querySelector("#icon_vol_0300");
    const icon2 = document.querySelector("#icon_list_0300");
    const icon3 = document.querySelector("#icon_play_0300");

    const iconsDelay = 1.5;

    const tlIcon1 = new TimelineMax({ delay: iconsDelay });
    const tlIcon2 = new TimelineMax({ delay: iconsDelay + 0.3});
    const tlIcon3 = new TimelineMax({ delay: iconsDelay + 0.2});

    tlIcon1.from(icon1, 0.4, { opacity: 0, scale: 0.3, ease: "back.out(4)"});
    tlIcon2.from(icon2, 0.4, { opacity: 0, scale: 0.3, ease: "back.out(4)"});
    tlIcon3.from(icon3, 0.4, { opacity: 0, scale: 0.3, ease: "back.out(4)"})
        .from(leftCol, 1.5, { opacity: 0, y: -200, ease: "elastic.out(1, 0.4)" });

}

function slide_anim_0301() {
    const tl = new TimelineMax({ delay: 0.5 });
    const elon = document.querySelector("#elon_0301");

    tl.from(elon, 1.4, { y: -200, opacity: 0 } );
}

function slide_anim_0400() {
    const tl = new TimelineMax({ delay: 0.2 });
    const tl2 = new TimelineMax({ delay: 0.3 });
    const tl3 = new TimelineMax({ delay: 0.6 });
    const tl4 = new TimelineMax({ delay: 0.8 });

    const stolik = document.querySelector("#stolik_0400");
    const elon = document.querySelector("#elon_0400");

    tl.from(stolik, 0.8, { x: -300, opacity: 0, ease: "elastic.out(1, 0.4)" } );
    tl2.from(elon, 0.8, { x: -300, opacity: 0, ease: "elastic.out(1, 0.4)"} );

    const nagrodyHead = document.querySelector("#nagrody_header_0400");
    const nagrodyText = document.querySelector("#nagrody_text_0400");

    tl3.from(nagrodyHead, 0.6, { opacity: 0 } );
    tl4.from(nagrodyText, 1.0, { opacity: 0 } );

    const icon1 = document.querySelector("#icon_vol_0400");
    const icon2 = document.querySelector("#icon_list_0400");
    const icon3 = document.querySelector("#icon_play_0400");

    const iconsDelay = 1.5;

    const tlIcon1 = new TimelineMax({ delay: iconsDelay });
    const tlIcon2 = new TimelineMax({ delay: iconsDelay + 0.3});
    const tlIcon3 = new TimelineMax({ delay: iconsDelay + 0.2});

    tlIcon1.from(icon1, 0.4, { opacity: 0, scale: 0.3, ease: "back.out(4)"});
    tlIcon2.from(icon2, 0.4, { opacity: 0, scale: 0.3, ease: "back.out(4)"});
    tlIcon3.from(icon3, 0.4, { opacity: 0, scale: 0.3, ease: "back.out(4)"})
        .from(leftCol, 1.5, { opacity: 0, y: -200, ease: "elastic.out(1, 0.4)" });

}

Reveal.on( 'ready', event => {
    slide_anim_0000();
} );
Reveal.on( 'slidechanged', event => {
    if(event.indexh == 0 && event.indexv == 0) {
        slide_anim_0000();
    }

    else if(event.indexh == 0 && event.indexv == 1) {
        slide_anim_0001();
    }

    else if(event.indexh == 1 && event.indexv == 0) {
        slide_anim_0100();

    }
    else if(event.indexh == 2 && event.indexv == 0) {
        slide_anim_0200();
    }

    else if(event.indexh == 2 && event.indexv == 1) {
        slide_anim_0201();
    }

    else if(event.indexh == 3 && event.indexv == 0) {
        slide_anim_0300();
    }

    else if(event.indexh == 3 && event.indexv == 1) {
        slide_anim_0301();
    }

    else if(event.indexh == 4 && event.indexv == 0) {
        slide_anim_0400();
    }

});

