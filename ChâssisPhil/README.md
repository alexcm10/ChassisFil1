# ChâssisFil - Site Web

## 📋 Vérification pour publication OVH

### ✅ Structure du site
- [x] Toutes les pages HTML sont présentes
- [x] Navigation cohérente sur toutes les pages
- [x] Liens internes fonctionnels
- [x] Images optimisées dans le dossier `assets/`
- [x] CSS et JavaScript correctement liés
- [x] Responsive design implémenté

### ✅ Conformité RGPD
- [x] Bannière de cookies conforme RGPD
- [x] Politique de confidentialité complète
- [x] Mentions légales à jour
- [x] Consentement explicite pour les cookies analytiques

### ✅ Optimisations techniques
- [x] Meta tags appropriés
- [x] Structure HTML sémantique
- [x] Images avec attributs alt
- [x] Liens avec attributs title
- [x] Code JavaScript optimisé

## 🚀 Publication sur OVH

### 1. Préparation des fichiers
1. Compressez tous les fichiers du site dans un fichier ZIP
2. Vérifiez que la structure est maintenue :
   ```
   site/
   ├── index.html
   ├── services.html
   ├── realisations.html
   ├── apropos.html
   ├── contact.html
   ├── mentions-legales.html
   ├── politique-confidentialite.html
   ├── css/
   │   └── style.css
   ├── js/
   │   ├── services.js
   │   └── cookies.js
   └── assets/
       └── [toutes les images]
   ```

### 2. Upload sur OVH
1. Connectez-vous à votre espace client OVH
2. Accédez à votre hébergement web
3. Utilisez le gestionnaire de fichiers ou FTP
4. Uploadez tous les fichiers dans le dossier `www/` ou `public_html/`

### 3. Configuration du domaine
1. Vérifiez que votre nom de domaine pointe vers l'hébergement OVH
2. Configurez les DNS si nécessaire
3. Activez HTTPS (certificat SSL gratuit inclus)

## 📊 Configuration Google Analytics

### 1. Créer un compte Google Analytics
1. Allez sur [analytics.google.com](https://analytics.google.com)
2. Créez un nouveau compte pour ChâssisFil
3. Créez une nouvelle propriété pour votre site web
4. Notez votre **ID de mesure** (format : G-XXXXXXXXXX)

### 2. Remplacer l'ID de mesure
Dans tous les fichiers HTML, remplacez `GA_MEASUREMENT_ID` par votre véritable ID :

```html
<!-- Remplacez GA_MEASUREMENT_ID par votre ID réel -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX', {
    'consent_mode': 'default',
    'analytics_storage': 'denied'
  });
</script>
```

### 3. Fichiers à modifier
- `index.html`
- `services.html`
- `realisations.html`
- `apropos.html`
- `contact.html`
- `politique-confidentialite.html`

### 4. Vérification
1. Testez la bannière de cookies sur votre site
2. Vérifiez que Google Analytics se charge après acceptation
3. Testez le refus des cookies
4. Vérifiez les données dans Google Analytics

## 🔧 Fonctionnalités implémentées

### Bannière de cookies
- ✅ Conforme RGPD
- ✅ Consentement explicite
- ✅ Stockage du choix utilisateur
- ✅ Intégration avec Google Analytics
- ✅ Design responsive
- ✅ Liens vers la politique de confidentialité

### Google Analytics 4
- ✅ Mode consentement par défaut
- ✅ Désactivation par défaut des cookies
- ✅ Activation uniquement après consentement
- ✅ Configuration respectueuse de la vie privée

### Politique de confidentialité
- ✅ Conforme RGPD
- ✅ Informations complètes sur les cookies
- ✅ Droits des utilisateurs
- ✅ Coordonnées du responsable
- ✅ Durée de conservation

## 📞 Support

Pour toute question technique :
- Email : Chassisfil@gmail.com
- Téléphone : 0470/015870

## 🔄 Mises à jour

- **Décembre 2024** : Ajout de la bannière de cookies et Google Analytics
- **Décembre 2024** : Création de la politique de confidentialité
- **Décembre 2024** : Optimisation pour OVH
