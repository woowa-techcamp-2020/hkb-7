const { wrapBacktick, isEmpty } = require('../../shared/utils/helper');

exports.generateCreateQueryStmt = function (table, input) {
  const queryStmt = `
    INSERT INTO ${table}
    (${wrapBacktick(Object.keys(input))})
    VALUES (${Object.values(input)})
  `;
  return queryStmt;
};

exports.generateFindQueryStmt = function (table, isOne, attributes = '*', where = {}) {
  const queryStmt = `
    SELECT ${attributes === '*' ? '*' : wrapBacktick(attributes)} 
    FROM ${table}
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

exports.generateUpdateQueryStmt = function (table, input) {
  const queryStmt = `
    UPDATE ${table}
    SET ${Object.entries(input)
      .map((o) => `\`${o[0]}\`=${o[1]}`)
      .join(', ')}
    WHERE id = ${input.id}
  `;
  return queryStmt;
};

exports.generateDeleteQueryStmt = function (table, id) {
  const queryStmt = `
    UPDATE ${table}
    SET is_active = 0
    WHERE id = ${id}
  `;
  return queryStmt;
};
