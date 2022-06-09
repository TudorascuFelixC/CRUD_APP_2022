
# Solent University 
## in Partnership with QA (QAHE)

-----------------------------------------
> ## _Felix Tudorascu_
> ## id: 10103209
-----------------------------------------
## Module Title:	Advanced Database Systems
## Module Code:	   QHO541
-----------------------------------------


## Title and Cover Page

## WEBSITE CRUD APP-FULLSTACK WEB APPLICATION
## Git Repository click here> [https://github.com/TudorascuFelixC](https://github.com/TudorascuFelixC)
## View website : [https://websiteappfelix.herokuapp.com/](https://websiteappfelix.herokuapp.com/)

> For the best view of this website i will recomend 1920x1080 / 16:9 / 27 inch monitor.

---------------------------------------------------------------------

>Introduction <br>
The use vehicle market is one of the most profitable businesses, especially when it has a website. The goal of this project is to build a complete stack online application for Felix Hypercars. From the backend system, this website will be able to create CRUD (Create, Read, Update, and Delete) operations with values taken from the user. In this app you can crate your own user, read all your informatios, update your informations and delete your user.
### Definition of CRUD Application
```sh 
CRUD stands for create, read, update, and delete, and it is a computer programming acronym that refers to the four functions that are required to develop a persistent storage application. 
```


What include the form ?
- Username
   *  First and Last name
- Email
   * email required.
- Gender
-    * Male / Female
- Status
-    * Active / Inactive
  ---------------------------------------------------------------------
  > In this fig. its showing how add user interface looks like. 
![](https://github.com/TudorascuFelixC/CRUD_APP_2022/blob/main/assets/img/photos/form.jpg?raw=true)
> In this figure add_user.ejs you can preview how the template and how the script was writen.
![](https://github.com/TudorascuFelixC/CRUD_APP_2022/blob/main/assets/img/photos/add_user.jpg?raw=true)
>in this figure is just a preview of database. all the objects.
![](https://github.com/TudorascuFelixC/CRUD_APP_2022/blob/main/assets/img/photos/create-user-form.jpg?raw=true)


## System overview

>This project's basic overview is such that it has an architectural framework. >The CRUD Application project has both a front end and a back end. NodeJS, >MongoDB, and Express make up the back end.
>The front end will be a PHP, CSS, HTML, and Javascript.

# Tech

My crud application is using :


- [markdown-it] - Markdown parser done right. Fast and easy to extend.
- [php] - is a web-oriented general-purpose scripting language.
- [MongoDB] - MongoDB is a cross-platform document-oriented database application that is open source. MongoDB is a NoSQL database application that works with JSON-like documents and optional schemas. i used MongoDB to create and use my database.
- [node.js] - evented I/O for the backend
- [Express] - fast node.js network app framework
- [Github] - virtual host where all the repository are pushed. [GitHub](https://github.com/TudorascuFelixC)
- [HTML] - the most used thing in the world
- [CSS] 

And of course Dillinger itself is open source with a [public repository][dill]
 on GitHub.


## Instalation
This project requires [Node.js](https://nodejs.org/) v10+ to run.
* i used the last version v18.3.0
  
Install the packages/dependecies and start the server.
```sh
cd project-crud-solent-2022
```
```sh
npm init
```
```sh
 *package.json was created
 ```
 ## Lets install the external modules

 ```sh
npm i express - im using this to rapidly develop the node application
```
```sh
npm morgan - is helping us to log a message every time when we make a request
```
```sh
npm nodemon - allow us to restart the reserver automatically when we make changes in the project
```
```sh
npm ejs - is the template engine i am using for this project and allow us to create dynamic html
```
```sh
npm body-parser - is amodule and allows us to serialize the data and access the form data using body property
```
```sh
npm dotenv - allow you to separate the secret from your source code 
```
```sh
npm mongoose - using this module we are going to connect this project with MongoDB database 
```
```sh
npm axios - is a library and makes easy to make a request in express application
```


<br>
<br>
<br>

# Database Design
### MongoDB
>MongoDB is a document database that stores data in a JSON-like format. MongoDB features a versatile data format that allows you to store unstructured data, as well as complete indexing and replication support through rich and straightforward APIs.
![](https://github.com/TudorascuFelixC/CRUD_APP_2022/blob/main/assets/img/photos/database.jpg?raw=true)

<br>

### Postman
>Developers may use Postman to design, create, test, and iterate their APIs.
In this figure you can see how can GET data from Database using POSTMAN.
https://websiteappfelix.herokuapp.com/api/users
![](https://github.com/TudorascuFelixC/CRUD_APP_2022/blob/main/assets/img/photos/postman.jpg?raw=true)


<br>

>After i checked evething is working perfect, i created a link to connect my Cluster0 in my application env. (confi.env)
Replace <password> with the password for the <username> user. 
![](https://github.com/TudorascuFelixC/CRUD_APP_2022/blob/main/assets/img/photos/cluster0MongoDB.jpg?raw=true)

<br>



# Security and Scalability of my website

> Secure Hypertext Transfer Protocol is a Hypertext Transfer Protocol extension. It is often used on the Internet and is utilised for secure communication across a computer network. The Transport Layer Security (TLS) or Secure Sockets Layer (SSL) protocol is used to encrypt communication in HTTPS.
![](https://github.com/TudorascuFelixC/CRUD_APP_2022/blob/main/assets/img/photos/http_to_https-1.jpg?raw=true)

>The connection to this site is using a valid, trusted server certificate issued by Amazon.
The connection is encrypted and authentificated using TLS 1.2, ECDHE_RSA with P256, and AES_128_GCM.
![](https://github.com/TudorascuFelixC/CRUD_APP_2022/blob/main/assets/img/photos/security.jpg?raw=true)

<br>

# Conclusion and Reflection

<br>

# Bellow is showing a short preview
![](https://github.com/TudorascuFelixC/CRUD_APP_2022/blob/main/assets/img/photos/1.jpg?raw=true)
![](https://github.com/TudorascuFelixC/CRUD_APP_2022/blob/main/assets/img/photos/2.jpg?raw=true)
![](https://github.com/TudorascuFelixC/CRUD_APP_2022/blob/main/assets/img/photos/3.jpg?raw=true)
![](https://github.com/TudorascuFelixC/CRUD_APP_2022/blob/main/assets/img/photos/4.jpg?raw=true)
![](https://github.com/TudorascuFelixC/CRUD_APP_2022/blob/main/assets/img/photos/5.jpg?raw=true)
![](https://github.com/TudorascuFelixC/CRUD_APP_2022/blob/main/assets/img/photos/6.jpg?raw=true)
![](https://github.com/TudorascuFelixC/CRUD_APP_2022/blob/main/assets/img/photos/7.jpg?raw=true)









