const BaseEntity = require("./BaseEntity");

class Employee extends BaseEntity {
  constructor(dbConnection) {
    super(dbConnection);
  }
  findAll() {
    return super.findAll("employee");
  }
  findById() {
    //return super.findById(All columns, table, id);
    return super.findById("*", "employee", id);
  }
}

module.exports = Employee;
