// Funcionalidad de ejemplo: desplazamiento suave al hacer clic en "Experiencia".
document.querySelector('experiencia p').addEventListener('click', function() {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    });
});

function filterProjects(category) {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        if (category === 'all') {
            card.classList.remove('hidden');
        } else {
            if (card.classList.contains(category)) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        }
    });
}
