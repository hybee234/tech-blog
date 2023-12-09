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
    blog_body: 'Structured query language (SQL) is a programming language for storing and processing information in a relational database. A relational database stores information in tabular form, with rows and columns representing different data attributes and the various relationships between the data values',
    blog_date:  '2022-03-21',
    active_ind: '1',
    user_id: '2'
  },
  {
    blog_title: 'Node.js',
    blog_body: 'Node.js is a cross-platform, open-source JavaScript runtime environment that can run on Windows, Linux, Unix, macOS, and more. Node.js runs on the V8 JavaScript engine, and executes JavaScript code outside a web browser. Node.js lets developers use JavaScript to write command line tools and for server-side scripting.',
    blog_date:  '2023-01-31',
    active_ind: '1',
    user_id: '1'
  },
  {
    blog_title: '(Inactive) Model View Controller (MVC)',
    blog_body: 'Model–view–controller is a software design pattern commonly used for developing user interfaces that divides the related program logic into three interconnected elements.',
    blog_date:  '2023-04-14',
    active_ind: '0',
    user_id: '2'
  },
  {
    blog_title: 'Express',
    blog_body: 'Express.js, or simply Express, is a back end web application framework for building RESTful APIs with Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs. It has been called the de facto standard server framework for Node.js.',
    blog_date:  '2023-05-14',
    active_ind: '1',
    user_id: '2'
  },
];

const seedBlogs = () => Blog.bulkCreate(blogData);

module.exports = seedBlogs;
