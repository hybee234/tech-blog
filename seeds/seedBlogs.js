const { Blog } = require('../models');

const blogData = [
  {
    blog_title: 'Sequelize',
    blog_body: 'asdfasdf',
    blog_date:  '2012-01-01',
    active_ind: '1',
    user_id: '1'
  },
  {
    blog_title: 'RESTful API',
    blog_body: 'asdfasdf',
    blog_date:  '2012-01-01',
    active_ind: '1',
    user_id: '1'
  },
  {
    blog_title: 'SQL',
    blog_body: 'asdfasdf',
    blog_date:  '2012-01-01',
    active_ind: '1',
    user_id: '1'
  },
  {
    blog_title: 'NOde.js',
    blog_body: 'asdfasdf',
    blog_date:  '2012-01-01',
    active_ind: '1',
    user_id: '1'
  },
  {
    blog_title: 'Express',
    blog_body: 'asdfasdf',
    blog_date:  '2012-01-01',
    active_ind: '1',
    user_id: '1'
  },
];

const seedBlogs = () => Blog.bulkCreate(blogData);

module.exports = seedBlogs;
