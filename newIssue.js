var request = require('request');
var fs = require("fs");
var Promise = require('bluebird');
var parse = require('parse-link-header');



var token = "token " + "0e708953fa74cd468214bcfc7e3164ab4c14e80e";
var userId = "ajagana";

var urlRoot = "https://github.ncsu.edu/api/v3/";


// For creating an issue for a rep
createIssue("HW1-Test");

function createIssue(repo)
{
		var options = {
		url: urlRoot + 'repos/'+userId + '/'+ repo + '/issues',
		method: 'POST',
        headers: {
			"User-Agent": "EnableIssues",
			"content-type": "application/json",
			"Authorization": token
        },
        json: {
            "title": "Found a bug",
            "body": "I'm having a problem with this.",
            "assignee": "ajagana",
            "labels": [
                "bug", "Test", "Try"
            ]
     
        }
// curl --insecure --request POST -H "Authorization: token 0e708953fa74cd468214bcfc7e3164ab4c14e80e" --data '{"name":"HW1-Test1","has_issues":"true"}' https://github.ncsu.edu/api/v3/user/repos
    
	};
    //console.log(options);
	// Send a http request to url and specify a callback that will be called upon its return.
	request(options, function (error, response, body) 
	{
			var obj = body;
			console.log(body)
			console.log( obj.title );
	});
}


