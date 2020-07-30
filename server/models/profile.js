const Model = require('./model');

class Profile extends Model {
  constructor() {
    super(
      {
        user_id: { dataType: 'int', required: true },
        first_name: { dataType: 'varchar', required: true },
        last_name: { dataType: 'varchar', required: true },
        email: { dataType: 'varchar', required: true },
        term: { dataType: 'tinyint', required: true },
        picture: { dataType: 'varchar', required: false },
        is_active: { dataType: 'tinyint', required: false },
        created_at: { dataType: 'datetime', required: false },
        updated_at: { dataType: 'datetime', required: false },
      },
      {
        defaultWhere: { is_active: 1 },
      },
    );
    this.tableName = 'profile';
    console.log(`${this.tableName} has been instantiated.`);
  }
}

module.exports = new Profile();
