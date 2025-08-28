// Gestion du formulaire de contact avec Netlify Forms
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contactForm');
  const submitBtn = document.getElementById('submitBtn');
  const formMessage = document.getElementById('formMessage');

  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault(); // Empêcher la navigation par défaut
      
      // Désactiver le bouton pendant l'envoi
      submitBtn.disabled = true;
      submitBtn.textContent = 'Envoi en cours...';
      
      // Masquer les messages précédents
      formMessage.style.display = 'none';
      formMessage.className = 'form-message';
      
      // Simuler l'envoi (pour l'instant)
      setTimeout(() => {
        // Succès simulé
        formMessage.textContent = 'Message envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.';
        formMessage.className = 'form-message success';
        formMessage.style.display = 'block';
        
        // Vider le formulaire
        contactForm.reset();
        
        // Réactiver le bouton
        submitBtn.disabled = false;
        submitBtn.textContent = 'Envoyer';
        
        // Masquer le message après 5 secondes
        setTimeout(() => {
          formMessage.style.display = 'none';
        }, 5000);
        
        // Envoyer les données en arrière-plan
        const formData = new FormData(contactForm);
        fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams(formData).toString()
        }).catch(error => {
          console.log('Envoi en arrière-plan:', error);
        });
      }, 1500);
    });
  }
});
