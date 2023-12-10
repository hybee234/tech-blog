const router = require('express').Router();
const { User } = require('./../../models');
// const nodemailer = require('./../../util/nodemailer');
const bcrypt = require('bcrypt');

// http://localhost:3001/api/users/

//-----------------------------//
//- Login User - Authenticate -//
//-----------------------------//

    // {
    //     "username" : "HL",
    //     "password" : "12345678"	
    // }

router.post('/login', async (req, res) => {
    try {
        console.log (`\x1b[35m POST - User Routes: '/:login'\x1b[0m`)
        console.log (`\x1b[35m POST - ONE Session Record\x1b[0m`)
        
        // Find user record by username
        const userData = await User.findOne({ where: { username: req.body.username } });

        // If username not found - error
        if (!userData) {
            res.status(400).json({ message: 'Incorrect email or password, please try again (Username)' });
            return;
        }

        // Find and check the Password associated with the User - error if not match
        const validPassword = await userData.checkPassword(req.body.password);

        if (!validPassword) {
            res.status(400).json({ message: 'Incorrect email or password, please try again (Password)' });
            return;
        }

        // Create the session - 
        // Save these values into the session for later retrieval by the server
        await req.session.save( () => {
            req.session.logged_in = true; // Logged in flag
            req.session.user_id = userData.user_id;
            req.session.name = userData.name;
            req.session.username = userData.username
            req.session.test = "bananas"; // Test value stored against user session
            res.json({ user: userData, message: 'You are now logged in!' });
        });

        console.log (`\x1b[35m User ID: ${userData.user_id}\x1b[0m`)
        console.log (`\x1b[35m Name: ${userData.name}\x1b[0m`)
        console.log (`\x1b[35m Username: ${userData.username}\x1b[0m`)
        console.log (`\x1b[35m Logged in: ${req.session.logged_in}\x1b[0m`)
        console.log (`\x1b[35m Test: ${req.session.test}\x1b[0m`)

        console.log (`\x1b[31m userData \x1b[0m`)
        console.log(userData)
        console.log (`\x1b[31m req.session \x1b[0m`)
        console.log(req.session) //ACCESS SESSION DETAILS BY USING THIS VARIABLE
        console.log (`\x1b[31m req.test \x1b[0m`)
        console.log (`\x1b[35m Test: ${req.session.test}\x1b[0m`)
        //             res.json({ message: 'You are now logged in!' })  

    //     res.render('homepage',  {          
    //         logged_in: req.session.logged_in,            
    //         user_id: req.session.user_id,
    //         username: req.session.username,
    //         name: req.session.name
    // })

        
    } catch (err) {
        res.status(400).json(err);
    }
});

//--------------------//
//- Sign Up New User -//
//--------------------//

    // {
    // 	"name" : "Adam",
    // 	"username" : "AH",
    // 	"password" : "12345678"	
    // }
    
router.post('/signup', async (req, res) => {
    try {
        console.log (`\x1b[35m POST - User Routes: '/:signup'\x1b[0m`)
        console.log (`\x1b[35m POST - ONE User record\x1b[0m`)

        console.log (`\x1b[35m ${req.body.name}\x1b[0m`)
        console.log (`\x1b[35m ${req.body.username}\x1b[0m`)
        console.log (`\x1b[35m ${req.body.password}\x1b[0m`)

        // Create a new user
        const userData = await User.create({
        name: req.body.name,
        username: req.body.username,
        password: req.body.password
        });

        // Create the session - 
        // Save these values into the session for later retrieval by the server
        req.session.save(() => {
            req.session.logged_in = true; // Logged in flag
            req.session.user_id = userData.user_id;
            req.session.name = userData.name;
            req.session.username = userData.username;
            req.session.test = "bananas"; // Test value stored against user session

        // nodemailer()

        // Send the response back to the client
        res.status(200)
        .json({ user: userData, message: 'Signup successful, verification email sent' })
        .redirect('/')
        });

    } catch (err) {
        // Ensure this is called only if no response has been sent yet
        if (!res.headersSent) {
        res.status(400).json(err);
        }
    }
});

//-----------//
//- Log Out -//
//-----------//

// Logout route: logs a user out by destroying the session
router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy((err) => {
        if (err) {
            res.status(500).send('Error logging out');
        } else {
            res.clearCookie('connect.sid');
            res.send('User logged out, session destroyed')
            // res.redirect('/login')
        }
        });
    } else {
        res.status(404).send('Not logged in');
    }
});


// PUT route: Update a user's password
// router.put('/:user_id', async (req, res) => {
//     try {
//         const { currentPassword, newPassword } = req.body;
//         const userData = await User.findByPk(req.session.user_id);

//         if (!userData) {
//         return res.status(404).json({ message: 'User not found' });
//         }

//         const validPassword = await bcrypt.compare(currentPassword, userData.password);
//         if (!validPassword) {
//         return res.status(401).json({ message: 'Incorrect current password' });
//         }

//         await userData.update({ password: newPassword });

//         res.json({ message: 'Password updated successfully' });
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ message: 'Internal Server Error', error: err.message });
//     }
// });

// DELETE route: deletes the logged-in user
// router.delete('/:user_id', async (req, res) => {
//   // Check if the user ID in the parameter matches the logged-in user's ID
//     if (req.params.user_id != req.session.user_id) {
//         return res.status(403).json({ message: 'Unauthorized to delete this account' });
//     }

//     try {
//         const userData = await User.destroy({
//         where: {
//             user_id: req.params.user_id, // Use 'id' instead of 'user_id'
//         },
//         });

//         if (!userData) {
//         res.status(404).json({ message: 'No user found with this id!' });
//         return;
//         }

//         // Clear the session as the user is now deleted
//         req.session.destroy(() => {
//         res.clearCookie('connect.sid'); // Clear the session cookie
//         res.status(200).json({ message: 'User successfully deleted' });
//         });

//     } catch (err) {
//         res.status(500).json(err);
//     }
// });



// GET route to fetch all users 
// router.get('/', async (req, res) => {
//     try {
//         const usersData = await User.findAll();

//         // Serialize data if necessary
//         const users = usersData.map(user => user.get({ plain: true }));

//         // Send response
//         res.json(users);
//     } catch (err) {
//         console.error("Error occurred:", err);
//         res.status(500).json({ message: 'Internal Server Error', error: err });
//     }
// });

// GET route to fetch a user by user_id
// router.get('/:user_id', async (req, res) => {
//     try {
//         const userId = req.params.user_id;
//         const userData = await User.findByPk(userId);

//         if (!userData) {
//         res.status(404).json({ message: 'User not found' });
//         return;
//         }

//         // Serialize data if necessary
//         const user = userData.get({ plain: true });

//         // Send response
//         res.json(user);
//     } catch (err) {
//         console.error("Error occurred:", err);
//         res.status(500).json({ message: 'Internal Server Error', error: err });
//     }
// });

// Export the router for use in the main app
module.exports = router;