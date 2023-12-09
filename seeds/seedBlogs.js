const { Blog } = require('../models');

const blogData = [
  {
    blog_title: 'Chiikawa',
    blog_body: 'Chiikawa, also known as Nanka Chiisakute Kawaii Yatsu, is a Japanese manga series by Nagano. It has been serialized online via Twitter since January 2020 and has been collected in five tankōbon volumes by Kodansha. An anime television series adaptation by Doga Kobo premiered in April 2022.',
    blog_date:  '2021-06-15',
    active_ind: '1',
    user_id: '1'
  },
  {
    blog_title: 'RESTful API (Inactive user)',
    blog_body: 'RESTful API is an interface that two computer systems use to exchange information securely over the internet. Most business applications have to communicate with other internal and third-party applications to perform various tasks.',
    blog_date:  '2022-01-30',
    active_ind: '1',
    user_id: '3'
  },
  {
    blog_title: 'SQL',
    blog_body: 'asdfasdf',
    blog_date:  '2022-03-21',
    active_ind: '1',
    user_id: '2'
  },
  {
    blog_title: 'NOde.js',
    blog_body: 'asdfasdf',
    blog_date:  '2023-01-31',
    active_ind: '1',
    user_id: '1'
  },
  {
    blog_title: 'Inactive Blog',
    blog_body: 'asdfasdf',
    blog_date:  '2023-04-14',
    active_ind: '0',
    user_id: '2'
  },
  {
    blog_title: 'Express',
    blog_body: 'asdfasdf',
    blog_date:  '2023-05-14',
    active_ind: '1',
    user_id: '2'
  },
];

const seedBlogs = () => Blog.bulkCreate(blogData);

module.exports = seedBlogs;
