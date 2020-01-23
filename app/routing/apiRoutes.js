//connects our friends obj array 
var friends = require("../data/friends.js");

//our api get request for friends data 
module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });


    //takes the results from the user survey score and parses it 
    //into a number instead of a string
    app.post("/api/friends", function (req, res) {
        var totalDifference = 0;
        var bestMatch = {
            name: "",
            photo: "",
            friendDifference: 1000
        };
        var userData = req.body;
        var userName = userData.name;
        var userScores = userData.scores;

        var b = userScores.map(function (item) {
            return parseInt(item, 10);
        });
        userData = {
            name: req.body.name,
            photo: req.body.photo,
            scores: b
        };

        console.log("Name: " + userName);
        console.log("User Score " + userScores);
    
        var sum = b.reduce((a, b) => a + b, 0);
    
        console.log("Sum of users score " + sum);
        console.log("Best match friend diff " + bestMatch.friendDifference);
        console.log("+++++++=================++++++++++");

//forloop that will loop through all of the friends possibilities in the database 


    });
};

