const images = [
    'flower2.jpg',
    'flower1.jpg',
    'flower3.jpg',
    'flower4.jpg',
    'flower5.jpg',
    'flower6.jpg'
];

let currentIndex = 0;

function changeBackgroundImage() {
    const homeSection = document.querySelector('.home');
    homeSection.style.backgroundImage = `url(${images[currentIndex]})`;
    currentIndex = (currentIndex + 1) % images.length;
}

setInterval(changeBackgroundImage, 5000);

window.onload = changeBackgroundImage;

document.querySelectorAll('header .navbar a').forEach(function(link) {
    link.addEventListener('click', function() {
        if (window.innerWidth <= 895) {
            document.getElementById('toggler').checked = false;
        }
    });
});


