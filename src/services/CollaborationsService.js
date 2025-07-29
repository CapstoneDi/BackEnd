/* eslint-disable no-trailing-spaces */
import { Pool } from 'pg';
import { nanoid } from 'nanoid';
import InvariantError from '../exceptions/InvariantError.js';
 
class CollaborationsService {
  constructor() {
    this._pool = new Pool();
  }
 
  async addCollaboration(doctorId, credentialId) {
    const isExistUser = await this._pool.query(
      'SELECT * FROM collaborations WHERE doctors_id = $1 AND user_id = $2',
      [doctorId, credentialId]
    );
    if (isExistUser.rowCount > 0) {
      // Jika sudah ada, masuk ke kondisi ini
      return;
    }
    
    const id = `collab-${nanoid(16)}`;
    const query = {
      text: 'INSERT INTO collaborations VALUES($1, $2, $3) RETURNING id',
      values: [id, doctorId, credentialId],
    };
 
    const result = await this._pool.query(query);
 
    if (!result.rowCount) {
      throw new InvariantError('Kolaborasi gagal ditambahkan');
    }
    return result.rows[0].id;
  }
}

export default CollaborationsService;