
const listTeams = function(req, res, next){
  var teams = [
    {name: "Arsenal"},
    {name: "Chelsea"},
    {name: "Spurs"}
  ];

  res.render('teams/list', {title: 'Teams', teams: teams});
};

const getTeam = function(req, res, next){
  res.render('teams/details', {title: 'Details', team: req.params.team});
};

module.exports = {
  listTeams: listTeams,
  getTeam: getTeam
};
