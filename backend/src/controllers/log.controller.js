const Log = require("../models/log.model");

// Create Log
exports.createLog = async (req, res) => {
const log = await Log.create({
    ...req.body,
    userId: req.user,
});

res.status(201).json(log);
};

// Get Logs with filtering + pagination
exports.getLogs = async (req, res) => {
const { level, service, page = 1, limit = 10 } = req.query;

const query = {};
if (level) query.level = level;
if (service) query.service = service;

const logs = await Log.find(query)
    .skip((page - 1) * limit)
    .limit(Number(limit))
    .sort({ createdAt: -1 });

res.json(logs);
};

// Error Stats
exports.getErrorStats = async (req, res) => {
const count = await Log.countDocuments({ level: "error" });
res.json({ totalErrors: count });
};
