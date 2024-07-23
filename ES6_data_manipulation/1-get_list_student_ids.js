function getListStudentIds(students) {
    // Vérifier si l'argument est un tableau
    if (!Array.isArray(students)) {
      return [];
    }
  
    // Utiliser map pour créer un tableau des ids
    return students.map(student => student.id);
  }
  
  // Exporter la fonction pour qu'elle puisse être importée ailleurs
  export default getListStudentIds;
  