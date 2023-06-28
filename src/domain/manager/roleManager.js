import container from '../../shared/container.js';

class roleManager {

    constructor() {
        this.rolesDao = container.resolve('roleRepository');
    }

    async getOne(id) {
        return this.rolesDao.getOne(id);
    }

    async create(role) {
        return this.rolesDao.create(role);
    }

    async paginate(criteria) {
        return this.rolesDao.paginate(criteria);
    }

    async deleteOne(id) {
        return this.rolesDao.deleteOne(id);
    }

    async updateOne(id, data) {
        return this.rolesDao.updateOne(id, data);
    }
}

export default roleManager;