# SWNQ Launch Package - Development Guide

This document provides the final structure and instructions for launching **SWNQ (SmartWork Now Qatar)** as a Progressive Web App (PWA).

## 1. Project Structure
To launch the app, organize your files as follows:

```text
/root
├── index.html          (Launch Splash Screen)
├── role-selection.html (Onboarding - Role Selection)
├── login.html          (Login / Sign Up)
├── cv-upload.html      (Worker Onboarding - CV Upload)
├── worker-dash.html    (Worker Dashboard)
├── employer-dash.html  (Employer Dashboard)
├── create-request.html (Create Manpower Request)
├── success.html        (Requirement Published Success)
├── manifest.json       (PWA Configuration)
├── service-worker.js   (Offline Support Script)
└── assets/             (Images and Icons)
```

## 2. PWA Registration
Ensure every HTML file includes the following in the `<head>` section to enable mobile installation:

```html
<link rel="manifest" href="manifest.json">
<meta name="theme-color" content="#10b981">
<script>
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/service-worker.js');
    });
  }
</script>
```

## 3. Deployment Instructions
1. **Host on HTTPS**: PWAs require a secure connection to be installable. You can use free services like Vercel, Netlify, or GitHub Pages.
2. **Access via Mobile**: Open the URL in Safari (iOS) or Chrome (Android).
3. **Install**:
   - **iOS**: Tap the "Share" icon and select **"Add to Home Screen"**.
   - **Android**: Tap the three dots and select **"Install App"**.

## 4. Screen Inventory
You can access the full code for each screen by selecting them on the canvas and clicking the **⟨/⟩ View Code** button.

- **Splash:** {{DATA:SCREEN:SCREEN_9}}
- **Onboarding:** {{DATA:SCREEN:SCREEN_11}}, {{DATA:SCREEN:SCREEN_8}}
- **Dashboards:** {{DATA:SCREEN:SCREEN_14}}, {{DATA:SCREEN:SCREEN_15}}
- **Core Flows:** {{DATA:SCREEN:SCREEN_5}}, {{DATA:SCREEN:SCREEN_7}}