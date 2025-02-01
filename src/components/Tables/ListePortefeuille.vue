<template>
    <div>
      <h1>Liste des portefeuilles</h1>
      <table class="liste-portefeuille">
        <thead>
          <tr>
            <th>Nom du portefeuille</th>
            <th>Cryptomonnaie</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr >
            <td></td>
            <td></td>
            <td>
              <button class="btn-details">Voir les détails</button>
              <button class="btn-gerer">Gérer les fonds</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <style scoped>
  /* Applique les bordures et sépare bien les colonnes et lignes */
  .liste-portefeuille {
    width: 100%;
    border-collapse: collapse;
    font-size: 16px;
    text-align: center;
    margin-top: 20px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  /* Bordures et espacements pour les cellules */
  .liste-portefeuille th, .liste-portefeuille td {
    padding: 12px 20px;
    border: 2px solid #ddd;
  }
  
  /* Couleur de fond pour les entêtes */
  .liste-portefeuille th {
    background-color: #19c8cb;
    color: white;
    font-weight: bold;
  }
  
  /* Alternance des couleurs pour les lignes */
  tbody tr:nth-child(odd) {
    background-color: #f8f8f8;
  }
  
  tbody tr:nth-child(even) {
    background-color: #ffffff;
  }
  
  /* Style des boutons d'action */
  .btn-details, .btn-gerer {
    padding: 8px 15px;
    font-size: 14px;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    margin: 5px;
  }
  
  .btn-details {
    background-color: #17a7a7;
  }
  
  .btn-gerer {
    background-color: #f39c12;
  }
  
  /* Effet au survol des boutons */
  .btn-details:hover {
    background-color: #139b9b;
  }
  
  .btn-gerer:hover {
    background-color: #e67e22;
  }
  
  /* Ajouter des effets de survol sur les lignes */
  .liste-portefeuille tbody tr:hover {
    background-color: #f1f1f1;
    cursor: pointer;
  }
  </style>
  