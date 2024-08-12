const express=require("express")
const app=express()
const cors = require('cors')


app.use(express.json())
app.use( cors({origin:"*"}))



const {cart}=require("./src/route/cart.route")
const {category}=require("./src/route/category.route")
const {order}=require("./src/route/oder.route")
const {orderitem}=require("./src/route/orderitem.route")
const {product}=require("./src/route/product.route")
const {promotio}=require("./src/route/promotion.route")
const {review}=require("./src/route/review.route")
const {shipping}=require("./src/route/shipping_address.route")
const {user}=require("./src/route/users.route")
user(app)
shipping(app)
review(app)
promotio(app)
product(app)
orderitem(app)
order(app)
category(app)
cart(app)
app.listen("8000",()=>{
    console.log("Server run on port 8001")
})