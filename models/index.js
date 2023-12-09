const Blog = require('./Blog.js');
const Comment = require('./Comment.js');
const User = require('./User.js');

// Blog vs Comment - one to many
Blog.hasMany(Comment, {
    foreignKey: 'blog_id',
    onDelete: 'CASCADE',
});

Comment.belongsTo(Blog, {
    foreignKey: 'blog_id',
});

// User vs Blog - one to Many

User.hasMany(Blog, {
    foreignKey: 'user_id',    
});

Blog.belongsTo(User, {
    foreignKey: 'user_id',
});

// User vs Comment - one to Many

User.hasMany(Comment, {
    foreignKey: 'user_id',    
});

Comment.belongsTo(User, {
    foreignKey: 'user_id',
});

module.exports = {
    Blog,
    Comment,    
    User,
};
