
var index = function(req, res, next) {
  res.render('index', { title: 'predictor' });
};

module.exports = {
  index: index
};
