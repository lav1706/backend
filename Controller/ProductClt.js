import Product from "../Models/ProductModel/Product.js";

export const createProduct = async (req, res) => {
  const newProduct = new Product(req.body);
  try {
    const savedProduct = await newProduct.save();
    res.status(200).json(savedProduct);
  } catch (error) {
    res.status(500).json(error);
  }
};
export const updateProduct = async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      { $set: { ...req.body } },
      { new: true }
    );
    if (!updatedProduct) {
      return res.status(404).json({ message: "Prodcut not found" });
    }

    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
};
export const deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json("Product has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    res.status(200).json(product);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getAllProduct = async (req, res) => {
  const qNew = req.query.new;
  const qCategory = req.query.category;
  try {
    let products;

    if (qNew) {
      // Fetch the latest product sorted by createdAt in descending order, limit to 1
      products = await Product.find().sort({ createdAt: -1 }).limit(1);
    } else if (qCategory) {
      // Fetch products based on the specified category
      products = await Product.find({
        categories: {
          $in: [qCategory],
        },
      });
    } else {
      // Fetch all products
      products = await Product.find();
    }
    // Respond with the fetched products in JSON format
    res.status(200).json(products);
  } catch (err) {
    // Handle errors and respond with a 500 Internal Server Error
    res.status(500).json(err);
  }
};
