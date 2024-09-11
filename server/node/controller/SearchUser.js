// const User = require('./models/User);



exports.allUsers = async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    try {
        const users = await User.find().skip(skip).limit(limit);
        const totalUsers = await User.countDocuments();

        return res.json({
            users,
            totalPages: Math.ceil(totalUsers / limit),
            currentPage: page,
        });
    } catch (err) {
        res.status(500).json({
            error: err.message
        });
    }
}