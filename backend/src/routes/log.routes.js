const router = require("express").Router();
const auth = require("../middlewares/auth.middleware");
const {
createLog,
getLogs,
getErrorStats,
} = require("../controllers/log.controller");

router.post("/", auth, createLog);
router.get("/", auth, getLogs);
router.get("/stats/errors", auth, getErrorStats);

module.exports = router;
