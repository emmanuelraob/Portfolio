window.addEventListener('scroll', function() {
    var scrolled = window.scrollY;
    document.querySelectorAll('.corals img').forEach(function(img) {
        img.style.transform = 'translate3d(0,' + (scrolled * -0.3) + 'px, 0)';
    });
});
