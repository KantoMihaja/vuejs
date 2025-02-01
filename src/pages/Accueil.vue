<template>
    <div class="accueil-container">
      <!-- Vidéo en arrière-plan -->
      <video autoplay muted loop class="background-video">
        <source src="/bitcoin.mp4" type="video/mp4" />
      </video>
  
      <!-- Message de bienvenue -->
      <div class="welcome-message">
        <h1>Bienvenue dans votre compte Cryptomonnaie</h1>
        <p>Gérez vos actifs numériques en toute simplicité.</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Accueil",
  };
  </script>
  
  <style scoped>
  .accueil-container {
    position: relative;
    height: 100vh; /* Prend toute la hauteur de la vue */
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: white; /* Couleur du texte */
    overflow: hidden; /* Cache tout débordement de la vidéo */
  }
  
  .background-video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover; /* Couvre toute la zone sans déformation */
    z-index: 1; /* Place la vidéo au premier plan */
  }
  
  .welcome-message {
    background-color: rgba(0, 0, 0, 0.6); /* Fond semi-transparent pour le texte */
    padding: 2rem;
    border-radius: 10px;
    z-index: 2; /* Place le message au-dessus de la vidéo */
  }
  
  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  
  p {
    font-size: 1.5rem;
  }
  </style>
  