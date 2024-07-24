function setFromArray(array) {
  // Créer un nouveau Set à partir du tableau
  const newSet = new Set(array);

  // Retourner le Set
  return newSet;
}

// Exporter la fonction pour qu'elle puisse être importée ailleurs
export default setFromArray;
