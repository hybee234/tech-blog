const { Comment } = require('../models');

const commentData = [
    // Blog 1 comment
    {          
        comment_body: 'Great blog post, thanks for sharing',
        comment_date: '2023-12-09',
        active_ind: '1',
        user_id: '2',
        blog_id: '1',
    },
    // Blog 1 comment
    {          
        comment_body: 'I am going to have to look at that technology',
        comment_date: '2023-12-09',
        active_ind: '0',
        user_id: '2',
        blog_id: '1',
    },
    // Blog 1 comment
    {          
        comment_body: 'Thank you, I need to deploy this solution locally',
        comment_date: '2023-12-09',
        active_ind: '1',
        user_id: '3',
        blog_id: '1',
    },
    // Blog 1 comment
    {          
        comment_body: 'Thanks for sharing, very insightful',
        comment_date: '2023-12-09',
        active_ind: '1',
        user_id: '4',
        blog_id: '1',
    },
    //Blog 2 comment user 1
    {          
        comment_body: 'Succinct and relevant, thank you',
        comment_date: '2023-12-09',
        active_ind: '1',
        user_id: '4',
        blog_id: '2',
    },
    //Blog 3 comment, user 2
    {          
        comment_body: 'Great read',
        comment_date: '2023-12-09',
        active_ind: '1',
        user_id: '2',
        blog_id: '3',
    },
    //Blog 4 comment, user 2
    {          
        comment_body: 'Thank you, I have learnt a great deal from this blog',
        comment_date: '2023-12-09',
        active_ind: '1',
        user_id: '2',
        blog_id: '4'
    },
    //Blog 5 comment, user 1
    {          
        comment_body: 'Long time reader, first time poster. Thank you',
        comment_date: '2023-12-09',
        active_ind: '1',
        user_id: '1',
        blog_id: '5',
    },
    
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
