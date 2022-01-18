
const image1 = document.querySelector( '.img-1' );
const image2 = document.querySelector( '.img-2' );
const image3 = document.querySelector( '.img-3' );

const icon1 = document.querySelector( '.icon1' );
const icon2 = document.querySelector( '.icon2' );
const icon3 = document.querySelector( '.icon3' );
const icon4 = document.querySelector( '.icon4' );
const icon5 = document.querySelector( '.icon5' );
const icon6 = document.querySelector( '.icon6' );


const showImg = ( entradas, observador ) => {
    entradas.forEach(( entrada ) => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add( 'galery__img--show' );
            entrada.target.classList.add( 'ion-icon--show' );
        } else {
            entrada.target.classList.remove( 'galery__img--show' );
        }
    });
}

const observadorGalery = new IntersectionObserver( showImg, {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
} );

observadorGalery.observe( image1 );
observadorGalery.observe( image2 );
observadorGalery.observe( image3 );

observadorGalery.observe( icon1 );
observadorGalery.observe( icon2 );
observadorGalery.observe( icon3 );
observadorGalery.observe( icon4 );
observadorGalery.observe( icon5 );
observadorGalery.observe( icon6 );