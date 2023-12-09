const sequelize = require('../config/connection');

const seedBlogs = require('./seedBlogs');
const seedComments = require('./seedComments');
const seedUsers = require('./seedUsers');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    await seedUsers();
    console.log('\n----- USERS SEEDED -----\n'); 
    await seedBlogs();
    console.log('\n----- BLOGS SEEDED -----\n');
    await seedComments();
    console.log('\n----- COMMENTS SEEDED -----\n');

    process.exit(0);
};

seedAll();
