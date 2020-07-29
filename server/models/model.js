const createHttpError = require('http-errors');
const mysql = require('mysql2/promise');
const {
  generateCreateQueryStmt,
  generateFindQueryStmt,
  generateUpdateQueryStmt,
  generateDeleteQueryStmt,
} = require('./query');

class Model {
  constructor(attributes, { defaultWhere }) {
    this._pool = mysql.createPool({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
    });
    this.validationError = createHttpError(400, 'invalid input');
    this.attributes = attributes;
    this.defaultWhere = defaultWhere;
  }

  get pool() {
    return this._pool;
  }

  validate(input) {
    const validatedInput = {};
    for (const [name, value] of Object.entries(input)) {
      console.log(name, value);
      if (!this.attributes[name] || value === undefined) continue;
      switch (this.attributes[name].dataType) {
        case 'tinyint':
          if (value == 0 || value == 1) validatedInput[name] = value;
          else throw this.validationError;
          break;
        case 'int':
          if (typeof value === 'number' || Number(value).toString() === value) {
            validatedInput[name] = value;
          } else throw this.validationError;
          break;
        case 'datetime':
          validatedInput[name] = `'${value}'`;
          break;
        case 'varchar':
          validatedInput[name] = `'${value}'`;
          break;
        case 'text':
          validatedInput[name] = `'${value}'`;
          break;
        default:
          throw this.validationError;
      }
    }
    return validatedInput;
  }

  async create(input) {
    const validatedInput = this.validate(input);
    const queryStmt = generateCreateQueryStmt.call(this, validatedInput);
    return {
      id: (await this._pool.query(queryStmt))[0].insertId,
      ...input,
    };
  }

  async findOne(attributes, where) {
    const validatedWhere = this.validate({ ...where, ...this.defaultWhere });
    const queryStmt = generateFindQueryStmt.call(this, true, attributes, validatedWhere);
    return (await this._pool.query(queryStmt))[0][0];
  }

  async findAll(attributes, where) {
    const validatedWhere = this.validate({ ...where, ...this.defaultWhere });
    const queryStmt = generateFindQueryStmt.call(this, false, attributes, validatedWhere);
    return (await this._pool.query(queryStmt))[0];
  }

  async update(input) {
    if (!input.id && !input.user_id) throw this.validationError;
    const validatedInput = this.validate(input);
    const queryStmt = generateUpdateQueryStmt.call(this, validatedInput);
    return await this._pool.query(queryStmt);
  }

  async delete(id) {
    if (!id) throw this.validationError;
    const queryStmt = generateDeleteQueryStmt.call(this, id);
    return await this._pool.query(queryStmt);
  }
}

module.exports = Model;
