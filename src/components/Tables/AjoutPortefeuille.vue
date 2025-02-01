<template>
    <form>
      <md-card>
        <md-card-header :data-background-color="dataBackgroundColor">
          <h4 class="title">Ajouter Portefeuille</h4>
          <!-- <p class="category">Complete your profile</p> -->
        </md-card-header>
  
        <md-card-content>
  <div class="md-layout">
    
    <div class="md-layout-item md-small-size-100">
      <md-field>
        <label>Nom du portefeuille</label>
        <md-input v-model="nom" type="text"></md-input>
      </md-field>
    </div>

    <div class="md-layout-item md-small-size-100">
      <md-field>
        <label>Solde</label>
        <md-input v-model="solde" type="number"></md-input>
      </md-field>
    </div>

    <div class="md-layout-item md-small-size-100">
      <md-field>
        <label for="">Cryptomonnaie</label>
        <md-select v-model="crypto" name="">
          <md-option ></md-option>
          
        </md-select>
      </md-field>
    </div>
    <div class="md-layout-item md-size-100 text-right">
            <md-button class="md-raised custom-blue">Ajouter</md-button>
            <!-- Bouton Liste des Portefeuilles -->
            <md-button class="md-raised custom-green" @click="goToList">Liste des portefeuilles</md-button>
    </div>

</div>
</md-card-content>
      </md-card>
    </form>
  </template>
  
<style scoped>
.custom-blue {
    background-color: #19c8cb !important; /* Bleu vif */
    color: white !important; /* Texte blanc */
}
</style>

<script>
export default {
  
  methods: {
    goToList() {
      this.$router.push({ name: 'ListePortefeuille' }); // Redirection vers la page ListePortefeuille
    }
  }
}
</script>


  