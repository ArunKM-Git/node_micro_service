const cart_model = require('../models/cart_model');

exports.add_to_cart = async (req, res) => {
    try {
        const cart = new cart_model(req.body);

        await cart.save().then(data => {
            res.status(200).json({
                "msg": "Product added to cart",
                "data": data
            })
        }).catch(err => {
            res.status(400).json({
                "msg": "Failed to create new cart - " + err
            })
        });
    } catch (err) {
        res.status(500).json({
            "msg": "Failed to create new cart - " + err.message
        })
    }

}

exports.get_cart = async (req, res) => {
    try {
        await cart_model.find().then(data => {
            res.status(200).json(data);
        }).catch(err => {
            res.status(400).json({
                "msg": "Failed to - " + err
            })
        });
    } catch (err) {
        res.status(500).json({
            "msg": "Failed to get carts data - " + err.message
        })
    }
}

exports.update_quantity = async (req, res) => {
    try {
        const cart = cart_model.findByIdAndUpdate(req.params.id, req.body).then(data => {
            if (!data) {
                res.status(400).json({
                    "msg": "User not found"
                });
            } else {
                res.status(200).json({
                    "msg": "User updated successfully"
                });
            }
        }).catch(err => {
            res.status(400).json({
                "msg": "Failed to update cart data - " + err
            });
        })
    } catch (err) {
        res.status(500).json({
            "msg": "Failed to update cart data - " + err.message
        });
    }
}

exports.delete_from_cart = async (req, res) => {
    try {
        await cart_model.findByIdAndDelete(req.params.id).then(data => {
            if (!data) {
                res.status(400).json({
                    "msg": "User not found"
                });
            } else {
                res.status(200).json({
                    "msg": "Product successfully deleted from cart"
                });
            }
        }).catch(err => {
            res.status(400).json({
                "msg": "Failed to delete cart - " + err
            });
        });
    } catch (err) {
        res.status(500).json({
            "msg": "Failed to dalete cart - " + err.message
        })
    }
}