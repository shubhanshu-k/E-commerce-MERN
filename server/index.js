const express = require('express');
const cors = require("cors");
const PORT = process.env.port || 5000
const mongoose = require('mongoose')
const Product=require("./db/Product");
const User = require("./db/user");
require('dotenv').config()
const app = express();
app.use(express.json());
app.use(cors());
mongoose
.connect(process.env.MONGODB_URL)
.then(()=>console.log(`connected To MongoDB...`))
.catch((err)=>console.log(err))

app.post("/add-product",async (req,resp)=>
{
 let product=new Product(req.body);
 let result = await product.save();
 resp.send(result);
})

app.post("/register", async (req, resp) => {
  let user = new User(req.body);
  let result = await user.save();
  result = result.toObject();
  delete result.password
  resp.send(req.body)
})
app.post("/login", async (req, resp) => {
  console.log(req.body)
  if (req.body.password && req.body.email) {
    let user = await User.findOne(req.body).select("-password");
    if (user) {
      resp.send(user)
    }
    else {
      resp.send({ result: "No User Found" })
    }
  }
  else {
    resp.send({ result: 'No User Found' })
  }
})


app.listen(PORT,()=>console.log(`Listening on: ${PORT}`))