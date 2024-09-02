document.addEventListener('DOMContentLoaded', () => {
    const frame = document.querySelector('.frame');
    const totalCircles = 50;

    for (let i = 1; i <= totalCircles; i++) {
        const circle = document.createElement('div');
        circle.classList.add('circle');
        circle.style.animationDelay = `${(i - 1) * 0.4}s`;
        circle.style.zIndex = i;
        frame.appendChild(circle);
    }
});
