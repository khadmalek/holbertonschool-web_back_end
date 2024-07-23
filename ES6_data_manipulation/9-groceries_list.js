function groceriesList() {
    // Initialiser une nouvelle Map avec les articles d'épicerie et leurs quantités
    const groceries = new Map();
    
    groceries.set('Apples', 10);
    groceries.set('Tomatoes', 10);
    groceries.set('Pasta', 1);
    groceries.set('Rice', 1);
    groceries.set('Banana', 5);
  
    // Retourner la Map
    return groceries;
  }
  
  // Exporter la fonction pour qu'elle puisse être importée ailleurs
  export default groceriesList;
  