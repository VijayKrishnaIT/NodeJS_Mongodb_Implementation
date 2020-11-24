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

//post request
app.post("/newemployee", (req, res) => {
  let obj = {
    id: req.body.id,
    fullName: req.body.fullName,
    email: req.body.email,
    mobile: req.body.mobile,
    city: req.body.city,
    gender: req.body.gender,
    departmentId: req.body.departmentId,
    hireDate: req.body.hireDate,
    isPermanent: req.body.isPermanent,
  };
  mernClient.connect(db_url, (err, client) => {
    if (err) throw err;
    else {
      let db = client.db(db_name);
      db.collection(collection_name).insertOne(obj, (err, result) => {
        if (err) throw err;
        else {
          res.send({ insert: "success" });
        }
      });
    }
  });
});

//update employee data (mobile,email and city) based on id
app.put("/updateemployee", (req, res) => {
  mernClient.connect(db_url, (err, client) => {
    if (err) throw err;
    else {
      let db = client.db(db_name);
      db.collection(collection_name).updateOne(
        { id: req.body.id },
        {
          $set: {
            mobile: req.body.mobile,
            email: req.body.email,
            city: req.body.city,
          },
        },
        (err, result) => {
          if (err) throw err;
          else {
            res.send({ message: "record updated successfully" });
          }
        }
      );
    }
  });
});

//delete request
app.delete("/deleteemployee", (req, res) => {
  mernClient.connect(db_url, (err, client) => {
    if (err) throw err;
    else {
      let db = client.db(db_name);
      db.collection(collection_name).deleteOne(
        { id: req.body.id },
        (err, result) => {
          if (err) throw err;
          else {
            res.send({ message: "record deleted successfully !!!" });
          }
        }
      );
    }
  });
});

//assign the port no
let port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log("server started");
});

//http://localhost:8080/employees       (GET)
//http://localhost:8080/newemployee     (POST)
//http://localhost:8080/updateemployee  (PUT)
//http://localhost:8080/deleteemployee  (DELETE)
//assign the port no
let port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log("server started");
});
