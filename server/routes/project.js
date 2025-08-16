const express = require('express');
const router = express.Router();
const Project = require('../models/Project');
const User = require('../models/User');

// Get all projects
router.get('/', async (req, res) => {
    try {
        const projects = await Project.find().populate('owner', 'name email').populate('members', 'name email');
        res.json(projects);
    } catch(err) {
        res.status(500).json({ error: err.message });
    }
});

// Create project
router.post('/create', async (req, res) => {
    try {
        const { title, description, techStack, ownerId } = req.body;
        const project = new Project({ title, description, techStack, owner: ownerId, members: [ownerId] });
        await project.save();
        res.json(project);
    } catch(err) {
        res.status(500).json({ error: err.message });
    }
});

// Send join request
router.post('/join-request', async (req, res) => {
    try {
        const { projectId, userId } = req.body;
        const project = await Project.findById(projectId);
        if(!project) return res.status(404).json({ msg: "Project not found" });

        if(!project.joinRequests.includes(userId) && !project.members.includes(userId)){
            project.joinRequests.push(userId);
            await project.save();
        }

        res.json({ msg: "Join request sent", project });
    } catch(err) {
        res.status(500).json({ error: err.message });
    }
});

// Accept join request
router.post('/accept-request', async (req, res) => {
    try {
        const { projectId, userId } = req.body;
        const project = await Project.findById(projectId);
        if(!project) return res.status(404).json({ msg: "Project not found" });

        // Remove from joinRequests and add to members
        project.joinRequests = project.joinRequests.filter(id => id.toString() !== userId);
        if(!project.members.includes(userId)) project.members.push(userId);
        await project.save();

        res.json({ msg: "User added to project", project });
    } catch(err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
