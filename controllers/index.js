exports.getIndex = (req, res, next) => {
  res.render('index', { pageTitle: 'Managing data' });
}

exports.getExists = (req, res, next) => {
  res.render('exists', { pageTitle: 'Exists' });
}

exports.create = (req, res, next) => {
  console.log(req.body);
  res.redirect('/exists');
}