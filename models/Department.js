const BaseEntity = require("./BaseEntity");

class Department extends BaseEntity {
  constructor(dbConnection) {
    super(dbConnection);
  }

  findById() {
    //return super.findById(All columns, table, id);
    return super.findById("*", "department", id);
  }
}

module.exports = Department;
