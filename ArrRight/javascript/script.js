document.getElementById("bgMusic").volume = 0.3;

document.addEventListener("DOMContentLoaded", function() {
    // Get all buttons with the class 'transition-btn'
    const buttons = document.querySelectorAll('.transition-btn');
    const transitionSound = document.getElementById('transitionSound');
    
    // Play sounds when page loads/during fade-in
    transitionSound.play();
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('data-href');
            window.location.href = href;
        });
    });
});
