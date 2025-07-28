class DokterHandler {
  constructor(service, validator) {
    this._service = service;
    this._validator = validator;

    this.postDokterHandler = this.postDokterHandler.bind(this);
    this.getDoktersHandler = this.getDoktersHandler.bind(this);
    this.getDokterByIdHandler = this.getDokterByIdHandler.bind(this);
    this.putDokterByIdHandler = this.putDokterByIdHandler.bind(this);
    this.deleteDokterByIdHandler = this.deleteDokterByIdHandler.bind(this);
    this.getDoktersByAuthHandler = this.getDoktersByAuthHandler.bind(this);
  }

  async postDokterHandler(request, h) {
    try {
      this._validator.validateDokterPayload(request.payload);
      const dokterId = await this._service.addDokter(request.payload);

      return h.response({
        status: 'success',
        message: 'Dokter berhasil ditambahkan',
        data: { dokterId },
      }).code(201);
    } catch (error) {
      console.error('Error di postDokterHandler:', error);
      throw error;
    }
  }

  async getDoktersHandler() {
    try {
      const dokters = await this._service.getDokters();
      return {
        status: 'success',
        data: { dokters },
      };
    } catch (error) {
      console.error('Error di getDoktersHandler:', error);
      throw error;
    }
  }

  async getDoktersByAuthHandler(request) {
    try {
      const { id } = request.auth.credentials;
      const dokters = await this._service.getDoktersByAuth(id);

      return {
        status: 'success',
        data: { 
          dokters
        },
      };

    } catch (error) {
      console.error('Error di getDoktersByAuthHandler:', error);
      throw error;
    }
  }

  async getDokterByIdHandler(request) {
    try {
      const { id } = request.params;
      const cleanedId = id.trim();
      const dokter = await this._service.getDokterById(cleanedId);
      return {
        status: 'success',
        data: { dokter },
      };
    } catch (error) {
      console.error('Error di getDokterByIdHandler:', error);
      throw error;
    }
  }

  async putDokterByIdHandler(request) {
    try {
      this._validator.validateDokterPayload(request.payload);

      const { id } = request.params;
      const { nama, email, spesialis, noWa, alamat } = request.payload;

      await this._service.updateDokterById(id, {
        nama,
        email,
        spesialis,
        no_wa: noWa,
        alamat,
      });

      return {
        status: 'success',
        message: 'Dokter berhasil diperbarui',
      };
    } catch (error) {
      console.error('Error di putDokterByIdHandler:', error);
      throw error;
    }
  }

  async deleteDokterByIdHandler(request) {
    try {
      const { id } = request.params;
      const cleanedId = id.trim();

      await this._service.deleteDokterById(cleanedId);

      return {
        status: 'success',
        message: 'Dokter berhasil dihapus',
      };
    } catch (error) {
      console.error('Error di deleteDokterByIdHandler:', error);
      throw error;
    }
  }
}

module.exports = DokterHandler;
