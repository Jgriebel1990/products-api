const express = require('express');
const router = express.Router();
const mockProducts = require('../mocks/products');

const productArrToObj = (arrayOfProducts) => {
    //create an accumulator object
    const accumulator = {};
    //for Each product in arrayOfProducts
    arrayOfProducts.forEach(product => {
        const id = product._id;
        const copy = {...product};
        delete copy._id;
        accumulator[id] = copy;
        });  
        //grab the id
        //delete the _id internal to the object
        //set the id value in the accumulator object equal to product 
    //return accumulator
    return accumulator;
}
router.get('/products', (req, res) => {
    res.status(200).json({
        products: productArrToObj(mockProducts)
    })
});

router.get('/products/:id', (req, res) => {
    const { id } = req.params;
    const productsObject = productArrToObj(mockProducts); //this will get deleted
    const selectedProducts = productsObject[id]
    res.status(200).json({
        products: {
            [id]: selectedProducts
        }
    })
});
//post means create
router.post('/products', (req, res) => {
    const productsObject = productArrToObj(mockProducts);
    const id = 10000000 * Math.random();
    const newProduct = {
        _id: id,
        name: 'something new',
        price: '1000',
        created: new Date(),
        imgSrc: 'https://via.placeholder.com/100x100'
    };
    mockProducts.push(newProduct);
    res.status(201).json({
        msg: 'successfully created product'
    })
});

module.exports = router; //like export default