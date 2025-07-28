/* eslint-disable camelcase */
exports.up = (pgm) => {
  pgm.createTable('collaborations', {
    id: {
      type: 'VARCHAR(50)',
      primaryKey: true,
    },
    doctors_id: {
      type: 'VARCHAR(50)',
      references: '"doctors"',
      onDelete: 'CASCADE'
    },
    user_id: {
      type: 'VARCHAR(50)',
      references: '"users"',
      onDelete: 'CASCADE'
    },
  });
};

exports.down = (pgm) => {
  pgm.dropTable('collaborations');
};