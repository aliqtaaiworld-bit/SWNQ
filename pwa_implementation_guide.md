# SWNQ PWA Setup Guide

To turn these designs into an installable Progressive Web App (PWA), follow these steps:

## 1. File Structure
Place the following files in your root directory:
- `index.html` (Your primary dashboard or splash screen)
- `manifest.json` (The configuration file I've generated)
- `service-worker.js` (The background script for offline support)

## 2. Link the Manifest
Add this line to the `<head>` section of all your HTML files:
```html
<link rel="manifest" href="manifest.json">
<meta name="theme-color" content="#10b981">
<link rel="apple-touch-icon" href="icon-192x192.png">
```

## 3. Register the Service Worker
Add this script to your main `index.html`:
```javascript
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then(reg => console.log('SW registered!', reg))
      .catch(err => console.log('SW registration failed:', err));
  });
}
```

## 4. Deploy to HTTPS
PWAs require a secure connection (HTTPS) to be installable on mobile devices. Once deployed, users will see an "Add to Home Screen" prompt in their browser.