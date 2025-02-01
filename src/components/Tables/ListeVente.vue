<template>
  <div>
    <table class="crypto-table">
      <thead>
        <tr>
          <th>ID Transaction</th>
          <th>Quantité</th>
          <th>Total</th>
          <th>Date</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
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
/* Table stylée */
.crypto-table {
  width: 100%;
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
  background-color: #19c8cb;
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
  background-color: #19c8cb;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.buy-button:hover {
  background-color: #17a7a7;
}
</style>
