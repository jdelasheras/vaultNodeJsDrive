var http = require("http")
var request = require('request');

var server = http.createServer();

var TOKEN_DIR = (process.env.HOME || process.env.HOMEPATH ||
    process.env.USERPROFILE) + '/.credentials/';
var TOKEN_PATH = TOKEN_DIR + 'drive-nodejs-quickstart2.json';


http.createServer();


server.listen(3000, function () {
  console.log('%s listening at %s', server.name, server.url);

  // Base64-encode the mail and make it URL-safe 
  // (replace all "+" with "-" and all "/" with "_")
  var encodedMail = new Buffer(
        "Content-Type: text/plain; charset=\"UTF-8\"\n" +
        "MIME-Version: 1.0\n" +
        "Content-Transfer-Encoding: 7bit\n" +
        "to: jdelasheras@outlook.es\n" +
        "from: jose.delasheras.contracor@bbva.com\n" +
        "subject: Envio ejemplo\n\n" +

        "Mensaje del correo........"
  ).toString("base64").replace(/\+/g, '-').replace(/\//g, '_');

  request({
      method: "POST",
      uri: "https://www.googleapis.com/gmail/v1/users/me/messages/send",
      headers: {
        "Authorization": "1/kBc1JrJvI9jwyIs64m8kLaPJRI3g6e1ooa32qiipmuY",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "raw": encodedMail
      })
    },
    function(err, response, body) {
      if(err){
        console.log(err); // Failure
      } else {
        console.log(body); // Success!
      }
    });
});