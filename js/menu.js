// Crée l'overlay une seule fois
const overlay = document.createElement('div');
overlay.classList.add('menu-overlay');
document.body.appendChild(overlay);

function toggleMenu() {
    const menu = document.getElementById('menu-flottant');
    const cercle = document.getElementById('cercle-menu');

    const estOuvert = menu.classList.contains('visible');

    if (estOuvert) {
        fermerMenu();
    } else {
        menu.classList.add('visible');
        cercle.classList.add('ouvert');
        overlay.classList.add('visible');
    }
}

function fermerMenu() {
    const menu = document.getElementById('menu-flottant');
    const cercle = document.getElementById('cercle-menu');

    menu.classList.remove('visible');
    cercle.classList.remove('ouvert');
    overlay.classList.remove('visible');
}

// Ferme le menu si on clique en dehors
overlay.addEventListener('click', fermerMenu);

// Ferme le menu avec la touche Échap
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') fermerMenu();
});