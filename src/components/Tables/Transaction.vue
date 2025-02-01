<template>
    <form>
      <md-card>
        <md-card-header class="custom-header">
        <h4 class="title">Faire une transaction</h4>
        </md-card-header>


  
        <md-card-content>
          <div class="md-layout">
            
        <div class="md-layout-item md-small-size-100">
        <md-field>
            <label for="crypto">Cryptomonnaie</label>
            <md-select  name="crypto">
            <md-option ></md-option>
            </md-select>
        </md-field>
        </div>

        
        <div class="md-layout-item md-small-size-100">
        <md-field>
            <label for="typeCrypto">Type de cryptomonnaie</label>
            <md-select  name="typeCrypto">
            <md-option >
          
            </md-option>
            </md-select>
        </md-field>
        </div>

        <div class="md-layout-item md-small-size-100 md-size-33">
              <md-field>
                <label>Quantite</label>
                <md-input  type="number"></md-input>
              </md-field>
        </div>

        <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
                <label>Date</label>
                <md-input  type="date"></md-input>
            </md-field>
        </div>

        <div class="md-layout-item md-size-100 text-right">
            <md-button class="md-raised custom-blue">Ajouter</md-button>
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

  .custom-header {
    background-color: #454a4a !important; /* Bleu clair */
    }

  </style>
  