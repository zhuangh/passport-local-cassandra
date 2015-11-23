/*
 var records = [
    { id: 1, username: 'jack', password: 'secret', displayName: 'Jack', emails: [ { value: 'jack@example.com' } ] }
  , { id: 2, username: 'jill', password: 'birthday', displayName: 'Jill', emails: [ { value: 'jill@example.com' } ] }
];
*/
var records = [
    { id: 1, username: 'jack', password: 'secret'}
  , { id: 2, username: 'jill', password: 'birthday'}
];



var cassandra = require('cassandra-driver');
var client = new cassandra.Client({contactPoints: ['127.0.0.1'], keyspace: 'pass'});

exports.findById = function(id, cb) {
  process.nextTick(function() {
    var idx = id - 1;
    if (records[idx]) {
      cb(null, records[idx]);
    } else {
      cb(new Error('User ' + id + ' does not exist'));
    }
  });
}

exports.findByUsername = function(username, cb) {
  process.nextTick(function() {
    for (var i = 0, len = records.length; i < len; i++) {
      var record = records[i];
      if (record.username === username) {
        return cb(null, record);
      }
    }
    return cb(null, null);
  });
}

var select = "SELECT username, password FROM users WHERE username=?";

exports.findByUsernameDb = function(username, cb) {
  process.nextTick(function() {
      client.execute(select, [username], function (err, result) {
	  if(err != null) {
	      return cb(err, null);
	  }
	  console.log('got user profile:  ' + result.rows[0].username + ' / ' + result.rows[0].password);
	  return cb(null, result.rows[0]);
      });
  });
};

var insert = "INSERT INTO users (username, password) VALUES (?, ?)";
exports.dbInsert = function(req, res) {
    client.execute(insert, [req.body.username, req.body.password], function (err, result) {
	console.log(err);
	console.log('sign up successfully: ' + req.body.username + ' / ' + req.body.password);
    });
    res.redirect('/');
};
