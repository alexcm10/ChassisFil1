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
      
      // Récupérer les données du formulaire
      const formData = new FormData(contactForm);
      
      // Envoyer le formulaire via fetch
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString()
      })
      .then(response => {
        console.log('Réponse du serveur:', response);
        if (response.ok) {
          // Succès
          formMessage.textContent = 'Message envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.';
          formMessage.className = 'form-message success';
          contactForm.reset(); // Vider le formulaire
        } else {
          // Erreur
          formMessage.textContent = 'Erreur lors de l\'envoi. Veuillez réessayer.';
          formMessage.className = 'form-message error';
        }
      })
      .catch(error => {
        // Erreur réseau
        console.error('Erreur fetch:', error);
        formMessage.textContent = 'Erreur de connexion. Veuillez réessayer ou nous contacter directement.';
        formMessage.className = 'form-message error';
      })
      .finally(() => {
        // Réactiver le bouton
        submitBtn.disabled = false;
        submitBtn.textContent = 'Envoyer';
        formMessage.style.display = 'block';
        
        // Masquer le message après 5 secondes
        setTimeout(() => {
          formMessage.style.display = 'none';
        }, 5000);
      });
    });
  }
});
