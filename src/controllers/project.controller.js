const project_Service = require('../services/project.service');

// Create a new project
const createProject = async (req, res) => {
    try {
        const project = await project_Service.createProject(req.body);
        res.status(200).json(project);
    } catch (err) {
        res.status(500).json({ error: 'Failed to create project' });
    }
};

// Get all projects
const getProjects = async (req, res) => {
    try {
        const projects = await project_Service.getProjects();
        res.status(200).json(projects);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch projects' });
    }
};

// Update a project
const updateProject = async (req, res) => {
    try {
        const project = await project_Service.updateProject(req.params.id, req.body);
        res.status(200).json(project);
    } catch (err) {
        res.status(500).json({ error: 'Failed to update project' });
    }
};

// Delete a project
const deleteProject = async (req, res) => {
    try {
        await project_Service.deleteProject(req.params.id);
        res.status(200).json({ message: 'Project deleted' });
    } catch (err) {
        res.status(500).json({ error: 'Failed to delete project' });
    }
};

// Export projects to CSV
const exportProjectsToCSV = async (req, res) => {
    try {
        const csv = await project_Service.exportProjectsToCSV();
        res.header('Content-Type', 'text/csv');
        res.attachment('projects.csv');
        res.status(200).send(csv);
    } catch (err) {
        res.status(500).json({ error: 'Failed to export projects to CSV' });
    }
};

// Import projects from CSV
const importProjectsFromCSV = async (req, res) => {
    try {
        const message = await project_Service.importProjectsFromCSV(req.files.csv);
        res.status(200).json({ message });
    } catch (err) {
        res.status(500).json({ error: 'Failed to import projects' });
    }
};

module.exports = {
    createProject,
    getProjects,
    updateProject,
    deleteProject,
    exportProjectsToCSV,
    importProjectsFromCSV,
};
