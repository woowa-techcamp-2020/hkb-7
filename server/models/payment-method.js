const Model = require('./model');

class PaymentMethod extends Model {
  constructor() {
    super(
      {
        id: { dataType: 'int', required: false },
        user_id: { dataType: 'int', required: true },
        name: { dataType: 'varchar', required: true },
        is_active: { dataType: 'tinyint', required: false },
        created_at: { dataType: 'datetime', required: false },
        updated_at: { dataType: 'datetime', required: false },
      },
      {
        defaultWhere: { is_active: 1 },
      },
    );
    this.tableName = 'payment_method';
    console.log(`${this.tableName} has been instantiated.`);
  }
}

module.exports = new PaymentMethod();
