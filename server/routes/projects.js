// server/routes/projects.js
const express = require('express');
const {
  getProjects,
  getProject,
  addProject,
  updateProject,
  deleteProject
} = require('../controllers/projects');

const router = express.Router();

router.route('/')
  .get(getProjects)
  .post(addProject); // You might add middleware here for authentication, e.g., .post(protect, authorize('admin'), addProject)

router.route('/:id')
  .get(getProject)
  .put(updateProject)
  .delete(deleteProject);

module.exports = router;