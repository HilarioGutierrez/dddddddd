import productsMongooseRepository from '../../data/repositories/productsMongooseRepository.js';
import container from '../../shared/container.js';

class productManager {

    constructor() {
        this.productRepository = container.resolve('productsRepository');
    }

    //Get products.
    async find(query) 
    {
    return this.productRepository.find(query);
    }

    async getOne(id){
        return this.productRepository.getOne(id);
    }

    async add(product){
        return this.productRepository.add(product);
    }

    async updateOne(id, data){
        return this.productRepository.updateOne(id, data);
    }

    async deleteOne(id){
        return this.productRepository.deleteOne(id);
    }

}

export default productManager;