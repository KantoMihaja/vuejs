<template>
  <div class="login-form">
    <md-card>
      <md-card-header :data-background-color="dataBackgroundColor">
        <h4 class="title">Login</h4>
      </md-card-header>

      <md-card-content>
        <div class="">
          <!-- Champ Email -->
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>Email</label>
              <md-input v-model="emailadress" type="email"></md-input>
            </md-field>
          </div>

          <!-- Champ Mot de passe -->
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>Mot de passe</label>
              <md-input v-model="password" type="password"></md-input>
            </md-field>
          </div>

          <!-- Bouton de connexion -->
          <div class="md-layout-item md-size-100 text-right">
            <md-button class="md-raised md-success" @click="handleLogin">Se connecter</md-button>
          </div>
        </div>
      </md-card-content>
    </md-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      emailadress: '',
      password: '',
      dataBackgroundColor: 'blue' // Couleur du header de carte
    };
  },
  methods: {
    handleLogin() {
      // Logique de connexion à ajouter ici
      console.log('Email:', this.emailadress);
      console.log('Mot de passe:', this.password);
      // Vous pouvez aussi ajouter la logique pour rediriger après la connexion.
    }
  }
};
</script>

<style scoped>
.login-form {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
}

.md-card {
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.md-card-header {
  background-color: #1976d2;
  color: #fff;
  padding: 10px;
}

.md-layout {
  margin-top: 20px;
}

.md-layout-item {
  padding: 10px 0;
}
</style>
