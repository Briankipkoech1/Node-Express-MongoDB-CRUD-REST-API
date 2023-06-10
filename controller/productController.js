const Product=require('../model/product')

//getting all products
const getAllPoducts=async (req, res) => {
    try {
      const products = await Product.find();
      res.json(products);
    } catch (err) {
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  //getting one product
const getProductById=async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
      }
      res.json(product);
    } catch (err) {
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  //creating a product
const createProduct=async (req, res) => {
    try {
      const { name, price, description } = req.body;
      const product = new Product({ name, price, description });
      await product.save();
      res.status(201).json(product);
    } catch (err) {
      res.status(500).json({ error: 'Product not created' });
    }
  };
  //updating a product
const updateProduct=async (req, res) => {
    try {
      const id = req.params.id;
      const { name, price, description } = req.body;
      const updatedProduct = await Product.findByIdAndUpdate(id, { name, price, description }, { new: true });
  
      if (!updatedProduct) {
        return res.status(404).json({ error: 'Product not found' });
      }
  
      res.json(updatedProduct);
    } catch (err) {
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  //deleting a product
const deleteProduct=async (req, res) => {
    try {
      const productId = req.params.id;
  
      const deletedProduct = await Product.findByIdAndDelete(productId);
  
      if (!deletedProduct) {
        return res.status(404).json({ error: 'Product not found' });
      }
  
      res.json({ message: 'Product deleted successfully' });
    } catch (err) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
  const deleteAllProducts=async (req, res) => {
    try {
      await Product.deleteMany();
  
      res.json({ message: 'All products deleted successfully' });
    } catch (err) {
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  module.exports={
    getAllPoducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
    deleteAllProducts
  }