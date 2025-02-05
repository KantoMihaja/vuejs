<template>
  <form>
    <md-card>
      <md-card-header class="custom-header">
        <h4 class="title">Filtre </h4>
      </md-card-header>

      <md-card-content>
        <div class="md-layout-item md-small-size-100">

          <!-- Sélecteur Crypto -->
          <div class="md-layout-item md-small-size-100">
            <md-field>
              <label for="">Crypto</label>
              <md-select name="">
                <md-option></md-option>
              </md-select>
            </md-field>
          </div>

          <!-- Sélecteur de date -->
          <div class="date-container">
            <label class="date-label">Date modification</label>
            <md-field>
              <md-input type="date"></md-input>
            </md-field>
          </div>

          <!-- Affichage du tableau Historique si showListeFiltre est vrai -->
          <Historique v-if="showListeFiltre" />

          <!-- Bouton Filtrer -->
          <div class="md-layout-item md-size-100 text-right">
            <md-button class="md-raised custom-blue" @click="afficherHistorique">Filtrer</md-button>
          </div>

        </div>
      </md-card-content>
    </md-card>
  </form>
</template>

<style scoped>
.custom-blue {
  background-color: #454a4a !important; /* Bleu vif */
  color: white !important; /* Texte blanc */
}
.md-field {
  margin-bottom: 16px; /* Ajoute un espacement sous chaque champ */
}

.custom-header {
  background-color: #454a4a !important; /* Bleu clair */
}

.date-range {
  display: flex;
  gap: 16px; /* Espacement entre les champs */
}

.md-inline {
  flex: 1; /* Les deux champs occupent une largeur égale */
}
</style>

<script>
import Historique from "@/components/Tables/Historique.vue"; // Importation de Historique.vue

export default {
  data() {
    return {
      showListeFiltre: false // Variable pour contrôler l'affichage de Historique
    };
  },
  components: {
    Historique // Déclaration de Historique dans les composants
  },
  methods: {
    // Méthode pour afficher le tableau Historique
    afficherHistorique() {
      this.showListeFiltre = true; // Affiche le tableau Historique après clic sur "Filtrer"
    }
  }
}
</script>
