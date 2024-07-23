function updateUniqueItems(map) {
    // Vérifier si l'argument est une Map
    if (!(map instanceof Map)) {
      throw new Error('Cannot process');
    }
  
    // Mettre à jour les entrées de la Map
    for (const [key, value] of map) {
      if (value === 1) {
        map.set(key, 100);
      }
    }
  
    // Retourner la Map mise à jour
    return map;
  }
  
  // Exporter la fonction pour qu'elle puisse être importée ailleurs
  export default updateUniqueItems;
  