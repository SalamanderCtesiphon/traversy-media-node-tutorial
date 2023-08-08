const fs = require('fs');
const path = require('path');

//Create folder 
/* fs.mkdir(path.join(__dirname, 'test'), {}, function(err){
  if(err) throw err;
  console.log('Folder created...');
}); */

//Create and write to file
/* fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello World!', err => {
  if(err) throw err;
  console.log("File written to...");

  fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), 'I love node js', err => {
    if(err) throw err;
    console.log("File written to...");
  })
})
 */

//Read file
fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf-8', (err, data) => {
  if(err) throw err;
  console.log(data);
})


