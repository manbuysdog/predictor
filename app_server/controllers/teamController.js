
const listTeams = function(req, res, next){
  res.render('teams/list', {title: 'Teams'});
};
const getTeam = function(req, res, next){
  res.render('teams/details', {title: 'Details', team: req.params.team});
};

module.exports = {
  listTeams: listTeams,
  getTeam: getTeam
};
