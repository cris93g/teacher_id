module.exports = {
  getAllGrades(req, res) {
    const db = req.app.get("db");
    db.getAllStudents()
      .then(results => res.status(200).json(results))
      .catch(console.log);
  },
  getStudent(req, res) {
    const { student_id } = req.body;
    const db = req.app.get("db");
    db.getStudent([student_id])
      .then(results => res.status(200).json(results))
      .catch(console.log);
  },
  updateStudent(req, res) {
    const { grade } = req.body;
    const db = req.app.get("db");
    db.updateStudent([grade])
      .then(results => res.status(200).json(results))
      .catch(console.log);
  }
};
