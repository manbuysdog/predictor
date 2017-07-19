var express = require('express');
var router = express.Router();

var teamController = require('../controllers/teamController');

router.get('/', teamController.listTeams);
router.get('/:team', teamController.getTeam);

module.exports = router;
