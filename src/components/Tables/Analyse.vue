<template>
    <form>
      <md-card>
        <md-card-header class="custom-header">
        <h4 class="title">Analyse </h4>
        </md-card-header>


  
        <md-card-content>
          <div class="md-layout">
            
        <div class="md-layout-item md-small-size-100">
            <md-field>
                <label for="">Type analyse</label>
                <md-select name="">
                    <md-option></md-option>
                </md-select>
                </md-field>
                <br>

                <md-field>
                <label for="">Crypto</label>
                <md-checkbox v-model="isCryptoSelected" name="crypto">
                </md-checkbox>
                </md-field>

                <br>

                <div class="date-range">
                    <md-field class="md-inline">
                        <label>Date min</label>
                        <md-input type="date"></md-input>
                    </md-field>

                    <md-field class="md-inline">
                        <label>Date max</label>
                        <md-input type="date"></md-input>
                    </md-field>
                    </div>

                <br>
            </div>


     

        <div class="md-layout-item md-size-100 text-right">
            <md-button class="md-raised custom-blue">Analyser</md-button>
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
   