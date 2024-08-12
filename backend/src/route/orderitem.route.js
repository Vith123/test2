const {getall,create,update,remove}=require("../controller/orderitem.controller")

const orderitem=(app)=>{
    app.get("/api/orderitem",getall)
    app.post("/api/orderitem",create)
    app.put("/api/orderitem",update)
    app.delete("/api/orderitem/:id",remove)
}

module.exports={orderitem}