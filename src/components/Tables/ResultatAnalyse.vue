<template>
    <div>
      <table class="resultat-analyse">
        <thead>
          <tr>
            <th>Operation</th>
            <th>Total</th>
            <th>Pourcentage</th>
            <th>Commission</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  
  
  <style scoped>
  /* Table stylée */
  .crypto-table {
    width: 69%;
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
  
  th {
    background-color: #454a4a;
    color: white;
    font-weight: bold;
  }
  
  /* Lignes alternées */
  tbody tr:nth-child(odd) {
    background-color: #f8f8f8;
  }
  
  /* Bouton */
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
    background-color: #17a7a7;
  }

  /* Table stylée */
.resultat-analyse {
  width: 75vw; /* Utilise 100% de la largeur de la vue */
  max-width: 69%; /* Empêche d'étendre plus que la largeur de la page */
  border-collapse: collapse;
  font-size: 18px;
  text-align: center;
  margin-top: 20px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}

/* Bordures et padding */
th, td {
  padding: 10px 15px;
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

  </style>
  