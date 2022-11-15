const BaseEntity = require("./BaseEntity");

class Department extends BaseEntity {
  constructor(dbConnection) {
    super(dbConnection);
  }
  findAll() {
    return super.findAll("department");
  }

  findById() {
    //return super.findById(All columns, table, id);
    return super.findById("*", "department", id);
  }

  create() {
    return super.create();
  }
}

module.exports = Department;
