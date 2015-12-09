var cassandra = require('cassandra-driver');
var client = new cassandra.Client({contactPoints: ['127.0.0.1'], keyspace: 'pass'});

var insert = "INSERT INTO users (id, name) VALUES (?, ?)";
exports.dbInsert = function(profile) {
    client.execute(insert, [profile.id, profile.displayName], function (err, result) {
	console.log(err);
	console.log('login successfully: ' + profile.displayName);
    });
};
// id, name are varchar type
