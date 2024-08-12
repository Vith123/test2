const {getall,create,update,remove}=require("../controller/shpping_address.controller")

const shipping=(app)=>{
    app.get("/api/shipping",getall)
    app.post("/api/shipping",create)
    app.put("/api/shipping",update)
    app.delete("/api/shipping/:id",remove)
}

module.exports={shipping}