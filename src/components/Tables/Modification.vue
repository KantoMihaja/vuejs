<template>
    <form>
      <md-card>
        <md-card-header class="custom-header">
          <h4 class="title">Modification en pourcentage d'achat en pourcentage</h4>
        </md-card-header>
  
        <md-card-content>
          <div class="md-layout">
            <div class="md-layout-item md-small-size-100">
              <md-field>
                <label class="date-label">Crypto</label>
                <md-select>
                  <md-option></md-option>
                </md-select>
              </md-field>
  
              <md-field>
                <label class="date-label">Operation</label>
                <md-select>
                  <md-option></md-option>
                </md-select>
              </md-field>
  
              <div class="md-layout-item md-small-size-100 md-size-33">
                <md-field>
                  <label class="date-label">Valeur</label>
                  <md-input type="number"></md-input>
                </md-field>
              </div>
  
              <div class="date-container">
                <label class="date-label">Appliquer à partir du :</label>
                <md-field>
                  <md-input type="date"></md-input>
                </md-field>
              </div>
            </div>
  
            <!-- BOUTON VALIDER -->
            <div class="md-layout-item md-size-100 text-right">
              <md-button class="md-raised custom-blue" @click.prevent="showResult = true">Valider</md-button>
            </div>
  
            <!-- Affichage du tableau de résultats -->
            <div v-if="showResult">
              <ResultatAnalyse />
            </div>
          </div> <!-- FERMETURE DU .md-layout -->
        </md-card-content>
      </md-card>
    </form>
  </template>
  
  <script>
  

  </script>
  
  <style scoped>
  .custom-blue {
    background-color: #454a4a !important;
    color: white !important;
    padding: 8px 16px;
    border-radius: 5px;
    font-weight: bold;
  }
  
  .custom-header {
    background-color: #454a4a !important;
    color: white;
    text-align: center;
    padding: 10px;
    font-size: 18px;
    border-radius: 8px 8px 0 0;
  }
  
  .md-field {
    margin-bottom: 20px;
  }
  
  .date-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 15px;
  }
  
  .date-label {
    font-size: 14px;
    color: #333;
    margin-bottom: 5px;
  }
  
  .md-input {
    width: 100%;
    border-radius: 5px;
  }



  /* Table stylée */
.resultat-analyse {
  width: 100%; /* Utilise 100% de la largeur de l'écran */
  border-collapse: collapse;
  font-size: 18px;
  text-align: center;
  margin-top: 20px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}

/* Bordures et padding */
th, td {
  padding: 15px 20px;
  border: 2px solid black;
}

/* Style pour les en-têtes */
th {
  background-color: #454a4a;
  color: white;
  font-weight: bold;
}

/* Lignes alternées */
tbody tr:nth-child(odd) {
  background-color: #f8f8f8;
}

/* Définir le bouton à une taille responsive */
.buy-button {
  padding: 8px 15px;
  font-size: 16px;
  background-color: #454a4a;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.buy-button:hover {
  background-color: #454a4a;
}

  </style>
  