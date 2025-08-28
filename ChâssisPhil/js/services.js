document.addEventListener('DOMContentLoaded', function() {
  // Gestion des boutons "En savoir +" (inchangé)
  const buttons = document.querySelectorAll('.btn-more');
  const allMore = document.querySelectorAll('.service-more');
  allMore.forEach(more => more.style.display = 'none');
  buttons.forEach(btn => {
    btn.addEventListener('click', function() {
      const target = btn.getAttribute('data-target');
      const bloc = document.getElementById('more-' + target);
      allMore.forEach(more => {
        if (more !== bloc) more.style.display = 'none';
      });
      if (bloc.style.display === 'none') {
        bloc.style.display = 'block';
      } else {
        bloc.style.display = 'none';
      }
    });
  });

  // Lightbox universelle, déclenchée uniquement par le bouton loupe
  function createLightbox() {
    let lightbox = document.getElementById('lightbox');
    if (!lightbox) {
      lightbox = document.createElement('div');
      lightbox.id = 'lightbox';
      lightbox.className = 'lightbox';
      lightbox.innerHTML = `
        <span class="lightbox-close" style="position:absolute;top:2.5vh;right:3vw;color:#fff;font-size:2.5rem;font-weight:bold;cursor:pointer;z-index:1100;">&times;</span>
        <img class="lightbox-content" id="lightbox-img" style="margin:3vh auto 0 auto;display:block;max-width:90vw;max-height:70vh;border-radius:12px;box-shadow:0 4px 32px rgba(0,0,0,0.25);">
        <div class="lightbox-caption" id="lightbox-caption" style="color:#fff;text-align:center;margin-top:1.2rem;font-size:1.15rem;font-weight:500;"></div>
      `;
      document.body.appendChild(lightbox);
    }
    return lightbox;
  }

  function setupLightbox() {
    const zoomBtns = document.querySelectorAll('.btn-zoom');
    if (!zoomBtns.length) return;
    const lightbox = createLightbox();
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const closeBtn = lightbox.querySelector('.lightbox-close');

    // On retire d'abord tout ancien écouteur (sécurité)
    zoomBtns.forEach(btn => {
      btn.replaceWith(btn.cloneNode(true));
    });
    // On sélectionne à nouveau les boutons clonés
    const newZoomBtns = document.querySelectorAll('.btn-zoom');
    newZoomBtns.forEach(btn => {
      btn.addEventListener('click', function(e) {
        e.stopPropagation();
        lightbox.style.display = 'flex';
        lightbox.style.alignItems = 'center';
        lightbox.style.justifyContent = 'center';
        lightbox.style.flexDirection = 'column';
        lightboxImg.src = btn.getAttribute('data-img');
        lightboxCaption.textContent = btn.getAttribute('data-caption') || '';
      });
    });
    closeBtn.addEventListener('click', function() {
      lightbox.style.display = 'none';
      lightboxImg.src = '';
      lightboxCaption.textContent = '';
    });
    lightbox.addEventListener('click', function(e) {
      if (e.target === lightbox) {
        lightbox.style.display = 'none';
        lightboxImg.src = '';
        lightboxCaption.textContent = '';
      }
    });
  }

  setupLightbox();

  // Modale Mentions légales (chargement dynamique)
  const legalLink = document.getElementById('legal-link');
  const modalLegal = document.getElementById('modal-legal');
  const closeLegal = document.getElementById('close-legal');
  const modalContent = document.querySelector('.modal-legal-content');
  if (legalLink && modalLegal && closeLegal && modalContent) {
    legalLink.addEventListener('click', function(e) {
      e.preventDefault();
      // Charger le contenu dynamiquement
      fetch('mentions-legales.html')
        .then(response => response.text())
        .then(html => {
          // On garde le bouton de fermeture en haut
          modalContent.innerHTML = '<button id="close-legal" style="position:absolute;top:12px;right:18px;font-size:2rem;background:none;border:none;color:#222;cursor:pointer;">&times;</button>' + html;
          // Réattacher l'écouteur sur le nouveau bouton
          document.getElementById('close-legal').onclick = function() {
            modalLegal.style.display = 'none';
          };
        });
      modalLegal.style.display = 'flex';
    });
    closeLegal.addEventListener('click', function() {
      modalLegal.style.display = 'none';
    });
    modalLegal.addEventListener('click', function(e) {
      if (e.target === modalLegal) {
        modalLegal.style.display = 'none';
      }
    });
  }
}); 