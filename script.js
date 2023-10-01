
document.getElementById('portfolioButton').addEventListener('mouseover', function() {
    document.querySelector('.wave').classList.add('agitate');
});

document.getElementById('portfolioButton').addEventListener('mouseout', function() {
    document.querySelector('.wave').classList.remove('agitate');
});
