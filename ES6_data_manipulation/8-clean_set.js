function cleanSet(set, startString) {
  // Vérifier si startString est une chaîne vide ou non
  if (startString === '') {
    return '';
  }

  // Initialiser un tableau pour contenir les parties des chaînes
  const result = [];

  // Parcourir chaque élément du set
  set.forEach((value) => {
    // Vérifier si l'élément commence par startString
    if (value.startsWith(startString)) {
      // Ajouter la partie restante de la chaîne au tableau
      result.push(value.slice(startString.length));
    }
  });

  // Joindre les éléments du tableau avec un séparateur -
  return result.join('-');
}

// Exporter la fonction pour qu'elle puisse être importée ailleurs
export default cleanSet;
