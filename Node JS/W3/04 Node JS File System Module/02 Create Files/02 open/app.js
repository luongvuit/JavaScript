var fs = require('fs');

fs.open('file/mynewfile2.txt', 'w', function (err, file) {
  if (err) throw err;
  console.log('Saved!');
});