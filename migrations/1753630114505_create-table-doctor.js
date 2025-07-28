exports.up = (pgm) => {
  pgm.createTable('doctors', {
    id: {
      type: 'varchar(50)',
      primaryKey: true,
    },
    nama: {
      type: 'text',
      notNull: true,
    },
    email: {
      type: 'text',
      notNull: true,
    },
    spesialis: {
      type: 'text',
      notNull: true,
    },
    no_wa: {
      type: 'text',
      notNull: true,
    },
    alamat: {
      type: 'text',
      notNull: true,
    },
  });
};

exports.down = (pgm) => {
  pgm.dropTable('doctors');
};
