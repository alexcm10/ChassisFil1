# Configuration Google Tag Manager pour ChâssisFil

## ✅ Configuration terminée !

Votre site est maintenant configuré avec **Google Tag Manager (GTM)** avec l'ID : `GTM-KCT3SJG2`

## 🔧 Configuration actuelle

Votre site utilise Google Tag Manager qui permet de :
- Gérer tous vos tags (Google Analytics, Facebook Pixel, etc.) depuis une interface centralisée
- Déployer des tags sans modifier le code de votre site
- Respecter automatiquement les préférences de consentement des utilisateurs
- Suivre les conversions et événements personnalisés

## 📋 Code installé

### Dans le `<head>` de chaque page :
```html
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KCT3SJG2');</script>
<!-- End Google Tag Manager -->
```

### Dans le `<body>` de chaque page :
```html
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KCT3SJG2"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
```

## 📊 Pages configurées

Le code GTM a été installé sur toutes les pages de votre site :
- ✅ `index.html`
- ✅ `services.html`
- ✅ `realisations.html`
- ✅ `apropos.html`
- ✅ `contact.html`
- ✅ `politique-confidentialite.html`
- ✅ `mentions-legales.html`

## 🚀 Prochaines étapes

### 1. Configurer Google Analytics dans GTM
1. Connectez-vous à [tagmanager.google.com](https://tagmanager.google.com)
2. Sélectionnez votre conteneur `GTM-KCT3SJG2`
3. Allez dans **Tags** → **Nouveau**
4. Choisissez **Google Analytics : Configuration GA4**
5. Entrez votre ID de mesure GA4
6. Configurez le déclencheur pour toutes les pages

### 2. Configurer le consentement
1. Dans GTM, allez dans **Tags** → **Nouveau**
2. Choisissez **Consentement initial**
3. Configurez les paramètres de consentement selon vos besoins

### 3. Tester l'installation
1. Uploadez vos fichiers sur votre serveur web
2. Utilisez l'outil **Aperçu** de GTM pour tester
3. Vérifiez que les données arrivent dans Google Analytics

## 🍪 Conformité RGPD

Votre site est configuré pour respecter le RGPD :
- GTM gère automatiquement le consentement des cookies
- Votre politique de confidentialité mentionne l'utilisation de Google Analytics
- Les tags ne se déclenchent qu'avec le consentement approprié

## 📞 Support

Si vous avez des questions sur la configuration :
- Consultez la [documentation Google Tag Manager](https://support.google.com/tagmanager)
- Contactez votre développeur web
- Vérifiez que votre hébergeur autorise les scripts externes

## 🔍 Vérification

Pour vérifier que GTM fonctionne :
1. Ouvrez les outils de développement de votre navigateur (F12)
2. Allez dans l'onglet **Console**
3. Tapez : `dataLayer`
4. Vous devriez voir un tableau avec les événements GTM
