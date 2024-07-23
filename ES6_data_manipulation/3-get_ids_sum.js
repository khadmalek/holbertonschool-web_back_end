function getStudentIdsSum(students) {
    // Utiliser reduce pour calculer la somme des ids des étudiants
    return students.reduce((sum, student) => sum + student.id, 0);
  }
  
  // Exporter la fonction pour qu'elle puisse être importée ailleurs
  export default getStudentIdsSum;
  