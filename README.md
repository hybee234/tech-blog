<a ID="readme-top"></a>

<div align="center">

# Huber's Tech Blog

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Challenge 14 - Model View Controller (MVC)
</div>


## Description

Huber's Tech Blog is an forums that allows users to post their ideas and share views on toch topics.

High level features of the forum are:

* User management (logging in, account creation)
* Ability for user to post blogs about topics of interest
* Ability for users to comment on blogs


This application has been developed from scratch

## Table of contents

- <a href="#user-story">User Story</a>
- <a href="#user-acceptance-criteria">User Acceptance Criteria</a>
- [Installation](#installation)
- [Usage](#usage)
- <a href="#video-screenshots">Video and Screenshots</a>
- [License](#license)
- [Contributing](#contributing)
- [Testing](#testing)
- <a href="#technologies-used">Technologies Used</a>
- [Questions](#questions)

## User Story <a ID="user-story"></a>

This forum was developed with this user story in mind:

```
AS A developer who writes about tech

I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions
```
<p align="right">(<a href="#readme-top">back to top</a>)</p>

## User Acceptance Criteria <a ID="user-acceptance-criteria"></a>

### This server was developed with the below User acceptance criteria:

```
GIVEN a CMS-style blog site

WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in

WHEN I click on the homepage option
THEN I am taken to the homepage

WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in

WHEN I choose to sign up
THEN I am prompted to create a username and password

WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site

WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password

WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out

WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created

WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment

WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created

WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post

WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post

WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post

WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard

WHEN I click on the logout option in the navigation
THEN I am signed out of the site

WHEN I am idle on the site for more than a set time
THEN I am able to view posts and comments but I am prompted to log in again before I can add, update, or delete posts

```

### Additional requirements:

* Application folder structure must follow Model-View-Conrtoller (MVC) paradigm
* Express-handlebars
* MySQL2
* Sequelize
* Express.js API for controllers
* Manage environment variables via dotenv package
* bcrypt package to has passwords
* Express-session
* Connect-session-sequelize

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Video and Screenshots <a ID = "video-screenshots"></a>

### Video

Watch this video to learn more about the server

<a href="https://drive.google.com/file/d/1h29d87JOBtMskNZp2F4yEOWwkikeE907/view"> Video - "Huber's eCommerce Backend" </a>

### Screenshots

Screenshot of response to a GET request for all categories
<div align="center">

![Screenshot of the response to GET all categories](./assets/images/screenshot1.png)
</div>

Screenshot of response to a GET request for all products
<div align="center">

![Screenshot of the response to GET all products](./assets/images/screenshot2.png)
</div>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Installation

1. Clone or fork the repository
2. Run the below in console install necessary packages
    * MySQL2 (Major version 3),
    * Express (Major version 4)
    * Sequelize (Major version 6)
    * dotenv (Major version 8) 
```
npm i
```
3. After NPM packages have been installed, you'll need to set up your MySQL database for the application to read and write to. Log into MySQL2:
```
myself -u root -p
```
4. Within mysql2 - create the datbase with the schema provided, run the below command in the root folder (the below is the relative path):
```
source ./db/schema.sql
```
5. Optional - you can seed some data into the database while you are in mysql2 (Skip this step if you are going to use real data)
```
source ./db/seeds.sql
```
6. Exit MySQL2:
```
quit
```
7. You can run start the server once packages have been installed and the database is created. Run the below in the CLI:
```
node server.js
```



<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Usage

As this is purely a backend eCommerce server, utilise an API development platform like <a href="https://insomnia.rest/">Insomnia </a> to transmit API requests

Available APIs are as followeds

| Categories                 | API                                      | 
| -------------------------- | ---------------------------------------- | 
| GET all Category:          | http://localhost:3001/api/categories/    | 
| GET one Category by ID:    | http://localhost:3001/api/categories/:id | 
| POST one Category          | http://localhost:3001/api/categories/    | 
| PUT one Category by ID:    | http://localhost:3001/api/categories/:id | 
| DELETE one Category by ID: | http://localhost:3001/api/categories/:id | 

Category POST/PUT sample JSON body:
```
{
"category_name" : "sports"
}
```


| Products                  |                                        | 
| ------------------------- | -------------------------------------- | 
| GET all Product:          | http://localhost:3001/api/products/    | 
| GET one Product by ID:    | http://localhost:3001/api/products/:id | 
| POST one Product          | http://localhost:3001/api/products/    |  
| PUT one Product by ID:    | http://localhost:3001/api/products/:id |
| DELETE one Product by ID: | http://localhost:3001/api/products/:id |

Product POST/PUT sample JSON body:
 ```
 {
	"product_name": "basketball",
	"price" : 30.00,
	"stock" : 3,
	"tagIds" : ["1", "2", "3", "4"]
 }
 ```

| Tags                  |                                    |
| --------------------- | ---------------------------------- |
| GET all Tag:          | http://localhost:3001/api/tags/    |
| GET one Tag by ID:    | http://localhost:3001/api/tags/:id |
| POST one Tag          | http://localhost:3001/api/tags/    |
| PUT one Tag by ID:    | http://localhost:3001/api/tags/:id |
| DELETE one Tag by ID: | http://localhost:3001/api/tags/:id |

Tag POST/PUT sample JSON body:
```
{
"tag_name" : "ball"
}
```


The below SQL can be used to pull table data across the 4 tables used in this server:
```
--All values from all tables
SELECT
p.id as product_id,
p.product_name,
p.price,
p.stock, 
t.id as tag_id,
t.tag_name,
pt.id as producttag_id,
c.id as category_id,
c.category_name
FROM product p
LEFT JOIN product_tag pt on pt.product_id = p.id
LEFT JOIN tag t on t.id = pt.tag_id
LEFT JOIN category c ON p.category_id = c.id;
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>
    
## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This application can be used in conjunction with licensing covered in  <b>MIT Lcensee</b>

(Click on the badge for details of the license)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contributing

To contribute to this application, please reach out to me via my contact details below

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Testing

Automated Test scripts have not been developed for this application

## Schema and Seeding
* Validate that running the schema.sql file via mysql2 does not result in errors
* Validate that running the index.js file within the seed folder does nto result in seed errors

### Categories

* Validate that GET all Category request returns all Categories and associated Products
* Validate that GET one Category by ID returns a single Category and associated Products if the category ID exists
* Validate that GET one Category by ID returns an error if the category ID does not exist
* Validate that POST a Category adds a new record to the category table
* Validate that PUT (Updating) a Category by ID  is reflected in the database for the same ID
* Validate that PUT (Updating) a Category by ID  returns an error if the category ID does not exist
* Validate that DELETING a Category by ID removes the category from the database
* Validate that DELETING a Category by ID  returns an error if the ID does not exist

### Products

* Validate that GET all Product request returns all Products and associated Category and Tags
* Validate that GET one Product by ID returns a single Products and associated Category and Tags if the Product ID exists
* Validate that GET one Product by ID returns an error if the Product ID does not exist
* Validate that POST a Product adds a new record to the product table and corresponding record entries on the ProducTag table for each tag associated 
* Validate that PUT (Updating) a Product by ID  is reflected in the database for the same ID (including updating associated tags)
* Validate that PUT (Updating) a Product by ID  returns an error if the Product ID does not exist
* Validate that DELETING a Product by ID removes the Product from the database along with tag associations on the ProductTag table
* Validate that DELETING a Product by ID  returns an error if the ID does not exist

### Tags

* Validate that GET all Tag request returns all Tags and associated Products
* Validate that GET one Tag by ID returns a single Tag and associated Products if the Tag ID exists
* Validate that GET one Tag by ID returns an error if the Tag ID does not exist
* Validate that POST a Tag adds a new record to the product table 
* Validate that PUT (Updating) a Tag by ID  is reflected in the database for the same ID
* Validate that PUT (Updating) a Tag by ID  returns an error if the Product ID does not exist
* Validate that DELETING a Tag by ID removes the Tag from the database along with tag associations on the ProductTag table
* Validate that DELETING a Tag by ID  returns an error if the ID does not exist

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Technologies used <a ID="technologies-used"></a>

* Javascript
* Node.js
* Node Package Manager (NPM)
* MySQL2
* Express
* Sequelize
* dotenv

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Questions

- Visit my GitHub page: <a href="https://github.com/hybee234"> hybee234 </a>
  
<p align="right">(<a href="#readme-top">back to top</a>)</p>

