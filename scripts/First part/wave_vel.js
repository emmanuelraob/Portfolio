document.getElementById("portfolioButton").addEventListener("mouseover", function() {
    // Cambia la duración de la animación de las olas cuando el botón está en hover
    document.querySelector(".wave1").style.animation = "moveWave1 700s linear infinite";
    document.querySelector(".wave2").style.animation = "moveWave2 500s linear infinite reverse";
    document.querySelector(".wave3").style.animation = "moveWave3 500s linear infinite";
});

document.getElementById("portfolioButton").addEventListener("mouseout", function() {
    // Restaura la duración original de la animación de las olas cuando el botón no está en hover
    document.querySelector(".wave1").style.animation = "moveWave1 1000s linear infinite";
    document.querySelector(".wave2").style.animation = "moveWave2 1500s linear infinite reverse";
    document.querySelector(".wave3").style.animation = "moveWave3 1500s linear infinite";
});