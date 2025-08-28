// Gestion du formulaire de contact
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contactForm');
  const submitBtn = document.getElementById('submitBtn');
  const formMessage = document.getElementById('formMessage');

  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Désactiver le bouton pendant l'envoi
      submitBtn.disabled = true;
      submitBtn.textContent = 'Envoi en cours...';
      
      // Masquer les messages précédents
      formMessage.style.display = 'none';
      formMessage.className = 'form-message';
      
      // Récupérer les données du formulaire
      const formData = new FormData(contactForm);
      
      // Envoyer le formulaire
      fetch('process-contact.php', {
        method: 'POST',
        body: formData
      })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          // Succès
          formMessage.textContent = data.message;
          formMessage.className = 'form-message success';
          contactForm.reset();
        } else {
          // Erreur
          formMessage.textContent = data.message;
          formMessage.className = 'form-message error';
        }
      })
      .catch(error => {
        // Erreur réseau
        formMessage.textContent = 'Erreur de connexion. Veuillez réessayer ou nous contacter directement.';
        formMessage.className = 'form-message error';
        console.error('Erreur:', error);
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
