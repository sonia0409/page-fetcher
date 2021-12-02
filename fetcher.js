const request= require('request');
const { argv } = require('process')
const fs = require('fs')



request(argv.slice(2)[0], (error, response, body) => {
  //console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body && body); // Print the HTML for the Google homepage.

    fs.writeFile(argv.slice(2)[1], body, function (err) { 
      const stats = fs.statSync(argv.slice(2)[1]);
      const filesize = stats.size;
      if (err) return console.log(err);  
      console.log(`Downloaded and saved ${filesize} bytes to ${argv.slice(2)[1]}`); });
});

  
