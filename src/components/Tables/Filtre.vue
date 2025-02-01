<template>
    <form>
      <md-card>
        <md-card-header class="custom-header">
        <h4 class="title">Filtre </h4>
        </md-card-header>


  
        <md-card-content>
          <div class="md-layout">
            
        <div class="md-layout-item md-small-size-100">
            
                <div class="date-range">
               
                    <md-field class="md-inline">
                        <label>Date max</label>
                        <md-input type="date"></md-input>
                    </md-field>
                    </div>

                <br>
            </div>


            <ListeFiltre v-if="showListeFiltre" />

            <div class="md-layout-item md-size-100 text-right">
            <md-button class="md-raised custom-blue" @click="afficherListeFiltre">Filtrer</md-button>
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
import ListeFiltre from "@/components/Tables/ListeFiltre.vue";

export default {
  data() {
    return {
      showListeFiltre: false // Variable pour contrôler l'affichage
    };
  },
  components: {
    ListeFiltre
  },
  methods: {
    // Méthode pour afficher la liste des filtres
    afficherListeFiltre() {
      this.showListeFiltre = true; // Affiche le composant lorsqu'on clique sur "Filtrer"
    }
  }
}
</script>


   