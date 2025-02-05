<template>
  <div class="dashboard-layout">
    <!-- Barre supérieure (ajoutée) -->
    <div class="top-bar">
      <!-- <img src="@/assets/logo.png" alt="Logo" class="logo" /> -->
      <md-icon>notifications</md-icon>
      <md-icon>account_circle</md-icon>
    </div>

    <!-- Barre latérale gauche -->
    <div class="sidebar">
      <sidebar-link to="/modification">
        <md-icon>edit</md-icon>
        <p>Modification</p>
      </sidebar-link>

      
      <sidebar-link to="/analyseCommission">
        <md-icon>bar_chart</md-icon>
        <p>Analyse commission</p>
      </sidebar-link>
      <sidebar-link to="/filtre">
        <md-icon>filter_alt</md-icon>
        <p>Filtre</p>
      </sidebar-link>

    </div>

    <!-- Contenu principal -->
    <div class="main-content">
      <!-- Navbar en haut -->
      <top-navbar></top-navbar>

      <!-- Zone du contenu -->
      <router-view></router-view>

      <!-- Footer -->
      <content-footer></content-footer>
    </div>
  </div>
</template>

<style scoped>
.dashboard-layout {
  display: flex;
  flex-direction: column;
}

.top-bar {
  background-color: #606565;
  color: white;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.top-bar .logo {
  height: 40px; /* Adjust the logo size */
}

.sidebar {
  width: 260px;
  background-color: #17a7a7;
  color: white;
  padding-top: 100px;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10; /* Ensure sidebar stays above content */
}

.sidebar-link {
  color: white;
  text-decoration: none;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  transition: background-color 0.3s ease;
}

.sidebar-link:hover {
  background-color: #17a7a7;
}

.sidebar-link md-icon {
  margin-right: 10px;
}

.main-content {
  margin-left: 400px;
  padding: 40px;
  width: 60%;
  min-height: 100vh;
  margin-top: 50px; /* Add margin to push content down below the top-bar */
}

.top-navbar {
  background-color: #17a7a7;
  color: white;
  padding: 10px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
</style>
