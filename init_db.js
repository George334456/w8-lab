var fs = require('fs');
var Sequelize = require('sequelize')

function main() {
  var db = new Sequelize('shipments', 'user', 'pass', {
    dialect: 'sqlite',
    storage: 'shipments.sqlite'
  });

  var sql = fs.readFileSync('schema.sql', 'utf8');

  db.query(sql).spread(function(results, metadata) {
    console.log(results);
    console.log(metadata);
  });
}

main();
