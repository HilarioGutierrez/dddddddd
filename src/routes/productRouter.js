import { Router } from "express";
import productManager from "../productManager/productManager.js"

//new instanse of productManager
const manager = new productManager();
const productRouter = Router();

//Endpoint. Get products from productManager. Req.query limited the number of products to show
productRouter.get('/', async (req, res) => {
    const products = await manager.getProducts();
    let consult = +req.query.limit;

    if (!consult) {
        res.send(products);
        return;
    }
    const filteredProducts = products.slice(0, consult);
    res.status(200).send(filteredProducts);
});

//Endpoint. URL Req.params to get the id of the product to show
productRouter.get('/products/:pid', async (req, res) => {
    const products = await manager.getProducts();
    const param = +req.params.pid;
    //filtered id's products same as param.
    const filteredProducts = products.filter(p => p.id === param);

    //if FilteredProducts is empty, send error message. Else send the product
if(filteredProducts.length === 0) {
        res.status(404).send({error: 'Sorry. Product not found'});
        return;
}
    res.send(filteredProducts);
});

export default productRouter;