# Dossier assets

Place ici les images et autres ressources statiques utilisées par le site.

Conseils pour l'image de fond (background) :

- Nom recommandé : `bg.jpg` ou `bg.webp` (utilise `bg.webp` si possible pour de meilleures performances).
- Chemin attendu depuis `index.html` : `assets/bg.jpg` (ou `assets/bg.webp`).
- Taille recommandée : 1920×1080 optimisée pour le web. Compresse l'image (ex: TinyPNG, Squoosh) pour réduire le poids.
- Format : WebP si possible, sinon JPEG optimisé.
- Exemple d'utilisation CSS dans `style.css` :

body {
  background-image: url('assets/bg.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

Overlay pour lisibilité :

body::after {
  content: "";
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.45);
  pointer-events: none;
  z-index: 0;
}

Notes :
- Si tu veux que je mette l'image d'exemple dans le repo ou que j'édite `style.css` pour activer le background, dis-le et je le ferai.
