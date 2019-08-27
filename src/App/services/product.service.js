import Network from './network.services';

class ProductService extends Network {

    getByCategoryId(categoryId) {
        return this.send('GET', `/category/${categoryId}/product`);
    }

}

    

export default new ProductService();