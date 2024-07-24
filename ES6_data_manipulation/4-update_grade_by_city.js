function updateStudentGradeByCity(students, city, newGrades) {
  // Filtrer les étudiants par ville
  const studentsInCity = students.filter((student) => student.location === city);

  // Mettre à jour les notes des étudiants
  return studentsInCity.map((student) => {
    // Trouver la nouvelle note pour l'étudiant
    const gradeObject = newGrades.find((grade) => grade.studentId === student.id);
    // Retourner un nouvel objet étudiant avec la note mise à jour
    return {
      ...student,
      grade: gradeObject ? gradeObject.grade : 'N/A',
    };
  });
}

// Exporter la fonction pour qu'elle puisse être importée ailleurs
export default updateStudentGradeByCity;
