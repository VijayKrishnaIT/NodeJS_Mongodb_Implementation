// import modules
// require()
let express = require("express");
let cors = require("cors");
let mongodb = require("mongodb");
let bodyparser = require("body-parser");

//rest object
let app = express();
//where app is the rest object
//where app object helps to develop the rest services.

//enable the ports communication.
app.use(cors());

//json as MIME
app.use(bodyparser.json());

//read the form data from client
app.use(bodyparser.urlencoded({ extended: false }));

let password = "admin";
let db_name = "mern-db";
let collection_name = `employees`;
let db_url = `mongodb+srv://admin:admin@miniprojectdb.nzphu.mongodb.net/mern_db?retryWrites=true&w=majority`;

//create the get request
app.get("/employees", (req, res) => {
  mernClient.connect(db_url, (err, client) => {
    if (err) throw err;
    else {
      let db = client.db(db_name);
      db.collection(collection_name)
        .find()
        .toArray((err, array) => {
          if (err) throw err;
          else {
            res.send(array);
          }
        });
    }
  });
});

//assign the port no
let port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log("server started");
});
