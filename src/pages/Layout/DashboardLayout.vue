<template>
  <div class="wrapper">
    <notifications></notifications>

    <!-- Barre de navigation en haut -->
    <nav class="top-nav">
      <!-- <sidebar-link to="/dashboard">
        <md-icon>dashboard</md-icon>
        <p>Tableau de bord</p>
      </sidebar-link>
      <sidebar-link to="/user">
        <md-icon>person</md-icon>
        <p>Profil utilisateur</p>
      </sidebar-link> -->

      <sidebar-link to="/login">
        <md-icon></md-icon>
        <p>Login</p>
      </sidebar-link>qa&
      <sidebar-link to="/liste-crypto">
        <md-icon>content_paste</md-icon>
        <p>Liste des cryptomonnaies</p>
      </sidebar-link>
      <sidebar-link to="/liste-ventes">
        <md-icon>shopping_cart</md-icon>
        <p>Liste des ventes</p>
      </sidebar-link>
      <sidebar-link to="/ajouter-portefeuille">
        <md-icon>account_balance_wallet</md-icon>
        <p>Ajouter Portefeuille</p>
      </sidebar-link>
      <sidebar-link to="/transaction">
        <md-icon>swap_horiz</md-icon>
        <p>Faire une transaction</p>
      </sidebar-link>

      <sidebar-link to="/analyseCommission">
        <md-icon>bar_chart</md-icon>
        <p>Analyse commission</p>
      </sidebar-link>

      <sidebar-link to="/filtre">
        <md-icon>filter_alt</md-icon>
        <p>Filtre</p>
      </sidebar-link>


      <sidebar-link to="/analyse">
        <md-icon style="margin-right: 20px;">assessment</md-icon>
        <p>Analyse</p>
      </sidebar-link>


    </nav>

    <!-- Barre latérale profil -->
    <div class="profile-sidebar">
      <div class="profile-info">
        <div class="profile-circle">
          <img src="path-to-default-image.jpg" alt="Photo de profil" class="profile-img" />
        </div>
        <h3>Nom de l'utilisateur</h3>
        <button @click="changeProfilePicture">Changer la photo</button>
      </div>
    </div>

    <!-- Contenu principal -->
    <div class="main-panel">
      <top-navbar></top-navbar>
      <dashboard-content></dashboard-content>
      <content-footer v-if="!$route.meta.hideFooter"></content-footer>
    </div>
  </div>
</template>

<script>
import TopNavbar from "./TopNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./Content.vue";

export default {
  components: {
    TopNavbar,
    DashboardContent,
    ContentFooter,
  },
  methods: {
    changeProfilePicture() {
      console.log("Changer la photo de profil");
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap");

/* Barre de navigation en haut */
.top-nav {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #17a7a7;
  padding: 0.1rem; /* Réduction de la hauteur */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 15px;
}

/* Liens de navigation */
.sidebar-link {
  color: #ffffff;
  text-decoration: none;
  margin: 0 15px;
  font-size: 16px;
  font-weight: 500;
  font-family: "Poppins", sans-serif;
  display: flex;
  align-items: center;
  transition: transform 0.2s ease, color 0.2s ease;
}

.sidebar-link:hover {
  transform: scale(1.1);
  color: #f8f8f8;
}

.sidebar-link md-icon {
  margin-right: 8px;
  font-size: 22px;
}

/* Profil latéral */
.profile-sidebar {
  position: fixed;
  top: 90px;
  left: 5px;
  width: 250px;
  height: 700px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 4px 0px 10px rgba(0, 0, 0, 0.1);
  padding: 25px;
  z-index: 999;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Photo de profil */
.profile-circle {
  width: 130px;
  height: 130px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 10px;
  border: 3px solid #17a7a7;
  display: flex;
  align-items: center;
  justify-content: center;
}

.profile-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Informations du profil */
.profile-info h3 {
  font-size: 18px;
  margin-bottom: 6px;
  color: #333;
  text-align: center;
}

.profile-info p {
  font-size: 13px;
  color: #666;
  margin-bottom: 10px;
  text-align: center;
}

/* Bouton changer la photo */
.profile-info button {
  display: block;
  width: 90%;
  padding: 8px;
  background-color: #17a7a7;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 13px;
  text-align: center;
  margin-top: 8px;
}

.profile-info button:hover {
  background-color: #148a8a;
}

/* Contenu principal */
.main-panel {
  margin-left: 280px;
  margin-top: 90px;
  padding: 15px;
}
</style>
