const { Comment } = require('../models'); 

// Checks if the Wine ID in the request exists on the table, if it does then the request can progress, if not then respond with an error
const checkCommentId = async (req, res, next) => {
    const commentIdExist = await Comment.findOne ({where: {comment_id: req.params.comment_id}})
        if (commentIdExist) {
            next();
        } else {       
            res.status(400).json({ message: `Comment_ID ${req.params.wine_id} does not exist, please try again` }); // Status 400 = Bad Request
        return;
    }
};

module.exports = checkCommentId;
