document.querySelectorAll('.filter-menu button').forEach(function(btn) {
    btn.addEventListener('click', function() {
        var filter = this.getAttribute('filter-data');

        if (filter == 'All') {
            document.querySelectorAll('.Projects .element').forEach(function(element) {
                element.classList.add('active');
            });
        } else {
            document.querySelectorAll('.Projects .element').forEach(function(element) {
                var categories = element.getAttribute('data-category').split(',');
                
                if (categories.includes(filter)) {
                    element.classList.add('active');
                } else {
                    element.classList.remove('active');
                }
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