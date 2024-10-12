const express = require('express');
const project_Controller = require('../controllers/project.controller');
const { authUser } = require("../middleware/auth");
const router = express.Router();

router.post('/', authUser, project_Controller.createProject);
router.get('/', authUser, project_Controller.getProjects);
router.put('/:id', authUser, project_Controller.updateProject);
router.delete('/:id', authUser, project_Controller.deleteProject);

router.get('/export/csv', authUser, project_Controller.exportProjectsToCSV);
router.post('/import/csv', authUser, project_Controller.importProjectsFromCSV);

module.exports = router;
