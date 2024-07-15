const product_model = require('../models/product_model');

exports.create_new_product = async (req, res) => {
    try {
        const product = new product_model(req.body);

        await product.save().then(data => {
            res.status(200).json({
                "msg": "Product created successfully",
                "data": data
            })
        }).catch(err => {
            res.status(400).json({
                "msg": "Failed to create new product - " + err
            })
        });
    } catch (err) {
        res.status(500).json({
            "msg": "Failed to create new product - " + err.message
        })
    }

}

exports.get_all_products = async (req, res) => {
    try {
        await product_model.find().then(data => {
            res.status(200).json(data);
        }).catch(err => {
            res.status(400).json({
                "msg": "Failed to - " + err
            })
        });
    } catch (err) {
        res.status(500).json({
            "msg": "Failed to get products data - " + err.message
        })
    }
}

exports.get_single_product = async (req, res) => {
    try {
        await product_model.findById(req.params.id).then(data => {
            res.status(200).json(data);
        }).catch(err => {
            res.status(400).json({
                "msg": "Product not found"
            })
        })
    } catch (err) {
        res.status(500).json({
            "msg": "Failed to get product data - " + err.message
        })
    }
}

exports.update_product = async (req, res) => {
    try {
        const product = product_model.findByIdAndUpdate(req.params.id, req.body).then(data => {
            if (!data) {
                res.status(400).json({
                    "msg": "Product not found"
                });
            } else {
                res.status(200).json({
                    "msg": "Product updated successfully"
                });
            }
        }).catch(err => {
            res.status(400).json({
                "msg": "Failed to update product data - " + err
            });
        })
    } catch (err) {
        res.status(500).json({
            "msg": "Failed to update product data - " + err.message
        });
    }
}

exports.delete_product = async (req, res) => {
    try {
        await product_model.findByIdAndDelete(req.params.id).then(data => {
            if (!data) {
                res.status(400).json({
                    "msg": "Product not found"
                });
            } else {
                res.status(200).json({
                    "msg": "Product deleted successfully"
                });
            }
        }).catch(err => {
            res.status(400).json({
                "msg": "Failed to delete product - " + err
            });
        });
    } catch (err) {
        res.status(500).json({
            "msg": "Failed to dalete product - " + err.message
        })
    }
}