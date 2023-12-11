const router = require('express').Router();
const { User } = require('./../../models');
// const nodemailer = require('./../../util/nodemailer');
const bcrypt = require('bcrypt');

// http://localhost:3001/api/users/

//-----------------------------//
//- Login User - Authenticate -//
//-----------------------------//

    // {
    //     "email" : "HL",
    //     "password" : "12345678"	
    // }

router.post('/login', async (req, res) => {
    try {
        console.log (`\x1b[35m POST - User Routes: '/:login'\x1b[0m`)
        console.log (`\x1b[35m POST - Create Session\x1b[0m`)
        
        // Find user record by email
        const userData = await User.findOne({ where: {
            email: req.body.email,
            active_ind: 1
            }
        });

        // If email not found - error
        if (!userData) {
            res.status(400).json({ message: 'Incorrect email or password, please try again (Email)' });
            return;
        }

        // Find and check the Password associated with the User - error if not match
        const validPassword = userData.checkPassword(req.body.password);

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
            req.session.email = userData.email
            if (req.session.user_id ===1) {         // Is this user_id? if so then grant admin privileges
                req.session.admin = true
            } else {
                req.session.admin = false
            }            
            res.json({ user: userData, message: 'You are now logged in!' });
        });
        
        console.log (`\x1b[35m User ID: ${req.session.user_id}\x1b[0m`)
        console.log (`\x1b[35m Name: ${req.session.name}\x1b[0m`)
        console.log (`\x1b[35m Email: ${req.session.email}\x1b[0m`)
        console.log (`\x1b[35m Logged in: ${req.session.logged_in}\x1b[0m`)
        console.log (`\x1b[35m Admin: ${req.session.admin}\x1b[0m`)
        console.log (`\x1b[31m userData \x1b[0m`)
        console.log(userData)
        console.log (`\x1b[31m req.session \x1b[0m`)
        console.log(req.session) //ACCESS SESSION DETAILS BY USING THIS VARIABLE
        console.log (`\x1b[31m req.Admin \x1b[0m`)
        console.log (`\x1b[35m Admin: ${req.session.admin}\x1b[0m`)
        
    } catch (err) {
        res.status(400).json(err);
    }
});

//--------------------//
//- Sign Up New User -//
//--------------------//

    // {
    // 	"name" : "Adam",
    // 	"email" : "AH@email.com",
    // 	"password" : "12345678"	
    // }
    
router.post('/signup', async (req, res) => {
    try {
        console.log (`\x1b[35m POST - User Routes: '/:signup'\x1b[0m`)
        console.log (`\x1b[35m POST - Create User and Session\x1b[0m`)

        // console.log (`\x1b[35m ${req.body.name}\x1b[0m`)
        // console.log (`\x1b[35m ${req.body.email}\x1b[0m`)
        // console.log (`\x1b[35m ${req.body.password}\x1b[0m`)

        // Create a new user
        const userData = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
        });

        // Create the session - 
        // Save these values into the session for later retrieval by the server
        await req.session.save(() => {
            req.session.logged_in = true; // Logged in flag
            req.session.user_id = userData.user_id;
            req.session.name = userData.name;
            req.session.email = userData.email
            if (req.session.user_id ===1) {         // Is this user_id? if so then grant admin privileges
                req.session.admin = true
            } else {
                req.session.admin = false
            }     
            res.status(200).json({ user: userData, message: 'Sign Up successful' });
        });
        // nodemailer()

    } catch (err) {
        res.status(400).json(err);
    }
});


//-----------//
//- Log Out -//
//-----------//

// Logout route: logs a user out by destroying the session
router.post('/logout', (req, res) => {
    console.log (`\x1b[35m POST - User Routes: '/:logout'\x1b[0m`)
    console.log (`\x1b[35m POST - Destroy Session\x1b[0m`)
    if (req.session.logged_in) {
        req.session.destroy((err) => {
            if (err) {
                res.status(500).send('Error logging out'); // e.g. session expires before logging out
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