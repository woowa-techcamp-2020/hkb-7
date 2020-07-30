const Model = require('./model');

class Activity extends Model {
  constructor() {
    super(
      {
        id: { dataType: 'int', required: false },
        content: { dataType: 'varchar', required: true },
        date: { dataType: 'datetime', required: true },
        user_id: { dataType: 'int', required: true },
        payment_method_id: { dataType: 'int', required: true },
        category_id: { dataType: 'int', required: true },
        is_active: { dataType: 'tinyint', required: false },
        created_at: { dataType: 'datetime', required: false },
        updated_at: { dataType: 'datetime', required: false },
      },
      {
        defaultWhere: { is_active: 1 },
      },
    );
    this.tableName = 'activity';
    console.log(`${this.tableName} has been instantiated.`);
  }
}

module.exports = new Activity();
