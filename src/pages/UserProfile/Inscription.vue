<template>
    <form>
      <md-card>
        <md-card-header :data-background-color="dataBackgroundColor">
          <h4 class="title">Inscription</h4>
        </md-card-header>
  
        <md-card-content>
          <div class="md-layout">

            <div class="md-layout-item md-small-size-100 md-size-33">
              <md-field>
                <label>Nom</label>
                <md-input  type="text"></md-input>
              </md-field>
            </div>
        
            <div class="md-layout-item md-small-size-100 md-size-33">
              <md-field>
                <label>Email</label>
                <md-input v-model="emailadress" type="email"></md-input>
              </md-field>
            </div>
  
            <div class="md-layout-item md-small-size-100 md-size-33">
              <md-field>
                <label>Mot de passe</label>
                <md-input  type="password"></md-input>
              </md-field>
            </div>

            <div class="md-layout-item md-small-size-100 md-size-33">
              <md-field>
                <label>Confirmation mot de passe</label>
                <md-input  type="password"></md-input>
              </md-field>
            </div>
            
            
            <div class="md-layout-item md-size-100 text-right">
              <md-button class="md-raised md-success">S'inscrire</md-button>
            </div>
          </div>
        </md-card-content>
      </md-card>
    </form>
  </template>
  
  
  