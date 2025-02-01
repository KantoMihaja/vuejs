<template>
  <div>
    <!-- <h1>Liste des Cryptomonnaies</h1> -->
    <table class="crypto-table">
      <thead>
        <tr>
          <th>Nom</th>
          <th>Symbole</th>
          <th>Pourcentage</th>
          <th>Prix actuel</th>
          <th>Action</th>
       
        </tr>
      </thead>
      <tbody>
        <tr >
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        
          <td>
            <button class="buy-button">Acheter</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>



<style scoped>
/* Applique les bordures et sépare bien les colonnes et lignes */
.crypto-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 18px;
  text-align: center;
  margin-top: 20px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}

/* Ajoute une bordure visible aux cellules */
th, td {
  padding: 15px 20px;
  border: 2px solid black;  /* Bordure noire pour bien voir les séparations */
}

th {
  background-color: #19c8cb;
  color: white;
  font-weight: bold;
}

/* Alternance des couleurs pour un meilleur visuel */
tbody tr:nth-child(odd) {
  background-color: #f8f8f8;
}

/* Style des boutons */
.buy-button {
  padding: 8px 15px;
  font-size: 16px;
  background-color: #19c8cb;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.buy-button:hover {
  background-color: #17a7a7;
}

/* Variation des prix */
.positive {
  color: green;
  font-weight: bold;
}

.negative {
  color: red;
  font-weight: bold;
}
</style>
