document.getElementById("bgMusic").volume = 0.3;

document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll('.transition-btn');
    const transitionSound = document.getElementById('transitionSound');
    
    // Play sounds when page loads/during fade-in
    playClickSound();
    transitionSound.play();
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('data-href');
            window.location.href = href;
        });
    });
});

function playClickSound() {
    let clickSound = new Audio("../audio/button.mp3");
    clickSound.volume = 1.0;
    clickSound.play();
}
