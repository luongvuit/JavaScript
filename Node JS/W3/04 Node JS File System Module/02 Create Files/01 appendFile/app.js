var fs = require('fs');

fs.appendFile('file/mynewfile1.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});