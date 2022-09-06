const dbConnection = await dbConfig();

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
  create(obj) {}

  updateById(id) {}

  deleteById(id) {}
}

module.exports = new BaseEntity(dbConnection);
