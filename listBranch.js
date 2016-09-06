var request = require('request');
var fs = require("fs");
var Promise = require('bluebird');
var parse = require('parse-link-header');

var token = "token " + "0e708953fa74cd468214bcfc7e3164ab4c14e80e";
var userId = "ajagana";

var urlRoot = "https://github.ncsu.edu/api/v3";


// For listBranches
listBranches("ajagana","HW1");


function listBranches(owner,repo)
{
		var options = {
		//url: urlRoot + '/users/' + userName + "/repos",
		url: urlRoot + '/repos/' + owner + '/' + repo + '/branches',
		method: 'GET',
		headers: {
			"User-Agent": "EnableIssues",
			"content-type": "application/json",
			"Authorization": token
		}
	};

	// Send a http request to url and specify a callback that will be called upon its return.
	request(options, function (error, response, body) 
	{
		var obj = JSON.parse(body);
		console.log( obj );
		for( var i = 0; i < obj.length; i++ )
		{
			var name = obj[i].name;
		 	console.log( name );
		}
	});
}
