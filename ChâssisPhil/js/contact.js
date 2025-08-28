// Gestion du formulaire de contact avec Netlify Forms
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contactForm');
  const submitBtn = document.getElementById('submitBtn');
  const formMessage = document.getElementById('formMessage');

  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      // Désactiver le bouton pendant l'envoi
      submitBtn.disabled = true;
      submitBtn.textContent = 'Envoi en cours...';
      
      // Masquer les messages précédents
      formMessage.style.display = 'none';
      formMessage.className = 'form-message';
      
      // Laisser Netlify gérer l'envoi automatiquement
      // Le formulaire sera traité par Netlify Forms
      
      // Afficher un message de succès après un délai
      setTimeout(() => {
        formMessage.textContent = 'Message envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.';
        formMessage.className = 'form-message success';
        formMessage.style.display = 'block';
        
        // Réactiver le bouton
        submitBtn.disabled = false;
        submitBtn.textContent = 'Envoyer';
        
        // Vider le formulaire
        contactForm.reset();
        
        // Masquer le message après 5 secondes
        setTimeout(() => {
          formMessage.style.display = 'none';
        }, 5000);
      }, 2000);
    });
  }
});
