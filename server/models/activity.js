const Model = require('./model');

class Activity extends Model {
  constructor() {
    super(
      {
        id: { dataType: 'int', required: false },
        content: { dataType: 'varchar', required: true },
        date: { dataType: 'date', required: true },
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

  async findAll(attributes, where) {
    const queryStmt = `
      SELECT ${attributes}
      FROM ${this.tableName}
      LEFT JOIN category ON category.id = activity.category_id
      LEFT JOIN payment_method ON payment_method.id = activity.payment_method_id
      ${`WHERE ${Object.entries(where)
        .map((o) => `${o[0]}=${o[1]}`)
        .join(' AND ')}`}
      ORDER BY date DESC   
    `;
    return (await this._pool.query(queryStmt))[0];
  }
}

module.exports = new Activity();
