const card = document.getElementById('card');
const shine = document.getElementById('shine');

const MAX_ROTATION = 15;

card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();

    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    const rotateY = (x - 0.5) * MAX_ROTATION * 2;
    const rotateX = (0.5 - y) * MAX_ROTATION * 2;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03, 1.03, 1.03)`;

    shine.style.opacity = '1';
    shine.style.background = `radial-gradient(circle at ${x * 100}% ${y * 100}%, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0) 70%)`;
});

card.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    shine.style.opacity = '0';
}); 