const {getall,create,update,remove}=require("../controller/cart.controller")

const cart=(app)=>{
    app.get("/api/cart",getall)
    app.post("/api/cart",create)
    app.put("/api/cart",update)
    app.delete("/api/cart/:id",remove)
}

module.exports={cart}