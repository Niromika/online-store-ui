import Network from './network.services';

class CategoryService extends Network {

    getAll() {
        return this.send('GET', '/category');
    }

}

    

export default new CategoryService();