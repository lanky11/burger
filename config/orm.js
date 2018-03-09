var connection = require("../config/connection.js");

// Object for all our SQL statement functions.
var orm = {
  
  all: function(table, cb) {
    var queryString = "SELECT * FROM " + table + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  create: function(table, val, cb) {
    var queryString = "INSERT INTO " + table + ' (burger_name) VALUES ("' + val + '");';

    console.log(queryString);

    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },


  update: function(table, condition, cb) {
    var queryString = "UPDATE " + table + " SET devoured=true WHERE id=" + condition + ";";

    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
  
};

// Export the orm object for the model (burger.js).
module.exports = orm;
