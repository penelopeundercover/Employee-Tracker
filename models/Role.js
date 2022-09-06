const BaseEntity = require("./BaseEntity");

class Role extends BaseEntity {
  constructor(dbConnection) {
    super(dbConnection);
  }
  findById() {
    //return super.findById(All columns, table, id);
    return super.findById("*", "role", id);
  }
}

module.exports = Role;
