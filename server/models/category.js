const Model = require('./model');

class Category extends Model {
  constructor() {
    super(
      {
        id: { dataType: 'int', required: false },
        name: { dataType: 'varchar', required: true },
        is_income: { dataType: 'tinyint', required: true },
        is_active: { dataType: 'tinyint', required: false },
        created_at: { dataType: 'datetime', required: false },
        updated_at: { dataType: 'datetime', required: false },
      },
      {
        defaultWhere: { is_active: 1 },
      },
    );
    this.tableName = 'category';
  }
}

module.exports = new Category();
