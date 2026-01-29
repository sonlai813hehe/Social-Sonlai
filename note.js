import { Fireworks } from 'https://cdn.skypack.dev/fireworks-js'

document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.social-container');
    if (container) {
        container.style.opacity = 0;
        container.style.transition = 'opacity 1s ease-in';
        setTimeout(() => { container.style.opacity = 1; }, 100);
    }
    const fwContainer = document.querySelector('.fireworks-container');
    const fireworks = new Fireworks(fwContainer, {
        autoresize: true,
        opacity: 0.5,
        acceleration: 1.05,
        friction: 0.97,
        gravity: 0.5,
        particles: 60,
        explosion: 10,
        intensity: 30,
        sound: {
            enabled: true, // Bật
            files: [
                'explosion0.mp3',
                'explosion1.mp3',
                'explosion2.mp3'
            ],
            volume: { min: 10, max: 15 }
        }
    });

    fireworks.start();
setTimeout(() => {
        fireworks.stop();
    }, 50000);

});
