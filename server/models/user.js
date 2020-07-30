const Model = require('./model');

class User extends Model {
  constructor() {
    super(
      {
        id: { dataType: 'int', required: false },
        username: { dataType: 'varchar', required: true },
        password: { dataType: 'varchar', required: true },
        is_active: { dataType: 'tinyint', required: false },
        created_at: { dataType: 'datetime', required: false },
        updated_at: { dataType: 'datetime', required: false },
      },
      {
        defaultWhere: { is_active: 1 },
      },
    );
    this.tableName = 'user';
    console.log(`${this.tableName} has been instantiated.`);
  }
}

module.exports = new User();