exports.up = (pgm) => {
  pgm.addColumn('doctors', {
    created_at: {
      type: 'VARCHAR(50)',
      notNull: true,
      default: pgm.func('CURRENT_TIMESTAMP'),
    },
    updated_at: {
      type: 'VARCHAR(50)',
      notNull: true,
      default: pgm.func('CURRENT_TIMESTAMP'),
    },
  });
};

exports.down = (pgm) => {
  pgm.dropColumns('doctors', ['created_at', 'updated_at']);
};