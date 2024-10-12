const Project = require('../models/project.modal');
const { Parser } = require('json2csv');
const csv = require('csv-parser');
const fs = require('fs');

// Create a new project
const createProject = async (data) => {
    return await Project.create(data);
};

// Get all projects
const getProjects = async () => {
    return await Project.find();
};

// Update a project by ID
const updateProject = async (projectId, data) => {
    return await Project.findByIdAndUpdate(projectId, data, { new: true });
};

// Delete a project by ID
const deleteProject = async (projectId) => {
    return await Project.findByIdAndDelete(projectId);
};

// Export projects to CSV
const exportProjectsToCSV = async () => {
    const projects = await Project.find();
    const fields = ['_id', 'name', 'description', 'budget'];
    const json2csv = new Parser({ fields });
    return json2csv.parse(projects); // Return CSV data
};

// Import projects from CSV
const importProjectsFromCSV = async (file) => {
    const projects = [];

    return new Promise((resolve, reject) => {
        fs.createReadStream(file.tempFilePath)
            .pipe(csv())
            .on('data', (data) => projects.push(data))
            .on('end', async () => {
                try {
                    await Project.insertMany(projects);
                    resolve('Projects imported successfully');
                } catch (err) {
                    reject(err);
                }
            });
    });
};

module.exports = {
    createProject,
    getProjects,
    updateProject,
    deleteProject,
    exportProjectsToCSV,
    importProjectsFromCSV,
};
