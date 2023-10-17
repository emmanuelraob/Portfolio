document.querySelectorAll('.filter-menu button').forEach(function(btn) {
    btn.addEventListener('click', function() {
        var filter = this.getAttribute('filter-data');

        if (filter == 'All') {
            document.querySelectorAll('.Projects .element').forEach(function(element) {
                element.classList.add('active');
            });
        } else {
            document.querySelectorAll('.Projects .element').forEach(function(element) {
                element.classList.remove('active');
            });

            document.querySelectorAll('.Projects .element[data-category="'+filter+'"]').forEach(function(element) {
                element.classList.add('active');
            });
        }
    });
});

function markbutton(element){
    let buttons = document.querySelectorAll('.Projects .btn');
    buttons.forEach(function(btn){
        btn.classList.remove('active')
    })
    
    element.classList.add('active')
}