const {
  getAllGrades,
  getStudent,
  updateStudent
} = require("../controllers/studentController");

module.exports = app => {
  app.get(`/api/allgrades`, getAllGrades);
  app.post(`/api/student`, getStudent);
  app.put(`/api/update`, updateStudent);
};
