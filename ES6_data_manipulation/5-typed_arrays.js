function createInt8TypedArray(length, position, value) {
  // Créer un nouvel ArrayBuffer avec la longueur spécifiée
  const buffer = new ArrayBuffer(length);
  // Créer un DataView basé sur cet ArrayBuffer
  const dataView = new DataView(buffer);

  // Vérifier si la position est valide
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  // Ajouter la valeur à la position spécifiée
  dataView.setInt8(position, value);

  // Retourner le DataView
  return dataView;
}

// Exporter la fonction pour qu'elle puisse être importée ailleurs
export default createInt8TypedArray;
