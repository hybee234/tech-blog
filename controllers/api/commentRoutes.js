const router = require('express').Router();
const { Comment } = require('../../models');
const checkCommentId = require('./../../utils/checkCommentId');
const checkBlogId = require('../../utils/checkBlogId is good');
const checkLoggedIn = require('./../../utils/checkLoggedIn'); // Import the withAuth middleware

// Root: http://localhost:3001/api/comment/

//-----------------------------//
//- GET - One Wine by Wine_ID -//
//-----------------------------//

// router.get('/:wine_id', withAuth, checkWineId, async (req,res) => {    
//     try {
//         // GET One Wine by Wine ID
//         console.log (`\x1b[33m GET - Wine routes: '/:wine_id'\x1b[0m`)
//         console.log (`\x1b[33m GET - ONE Wine Record by Wine ID \x1b[0m`)
//         const getOneWine = await Wine.findOne({
//             where: { 
//                 wine_id: req.params.wine_id,                    
//             }});

//         const wine = getOneWine.get({ plain:true})      // Serialize the data 
//         console.log (wine)
//         res.status(200).json(wine);
//     } catch (err) {
//         res.status(400).json(err); // Status 400 - Bad Request
//     }
// });

//-----------------------------------//
//- POST - Add a Comment to Blog ID -//
//-----------------------------------//

// API: http://localhost:3001/api/comment/:blog_id
// Example : http://localhost:3001/api/comment/1
// Example JSON Body
// {
//     "comment_body" : "Long text",
//     "user_id" : 1	    
// }

router.post('/:blog_id', checkLoggedIn, checkBlogId, async (req, res) => {
    try {
        // POST new Comment under Blog ID
        console.log (`\x1b[33m POST - Comment Routes: '/:blog_id'\x1b[0m`) //Yellow
        console.log (`\x1b[33m POST - ADD Comment Record under Blog ID \x1b[0m`) //Yellow
        const postNewComment = await Comment.create(
            {
                comment_body: req.body.comment_body,
                user_id: req.body.user_id,
                blog_id: req.params.blog_id
            });
        res.status(200).json(postNewComment);        
    } catch (err) {
        res.status(400).json(err); // Status 400 - Bad Request
    }
});

//--------------------------------//
//- PUT - Update Wine by Wine ID -//
//--------------------------------//

// API: http://localhost:3001/api/wine/:wine_id
// Example : http://localhost:3001/api/wine/21
// Example JSON Body
// {
//     "wine_name": "Diana Madeline",
//     "active_ind": 1,
//     "brand_id": 6
// }

// router.put('/:wine_id', withAuth, checkWineId, async (req, res) => {
//     try {
//         // PUT - Update Wine by Wine ID
//         console.log (`\x1b[33m PUT - Wine routes: '/:wine_id'\x1b[0m`)
//         console.log (`\x1b[33m PUT - UPDATE Wine Record by Wind ID \x1b[0m`)
//         const putWine = await Wine.update(
//             {
//                 wine_name: req.body.wine_name,
//                 active_ind: req.body.active_ind,
//                 brand_id: req.body.brand_id,
//             },
//             {
//                 where: {
//                     wine_id: req.params.wine_id,
//                 },
//             }
//         )
//         res.status(200).json(`Wine ID ${req.params.wine_id} updated`);
//     } catch (err) {
//         res.status(500).json(err); // Status 400 - Bad Request
//     }
// });

//-------------------------------------//
//- PUT - Soft Delete Wine by Wine ID -//
//-------------------------------------//

// API: http://localhost:3001/api/wine/inactivate/:wine_id
// Example : http://localhost:3001/api/wine/inactivate/21
// No JSON Body required.

// router.put('/inactivate/:wine_id', withAuth, checkWineId, async (req, res) => {
//     try {
//         // PUT - Soft Delete Wine by Wine ID
//         console.log (`\x1b[33m PUT - Wine routes: '/inactivate/:wine_id'\x1b[0m`)
//         console.log (`\x1b[33m PUT - INACTIVATE Wine Record by Wind ID \x1b[0m`)
//         const inactivateWine = await Wine.update(
//             {
//                 active_ind: 0,
//             },
//             {
//                 where: {
//                     wine_id: req.params.wine_id,
//                 },
//             }
//         )
//         res.status(200).json(`Wine ID ${req.params.wine_id} inactivated`);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

module.exports = router;
