const router = require('express').Router();
const { Blog } = require('../../models');
const checkBlogId = require('../../utils/checkBlogId is good');
const checkLoggedIn = require('./../../utils/checkLoggedIn');

// Root: http://localhost:3001/api/blog/

//-----------------------------//
//- GET - One Blog by blog_ID -//
//-----------------------------//

// router.get('/:blog_id', checkBlogId, async (req,res) => {    
//     try {
//         // GET One Blog by Blog ID
//         console.log (`\x1b[31m GET - Blog Routes: '/:blog_id'\x1b[0m`)
//         console.log (`\x1b[31m GET - ONE Blog Record by Blog ID \x1b[0m`)
//         const getOneBlog = await Blog.findOne({
//             where: { 
//                 blog_id: req.params.blog_id,                    
//             }});

//         const blog = getOneBlog.get({ plain:true})      // Serialize the data 
//         // console.log (blog)
//         res.status(200).json(blog);
//     } catch (err) {
//         res.status(400).json(err); // Status 400 - Bad Request
//     }
// });

//--------------------//
//- POST - ADD Blog -//
//--------------------//

// API: http://localhost:3001/api/blog/
// Example : http://localhost:3001/api/blog/
// Example JSON Body
    // {
    //     "blog_title": "New Blog Name",
    //     "blog_body": "asdf",
    //     "user_id": 1        
    // }

router.post('/', checkLoggedIn, async (req, res) => {
    try {
        //Post Brand Record
        console.log (`\x1b[31m POST - Blog Routes: '/api/blog'\x1b[0m`)
        console.log (`\x1b[31m POST - Add Blog Record: \x1b[0m`) 
        
        const postBlog = await Blog.create(
            {
                blog_title: req.body.blog_title,
                blog_body: req.body.blog_body,
                user_id: req.body.user_id
            }
        );
        res.status(200).json(postBlog);
    } catch (err) {
        res.status(400).json(err); // Status 400 - Bad Request        
    }
});

//----------------------------------//
//- PUT - Update Blog by Blog ID -//
//----------------------------------//

// API: http://localhost:3001/api/blog/:blog_id
// Example : http://localhost:3001/api/blog/1
// Example JSON Body
    // {
    //     "blog_title" : "Diana Madeline",
    //     "blog_body" : 1	    
    //     "user_id" : 1	    
    // }

router.put('/:blog_id', checkLoggedIn, checkBlogId, async (req, res) => {
    try {
        //Update Blog by Blog ID
        console.log (`\x1b[31m PUT - Blog routes: '/:blog_id'\x1b[0m`)
        console.log (`\x1b[31m PUT - Update Blog Record by Blog ID: \x1b[0m`)         
        const putBlog = await Blog.update(
            {
                blog_title: req.body.blog_title,
                blog_body: req.body.blog_body,
                user_id: req.body.user_id,         
                blog_date: req.body.blog_date       
            },
            {
                where: {
                    blog_id: req.params.blog_id,
                },
            }
        )
        res.status(200).json(`Blog ID ${req.params.blog_id} updated`);        
    } catch (err) {
        res.status(500).json(err);
    }
});

//---------------------------------------//
//- PUT (Inactivate) Blog by Blog ID -//
//---------------------------------------//

// API: http://localhost:3001/api/blog/inactivate/:blog_id
// Example : http://localhost:3001/api/blog/inactivate/6
// No JSON Body Required

router.put('/inactivate/:blog_id', checkLoggedIn, checkBlogId, async (req, res) => { 
    try {
        //PUT Inactivate Blog Record
        console.log (`\x1b[31m PUT Blog routes: '/inactivate/:blog_id'\x1b[0m`)
        console.log (`\x1b[31m PUT Inactivate Blog Record \x1b[0m`) 

        const inactivateBlog = await Blog.update(
            {
                active_ind: 0,
            },
            {
                where: {
                    blog_id: req.params.blog_id,
                },
            }
        )
        res.status(200).json(`Blog ID ${req.params.blog_id} inactivated`);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
