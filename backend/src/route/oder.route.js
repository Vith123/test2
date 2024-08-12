const {getall,create,update,remove}=require("../controller/order.controller")

const order=(app)=>{
    app.get("/api/order",getall)
    app.post("/api/order",create)
    app.put("/api/order",update)
    app.delete("/api/order/:id",remove)
}

module.exports={order}