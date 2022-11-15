const dbConnection = require("../config/dbConfig");

class BaseEntity {
  constructor(dbConnection) {
    this.dbConnection = dbConnection;
  }
  findAll(table) {
    return this.dbConnection.query("SELECT * FROM ??", [table]);
  }
  findById(columns, table, id) {
    //SELECT column FROM table WHERE id = whatever it equals. That's what the question marks mean. Prepared statements.
    return this.dbConnection.query("SELECT ?? FROM ?? WHERE id = ?", [
      columns,
      table,
      id,
    ]);
  }
  //Future goal: Write these functions with prepared statements.
  // create(obj) {
  //   return this.dbConnection.query("INSERT ? INTO ??", [value, table])
  // }

  // updateById(id) {
  //   return this.dbConnection.query("")
  // }

  // deleteById(id) {}
}

module.exports = BaseEntity;
