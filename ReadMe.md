## MERN Application

# MongoDB

        - MongoDB database is NoSQL database.

        - MongoDB database supports only JSON.

        - MongoDB database is the light weight database.

        - default port no MongoDB database is 27017.

        - MongoDB database follows "mongodb" protocol.

        - MongoDB database is client server database.

## Terminology

SQL NoSQL

database database

table collection

record document

field property

primarykey \_id

Note : "MongoDB Atlas" provides cloud environment.

---

database_name = mern_db

collection_name = employees

## db_url : mongodb+srv://admin:admin@miniprojectdb.nzphu.mongodb.net/mern_db?retryWrites=true&w=majority

# Node Server Implementation

1.  create the directory

         Ex.
            server

2.  switch to server directory

         > cd server

3.  download node modules

         => mongodb

         => express

         => cors

         => body-parser

         - mongodb module helps to connect to mongodb database

         - express module used to develop the rest services

         - cors module helps to enable the ports communication

         - body-parser module receives the data from client application.

4.  develop the node server

         server.js

# NodeJS(server technology)

1. create the server directory

2. switch to server directory

3. download node modules

   > yarn add mongodb express cors body-parser --save

   => mongodb

   => express

   => cors

   => body-parser

- mongodb module helps to connect to mongodb database.

- express module used to develop the rest services.

- cors module helps to enable the ports communications.

- body-parser module receives the data from client application.

## server.js explantion

1.  import modules using require()

2.  create rest object
    let app = express(); - where app is the rest object - where app object helps to develop the rest services
3.  enable the ports communication
    app.use(cors());

4.  json as MIME
    app.use(bodyparser.json());

5.  read the form data
    app.use(bodyparser.urlencoded({extended:false}));

    let password = `admin`;

    let db_name = `mern-db`;

    let collection_name = `employees`;

    let db_url = `mongodb+srv://admin:${password}@miniprojectdb.nzphu.mongodb.net/${db_name}?retryWrites=true&w=majority`;

    let mernClient = mongodb.MongoClient;

6.  create the GET request

7.  assign the port no

        let port = process.env.PORT || 8080;
        app.listen(port,()=>{
        console.log("server started");
        })
