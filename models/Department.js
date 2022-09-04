class Department extends BaseEntity {
  findById() {
    //return super.findById(All columns, table, id);
    return super.findById("*", "departments", "id");
  }
}
