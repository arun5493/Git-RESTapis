var request = require('request');
var fs = require("fs");
var Promise = require('bluebird');
var parse = require('parse-link-header');

var token = "token " + "0e708953fa74cd468214bcfc7e3164ab4c14e80e";
var userId = "ajagana";

var urlRoot = "https://github.ncsu.edu/api/v3/";

// For createRep
createRep("HW1-Test");

function createRep(repo)
{
		var options = {
		url: urlRoot + 'user/repos',
		method: 'POST',
        headers: {
			"User-Agent": "EnableIssues",
			"content-type": "application/json",
			"Authorization": token
        },
        json: {
            "name": "HW1-TEST",
            "description": "This is my first repository",
            "homepage": "www.google.com",
            "private": false,
            "has_issues": true,
            "has_wiki": true,
            "has_downloads": true        
        }    
	};
	// Send a http request to url and specify a callback that will be called upon its return.
	request(options, function (error, response, body) 
	{
			var obj = body;
			console.log(body)
			console.log( obj.name );
	});
}