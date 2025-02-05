<template>
  <form>
    <md-card>
      <md-card-header class="custom-header">
        <h4 class="title">Analyse commission</h4>
      </md-card-header>

      <md-card-content>
        <div class="md-layout">
          <!-- Sélecteur de crypto -->
          <div class="md-layout-item md-small-size-100">
            <md-field>
              <label class="date-label" for="">Filtre crypto</label>
              <md-select name="">
                <md-option></md-option>
              </md-select>
            </md-field>
            <br>

            <!-- Sélecteur de date -->
            <div class="date-range-container">
              <p>Du</p>
              <div class="date-range">
                <md-field class="md-inline">
                  <md-input type="date"></md-input>
                </md-field>
              </div>

              <p>Au</p>
              <div class="date-range">
                <md-field class="md-inline">
                  <md-input type="date"></md-input>
                </md-field>
              </div>
            </div>
            <br>
          </div>

          <!-- Bouton Analyser -->
          <div class="md-layout-item md-size-100 text-right">
            <md-button class="md-raised custom-blue" @click="analyser">Analyser</md-button>
          </div>

          <!-- Afficher le composant Historique lorsque showHistorique est vrai -->
          <Historique v-if="showHistorique" />
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

.date-range-container {
  display: flex;
  align-items: center;
  gap: 10px; /* Espacement entre les éléments */
}

p {
  font-weight: bold;
  margin: 0; /* Évite l'espace inutile autour du texte */
}

.date-range {
  flex: 1; /* Assure une largeur égale pour les champs */
}

.md-inline {
  width: 100%; /* Assure un bon alignement */
}
</style>

<script>
import Historique from "@/components/Tables/ResultatAnalyse.vue"; // Importation de Historique.vue

export default {
  data() {
    return {
      showHistorique: false, // Contrôle l'affichage de Historique
    };
  },
  components: {
    Historique, // Déclare Historique comme composant enfant
  },
  methods: {
    // Méthode pour afficher Historique après clic sur le bouton "Analyser"
    analyser() {
      this.showHistorique = true; // Change la valeur pour afficher Historique
    },
  },
};
</script>
