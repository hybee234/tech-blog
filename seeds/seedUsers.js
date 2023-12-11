const { User } = require('../models');


const userData = [
    {
        name: 'Admin ',
        email: 'admin@email.com',
        password: '$2b$10$x5pxTXvKctGbfXGbmk5nhOWvKGroeSgEh.cvSkpfPpGAfzYnCukhm',  //12345678
        active_ind: '1'
    }, 
    {
        name: 'Huber Heats',
        email: 'hh@email.com',
        password: '$2b$10$x5pxTXvKctGbfXGbmk5nhOWvKGroeSgEh.cvSkpfPpGAfzYnCukhm',  //12345678
        active_ind: '1'
    },  
    {
        name: 'John Smith',
        email: 'js@email.com',
        password: '$2b$10$2QyIud4Ex1OvS8niZJ9HWuDT11c3ZZveRL1VuLY7Wwso2fMkpdu8a',  //87654321
        active_ind: '1'
    },
    {
        name: 'Inactive User',
        username: 'inactive',    
        email: 'inactive@email.com',
        password: '$2b$10$2QyIud4Ex1OvS8niZJ9HWuDT11c3ZZveRL1VuLY7Wwso2fMkpdu8a',  //87654321
        active_ind: '0'
    },           
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
