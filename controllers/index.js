const path = require('path');
const fs = require('fs');
const slug = require('slug');

exports.getIndex = (req, res, next) => {
  res.render('index', { pageTitle: 'Managing data' });
}

exports.getExists = (req, res, next) => {
  res.render('exists', { pageTitle: 'Exists' });
}

exports.create = async (req, res, next) => {


  const { title, text:content } = req.body;
  const adjTitle = slug(title.toLowerCase());

  const tempFilePath = path.resolve(__dirname, '../temp', adjTitle + '.txt');
  const finalFilePath = path.resolve(__dirname, '../feedback', adjTitle + '.txt');

  fs.writeFile(tempFilePath, content, err => {
    
    if(err) {
      console.log(err);
      return;
    }

    const exists = fs.existsSync(finalFilePath);
   
    if(exists) {
      res.redirect('/exists');
    } else {
      fs.copyFileSync(tempFilePath, finalFilePath);
      fs.unlinkSync(tempFilePath);
      res.redirect('/exists');
    }

  });

}