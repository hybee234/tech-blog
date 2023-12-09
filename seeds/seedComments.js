const { Comment } = require('../models');

const commentData = [
    // Blog 1 comment
    {          
        comment_body: 'Blog 1 comment User 1',
        comment_date: '2023-12-09',
        active_ind: '1',
        user_id: '1',
        blog_id: '1',
    },
    // Blog 1 comment
    {          
        comment_body: 'Blog 1 comment User 2- Inactive comment',
        comment_date: '2023-12-09',
        active_ind: '0',
        user_id: '2',
        blog_id: '1',
    },
        // Blog 1 comment
        {          
            comment_body: 'Blog 1 comment User 3 - Inactive user',
            comment_date: '2023-12-09',
            active_ind: '1',
            user_id: '3',
            blog_id: '1',
        },
                // Blog 1 comment
                {          
                    comment_body: 'Blog 1 comment another comment - ',
                    comment_date: '2023-12-09',
                    active_ind: '1',
                    user_id: '1',
                    blog_id: '1',
                },
    //Blog 2 comment user 1
    {          
        comment_body: 'Blog 2 comment User1',
        comment_date: '2023-12-09',
        active_ind: '1',
        user_id: '1',
        blog_id: '2',
    },
    //Blog 3 comment, user 2
    {          
        comment_body: 'Blog 3 comment user 2',
        comment_date: '2023-12-09',
        active_ind: '1',
        user_id: '2',
        blog_id: '3',
    },
    //Blog 4 comment, user 2
    {          
        comment_body: 'Blog 4 comment user 2',
        comment_date: '2023-12-09',
        active_ind: '1',
        user_id: '2',
        blog_id: '4'
    },
    //Blog 5 comment, user 1
    {          
        comment_body: 'Blog 5 comment user 1',
        comment_date: '2023-12-09',
        active_ind: '1',
        user_id: '1',
        blog_id: '5',
    },
    
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
