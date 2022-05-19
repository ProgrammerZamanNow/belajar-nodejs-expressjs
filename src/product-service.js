import {getAllProducts, getProductById} from "./database.js";

export class ProductService {

    static findById(id) {
        return getProductById(id);
    }

    static findAll() {
        return getAllProducts();
    }

}
