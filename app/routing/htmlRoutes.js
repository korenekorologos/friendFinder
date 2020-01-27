var path = require("path");

module.exports = function(app) {
    //set up our routing paths that we connect with our buttons 
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname + "/../public/survey.html"));
  });

  app.get("/",function(req, res) {
    res.sendFile(path.join(__dirname + "/../public/home.html"));
  });
};