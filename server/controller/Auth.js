const User = require('../model/User');


exports.signup = async (req, res) => {

    try {
        const { name, email, password, confirmPassword } = req.body;

        if (!name || !email || !password || !confirmPassword) {
            return res.status(400).json({
                success: false,
                error: "Please provide all the fields"
            });
        }

        const existingUser = await User.findOne({ email: email });
        if (existingUser.length) {
            return res.status(400).json({
                success: false,
                error: "User already exists"
            });
        }

        const user = await User.create({
            name,
            email,
            password,
        });

        return res.status(200).json({
            success: true,
            user,
            message: "User created successfully"
        });

    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            error: error.message,
        });
    }
};