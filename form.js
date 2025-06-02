// Affiche une alerte de confirmation lors de l'envoi du formulaire de contact
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('#contact form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // Optionnel : vérifier les champs ici si besoin
            setTimeout(() => {
                alert('Merci pour votre message ! Nous vous répondrons bientôt.');
            }, 100); // Laisse le temps au formulaire d'être envoyé
        });
    }
});






