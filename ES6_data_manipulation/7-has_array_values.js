function hasValuesFromArray(set, array) {
    // Vérifier si tous les éléments du tableau existent dans le Set
    return array.every(element => set.has(element));
  }
  
  // Exporter la fonction pour qu'elle puisse être importée ailleurs
  export default hasValuesFromArray;
  