var image = document.getElementById('main-image');
    new simpleParallax(image, {
        scale: 1.5,
        delay: 1,
        transition: 'cubic-bezier(0,0,0,1)',
        orientation: 'right',
        overflowOpacity: 0,
        parallaxBackground: true,
        parallaxElement: true,
        parallaxElementClass: 'parallax',
        parallaxElementScroll: true,
        parallaxElementScrollOffset: 0,
        parallaxElementScrollReverse: false
    });