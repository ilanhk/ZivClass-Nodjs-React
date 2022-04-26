const { products } = require('../modules/products')


//Read All - GET request
const getProducts = (req, res)=>{
    //req is to get all info from the client
    //res is to send osta response to the client ex user info.
    //logger is a middleware we created. Can also put an array of middlewares there which one this route would take the effects. 

    const partial_products_info = products().map((product)=>{
        return {id: product.id, name: product.name};
    })
    res.json(partial_products_info);
};

//Read - Get request with params
const getProduct = (req, res)=>{
    const id = req.params.id //get id from url
    // const product = products().filter((item)=>{
    //     return item.id == id; 
    // }); // filter will go through all array to find the condition
    const product = products().find((item)=>{
        return item.id == id; 
    }); // find will find the first item that matches the condition and stop search.
    if(!product){
        return res.status(404).json({message: 'Product not found'})
    };
    res.json(product);
};

const searchProduct = (req, res)=>{
    console.log(req.query);
    const productsFound = products().filter((item)=>{
        return item.name.toLowerCase().includes(req.query.name.toLowerCase()); 
    });
    if(productsFound.length === 0){
        return res.status(404).json({message: 'Products dont match your search'})
    };
    
    res.json(productsFound);
};

//Create - POST request
const createProduct = (req, res)=>{
    const p = products();
    const newProduct = {
        id: p.length +1,
        name: req.body.name, 
        price: req.body.price
    };
    p.push(newProduct);
    res.json(p);
};
//req.body.name is the name of the input

// Update - PUT request
const updateProduct = (req, res)=>{
    const id = req.params.id;
    const p = products();
    const index = p.findIndex((product)=> product.id == id);
    if (index == -1){
        return res.status(404).send('Product not found');
    };
    const updatedProduct = {
        id: p[index].id,
        name: req.body.name,
        price: req.body.price
    };
    p[index] = updatedProduct;
    res.status(200).json(p);
};

// Delete - DELETE request
const deleteProduct =  (req, res)=>{
    const id = req.params.id;
    const p = products();
    const index = p.findIndex((product)=> product.id == id);
    if (index == -1){
        return res.status(404).send('Product not found');
    };
    p.splice(index, 1); //splice takes in the index and the quantity to delete
    res.status(200).json(p);
};

module.exports = {
    getProducts,
    getProduct,
    searchProduct,
    createProduct,
    updateProduct,
    deleteProduct
};