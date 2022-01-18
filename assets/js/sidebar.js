
    const link = [...document.querySelectorAll( '.a-slider' )];
    const line = [...document.querySelectorAll( '.line' )];

    const welcome = document.getElementById( 'welcome' );
    const whoWeAre = document.getElementById( 'who-we-are' );
    const whatWeDo = document.getElementById( 'what-we-do' );
    const contact = document.getElementById( 'contact' );

    const bgSlider = (entradas, observador) => {
        entradas.forEach((entrada, e) => {
            if (entrada.isIntersecting) {
                link[0].classList.add( 'a-slider--color' );
                line[0].classList.add( 'line--slider' );
            } else {
                link[0].classList.remove( 'a-slider--color' );
                line[0].classList.remove( 'line--slider' );
            }
        });

    }

    const bgSlider2 = (entradas, observador) => {
        entradas.forEach((entrada, e) => {
            if (entrada.isIntersecting) {
                link[1].classList.add( 'a-slider--color' );
                line[1].classList.add( 'line--slider' );
            } else {
                link[1].classList.remove( 'a-slider--color' );
                line[1].classList.remove( 'line--slider' );
            }
        });

    }

    const bgSlider3 = (entradas, observador) => {
        entradas.forEach((entrada, e) => {
            if (entrada.isIntersecting) {
                link[2].classList.add( 'a-slider--color' );
                line[2].classList.add( 'line--slider' );
            } else {
                link[2].classList.remove( 'a-slider--color' );
                line[2].classList.remove( 'line--slider' );
            }
        });

    }

    const bgSlider4 = (entradas, observador) => {
        entradas.forEach((entrada, e) => {
            if (entrada.isIntersecting) {
                link[3].classList.add( 'a-slider--color' );
                line[3].classList.add( 'line--slider' );
            } else {
                link[3].classList.remove( 'a-slider--color' );
                line[3].classList.remove( 'line--slider' );
            }
        });

    }

    const observador = new IntersectionObserver( bgSlider, { root: null, rootMargin: '0px', threshold: 0.4 } );
    observador.observe(welcome);

    const observador2 = new IntersectionObserver( bgSlider2, { root: null, rootMargin: '0px', threshold: 0.4 } );
    observador2.observe(whoWeAre);

    const observador3 = new IntersectionObserver( bgSlider3, { root: null, rootMargin: '0px', threshold: 0.4 } );
    observador3.observe(whatWeDo);

    const observador4 = new IntersectionObserver( bgSlider4, { root: null, rootMargin: '0px', threshold: 0.4 } );
    observador4.observe(contact);


 