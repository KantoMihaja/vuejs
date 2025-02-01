<!-- <template>
    <div>
      <h1>Liste des Cryptomonnaies</h1>
      <table class="crypto-table">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Symbole</th>
            <th>Prix actuel</th>
            <th>Volume</th>
            <th>Market Cap</th>
            <th>Variation 24h</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(crypto, index) in cryptos" :key="index">
            <td>{{ crypto.name }}</td>
            <td>{{ crypto.symbol }}</td>
            <td>{{ crypto.price }}$</td>
            <td>{{ crypto.volume }}$</td>
            <td>{{ crypto.marketCap }}$</td>
            <td :class="crypto.change24h >= 0 ? 'positive' : 'negative'">
              {{ crypto.change24h }}%
            </td>
            <td>
              <button class="buy-button">Acheter</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        cryptos: [
          { name: "Bitcoin", symbol: "BTC", price: "42,000", volume: "30B", marketCap: "800B", change24h: +2.5 },
          { name: "Ethereum", symbol: "ETH", price: "3,000", volume: "20B", marketCap: "350B", change24h: -1.2 },
          { name: "Cardano", symbol: "ADA", price: "1.5", volume: "10B", marketCap: "50B", change24h: +5.0 },
        ],
      };
    },
  };
  </script>
  
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
   -->