function getListStudents() {
    // Étape 3: Créer les objets des étudiants
    const students = [
      { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
      { id: 2, firstName: 'James', location: 'Columbia' },
      { id: 5, firstName: 'Serena', location: 'San Francisco' },
    ];
  
    // Étape 4: Retourner le tableau d'objets
    return students;
  }
  
  // Exporter la fonction pour qu'elle puisse être importée ailleurs
  export default getListStudents;
  