const { Blog } = require('../models'); 

// Checks if the Brand ID in the request exists on the table, if it does then the request can progress, if not then respond with an error
const checkBlogId = async (req, res, next) => {
    const blogIdExist = await Blog.findOne ({where: {blog_id: req.params.blog_id}})
        if (blogIdExist) {
            next();
        } else {              
            res.status(400).json({ message: `Blog_id ${req.params.brand_id} does not exist, please try again` }); // Status 400 = Bad Request
        return;
    }
};

module.exports = checkBlogId;
