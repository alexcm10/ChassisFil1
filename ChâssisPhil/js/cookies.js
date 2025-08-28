// Gestion des cookies conforme RGPD
class CookieConsent {
  constructor() {
    this.cookieName = 'chassisfil_cookie_consent';
    this.cookieExpiry = 365; // jours
    this.init();
  }

  init() {
    // Vérifier si la bannière existe déjà pour éviter les doublons
    if (document.getElementById('cookie-banner')) {
      return;
    }
    
    const consent = this.getCookie(this.cookieName);
    console.log('Cookie consent trouvé:', consent);
    
    // Si aucun consentement ou consentement vide, afficher la bannière
    if (!consent || consent === '' || consent === 'null' || consent === 'undefined') {
      console.log('Aucun consentement trouvé, affichage de la bannière');
      this.showBanner();
    } else if (consent === 'accepted') {
      console.log('Consentement accepté, chargement analytics');
      this.loadAnalytics();
    } else if (consent === 'refused') {
      console.log('Cookies refusés par l\'utilisateur');
      // Ne rien faire, l'utilisateur a refusé
    } else {
      console.log('Consentement inconnu:', consent, '- affichage de la bannière');
      this.showBanner();
    }
  }

  hasConsent() {
    const consent = this.getCookie(this.cookieName);
    return consent === 'accepted';
  }

  showBanner() {
    // Vérifier si la bannière existe déjà
    if (document.getElementById('cookie-banner')) {
      console.log('Bannière déjà présente, pas de doublon');
      return;
    }
    
    console.log('Création de la bannière de cookies');
    const banner = document.createElement('div');
    banner.id = 'cookie-banner';
    banner.innerHTML = `
      <div class="cookie-content">
        <div class="cookie-text">
          <h3>🍪 Cookies et confidentialité</h3>
          <p>Nous utilisons des cookies pour analyser le trafic de notre site et améliorer votre expérience. 
          En continuant à naviguer, vous acceptez l'utilisation de ces cookies.</p>
          <div class="cookie-links">
            <a href="politique-confidentialite.html" target="_blank">Politique de confidentialité</a>
          </div>
        </div>
        <div class="cookie-buttons">
          <button id="accept-cookies" class="btn-accept">Accepter</button>
          <button id="refuse-cookies" class="btn-refuse">Refuser</button>
        </div>
      </div>
    `;
    
    document.body.appendChild(banner);
    
    // Événements
    document.getElementById('accept-cookies').addEventListener('click', () => {
      this.acceptCookies();
    });
    
    document.getElementById('refuse-cookies').addEventListener('click', () => {
      this.refuseCookies();
    });
  }

  acceptCookies() {
    console.log('Cookies acceptés par l\'utilisateur');
    this.setCookie(this.cookieName, 'accepted', this.cookieExpiry);
    this.hideBanner();
    this.loadAnalytics();
    
    // Stocker aussi en localStorage comme backup
    localStorage.setItem(this.cookieName, 'accepted');
  }

  refuseCookies() {
    console.log('Cookies refusés par l\'utilisateur');
    this.setCookie(this.cookieName, 'refused', this.cookieExpiry);
    this.hideBanner();
    
    // Stocker aussi en localStorage comme backup
    localStorage.setItem(this.cookieName, 'refused');
  }

  hideBanner() {
    const banner = document.getElementById('cookie-banner');
    if (banner) {
      banner.style.display = 'none';
      console.log('Bannière masquée');
    }
  }

  loadAnalytics() {
    // Google Analytics 4
    if (typeof gtag !== 'undefined') {
      gtag('consent', 'update', {
        'analytics_storage': 'granted'
      });
      console.log('Google Analytics activé');
    } else {
      console.log('Google Analytics non disponible');
    }
  }

  setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    const cookieString = name + "=" + value + ";" + expires + ";path=/;SameSite=Lax";
    document.cookie = cookieString;
    console.log('Cookie défini:', name, '=', value, 'pour', days, 'jours');
    
    // Vérification après un court délai
    setTimeout(() => {
      const verification = this.getCookie(name);
      console.log('Vérification cookie (après délai):', name, '=', verification);
    }, 100);
  }

  getCookie(name) {
    // Essayer d'abord le localStorage comme backup
    const localStorageValue = localStorage.getItem(name);
    if (localStorageValue) {
      console.log('Cookie trouvé dans localStorage:', name, '=', localStorageValue);
      return localStorageValue;
    }
    
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) {
        const value = c.substring(nameEQ.length, c.length);
        console.log('Cookie lu:', name, '=', value);
        return value;
      }
    }
    console.log('Cookie non trouvé:', name);
    return null;
  }
}

// Initialiser la gestion des cookies
document.addEventListener('DOMContentLoaded', function() {
  console.log('=== Initialisation de la gestion des cookies ===');
  console.log('Cookies actuels:', document.cookie);
  new CookieConsent();
});
