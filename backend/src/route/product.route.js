const {getall,create,update,remove}=require("../controller/product.controller")
const  {upload}=require("../util/helper")
const product=(app)=>{
    app.get("/api/product",getall)
    app.post("/api/product",upload.single("product_image"),create)
    app.put("/api/product",upload.single("product_image"),update)
    app.delete("/api/product/:id",remove)
}

module.exports={product}