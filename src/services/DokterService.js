import { nanoid } from 'nanoid';
import { Pool } from 'pg';
import NotFoundError from '../exceptions/NotFoundError';

class DokterService {
  constructor() {
    this._pool = new Pool();
  }

  async addDokter({ nama, email = 'test@gmail.com', spesialis, noWa, alamat }) {
    const id = `dokter-${nanoid(16)}`;
    const createdAt = new Date().toISOString();
    const updatedAt = createdAt;
    const query = {
      text: 'INSERT INTO doctors VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING id',
      values: [id, nama, email, spesialis, noWa, alamat, createdAt, updatedAt],
    };
    const result = await this._pool.query(query);
    return result.rows[0].id;
  }

  async getDoktersByAuth(id) {
    const query = {
      text: `select doctors.*
              from doctors
                inner join collaborations on collaborations.doctors_id = doctors.id
              where collaborations.user_id = $1`,
      values: [id],
    };
    const result = await this._pool.query(query);
    return result ? result.rows : [];
  }

  async getDokters() {
    const result = await this._pool.query('SELECT * FROM doctors');
    return result.rows;
  }

  async getDokterById(id) {
    const query = {
      text: 'SELECT * FROM doctors WHERE id = $1',
      values: [id],
    };
    const result = await this._pool.query(query);
    if (!result.rowCount) throw new NotFoundError('Dokter tidak ditemukan');
    return result.rows[0];
  }

async updateDokterById(id, { nama, email = 'test@gmail.com', spesialis, no_wa, alamat }) {
  const updatedAt = new Date().toISOString();
  const query = {
    text: `
      UPDATE doctors
      SET nama = $1, email = $2, spesialis = $3, no_wa = $4, alamat = $5, updated_at = $6
      WHERE id = $7
      RETURNING id
    `,
    values: [nama, email, spesialis, no_wa, alamat, updatedAt, id.trim()],
  };

  const result = await this._pool.query(query);

  if (!result.rowCount) {
    throw new NotFoundError('Gagal memperbarui dokter. Id tidak ditemukan');
  }
}

async deleteDokterById(id) {
  const result = await this._pool.query(
    'DELETE FROM doctors WHERE id = $1 RETURNING id',
    [id]
  );

  if (!result.rowCount) {
    throw new NotFoundError('Dokter tidak ditemukan');
  }
}
}

module.exports = DokterService;
