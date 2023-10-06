document.addEventListener('scroll', function() {
    // Array que contiene las IDs de las secciones y sus posiciones en el menú
    var sectionsPositions = [
        { id: 'About_me', position: '0' },
        { id: 'First_part', position: '0' },
        { id: 'Experience', position: '14.5vh' },
        { id: 'Skills', position: '29vh' },
        { id: 'Projects', position: '43.5vh' },
        { id: 'Contact', position: '57.5vh' }
    ];

    // Obtener el círculo
    var circle = document.querySelector('.circle');

    //Obtener todos los links del menu
    var link_About_me = document.querySelector('#link-About_me');

    // Recorrer el array para encontrar la sección actualmente visible
    sectionsPositions.forEach(function(sectionData) {
        var sectionElement = document.getElementById(sectionData.id);
        var sectionTop = sectionElement.offsetTop;
        var sectionHeight = sectionElement.offsetHeight;
        
        if (window.scrollY >= sectionTop - sectionHeight / 4 && window.scrollY < sectionTop + sectionHeight / 4) {
            // Mover el círculo a la posición correspondiente en el menú
            circle.style.top = sectionData.position;
        }
    });
});


document.addEventListener('scroll', function() {
    var sectionsPositions = [
        { id: 'About_me', position: '0', linkId: 'link-About_me' },
        { id: 'First_part', position: '0', linkId: 'link-About_me' },
        { id: 'Experience', position: '14.5vh', linkId: 'link-Experience' },
        { id: 'Skills', position: '29vh', linkId: 'link-Skills' },
        { id: 'Projects', position: '43.5vh', linkId: 'link-Projects' },
        { id: 'Contact', position: '57.5vh', linkId: 'link-Contact' }
    ];

    // Obtener el círculo y los enlaces
    var circle = document.querySelector('.circle');
    var links = document.querySelectorAll('.menu a');

    sectionsPositions.forEach(function(sectionData) {
        var sectionElement = document.getElementById(sectionData.id);
        var sectionTop = sectionElement.offsetTop;
        var sectionHeight = sectionElement.offsetHeight;

        if (window.scrollY >= sectionTop - sectionHeight / 4 && window.scrollY < sectionTop + sectionHeight / 4) {
            // Mover el círculo a la posición correspondiente en el menú
            circle.style.top = sectionData.position;

            // Restablecer estilos de todos los enlaces
            links.forEach(function(link) {
                link.style.color = '';
                link.style.fontSize = '';
                link.style.fontWeight = '';
            });

            // Establecer estilos para el enlace activo
            var activeLink = document.querySelector('.menu a[data-section="' + sectionData.id + '"]');
            activeLink.style.fontSize = '30px'; 
            activeLink.style.fontWeight = '700';
        }
    });
});
