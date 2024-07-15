const user_model = require('../models/user_model');

exports.create_new_user = async (req, res) => {
    try {
        const user = new user_model(req.body);

        await user.save().then(data => {
            res.status(200).json({
                "msg": "User created successfully",
                "data": data
            })
        }).catch(err => {
            res.status(400).json({
                "msg": "Failed to create new user - " + err
            })
        });
    } catch (err) {
        res.status(500).json({
            "msg": "Failed to create new user - " + err.message
        })
    }

}

exports.get_all_users = async (req, res) => {
    try {
        await user_model.find().then(data => {
            res.status(200).json(data);
        }).catch(err => {
            res.status(400).json({
                "msg": "Failed to - " + err
            })
        });
    } catch (err) {
        res.status(500).json({
            "msg": "Failed to get users data - " + err.message
        })
    }
}

exports.get_single_user = async (req, res) => {
    try {
        await user_model.findById(req.params.id).then(data => {
            res.status(200).json(data);
        }).catch(err => {
            res.status(400).json({
                "msg": "User not found"
            })
        })
    } catch (err) {
        res.status(500).json({
            "msg": "Failed to get user data - " + err.message
        })
    }
}

exports.update_user = async (req, res) => {
    try {
        const user = user_model.findByIdAndUpdate(req.params.id, req.body).then(data => {
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
                "msg": "Failed to update user data - " + err
            });
        })
    } catch (err) {
        res.status(500).json({
            "msg": "Failed to update user data - " + err.message
        });
    }
}

exports.delete_user = async (req, res) => {
    try {
        await user_model.findByIdAndDelete(req.params.id).then(data => {
            if (!data) {
                res.status(400).json({
                    "msg": "User not found"
                });
            } else {
                res.status(200).json({
                    "msg": "User deleted successfully"
                });
            }
        }).catch(err => {
            res.status(400).json({
                "msg": "Failed to delete user - " + err
            });
        });
    } catch (err) {
        res.status(500).json({
            "msg": "Failed to dalete user - " + err.message
        })
    }
}