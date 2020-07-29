const { wrapBacktick, isEmpty } = require('../../shared/utils/helper');

exports.generateCreateQueryStmt = function (input) {
  const queryStmt = `
    INSERT INTO ${this.tableName}
    (${wrapBacktick(Object.keys(input))})
    VALUES (${Object.values(input)})
  `;
  return queryStmt;
};

exports.generateFindQueryStmt = function (isOne, attributes = '*', where = {}) {
  const queryStmt = `
    SELECT ${attributes === '*' ? '*' : wrapBacktick(attributes)} 
    FROM ${this.tableName}
    ${
      !isEmpty(where)
        ? `WHERE ${Object.entries(where)
            .map((o) => `${o[0]}=${o[1]}`)
            .join(' AND ')}`
        : ''
    }
    ${isOne ? 'LIMIT 1' : ''}
  `;
  return queryStmt;
};

exports.generateUpdateQueryStmt = function (input) {
  const queryStmt = `
    UPDATE ${this.tableName}
    SET ${Object.entries(input)
      .map((o) => `\`${o[0]}\`=${o[1]}`)
      .join(', ')}
    WHERE id = ${input.id}
  `;
  return queryStmt;
};

exports.generateDeleteQueryStmt = function (id) {
  const queryStmt = `
    UPDATE ${this.tableName}
    SET is_active = 0
    WHERE id = ${id}
  `;
  return queryStmt;
};
