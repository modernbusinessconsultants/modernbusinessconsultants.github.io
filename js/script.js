/* --- Dark Mode Toggle with localStorage --- */
function toggleDarkMode() {
    var body = document.body;
    var icon = document.getElementById('mode-icon');
    var text = document.getElementById('mode-text');

    body.classList.toggle('dark-mode');

    var isDark = body.classList.contains('dark-mode');
    if (icon) icon.textContent = isDark ? '\u2600\uFE0F' : '\uD83C\uDF19';
    if (text) text.textContent = isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode';

    try {
        localStorage.setItem('mbc-dark-mode', isDark ? 'true' : 'false');
    } catch (e) { /* localStorage unavailable */ }
}

/* Restore dark mode preference on page load */
(function() {
    try {
        if (localStorage.getItem('mbc-dark-mode') === 'true') {
            document.body.classList.add('dark-mode');
            var icon = document.getElementById('mode-icon');
            var text = document.getElementById('mode-text');
            if (icon) icon.textContent = '\u2600\uFE0F';
            if (text) text.textContent = 'Switch to Light Mode';
        }
    } catch (e) { /* localStorage unavailable */ }
})();

/* --- FAQ Accordion --- */
function toggleFaq(el) {
    var isActive = el.classList.contains('active');
    el.classList.toggle('active');
    var span = el.querySelector('span');
    if (span) span.textContent = !isActive ? '\u2212' : '+';
    el.setAttribute('aria-expanded', !isActive);
}

/* --- Drone Lightbox --- */
function openLightbox(src) {
    var lightbox = document.getElementById('lightbox');
    var img = document.getElementById('lightbox-img');
    if (!lightbox || !img) return;

    img.src = src;
    lightbox.classList.add('active');
}

function closeLightbox() {
    var lightbox = document.getElementById('lightbox');
    if (lightbox) lightbox.classList.remove('active');
}

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeLightbox();
});

/* --- Smooth scroll for anchor links --- */
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            var target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});
