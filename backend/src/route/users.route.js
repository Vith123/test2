const {getall,create,update,remove}=require("../controller/users.controller")

const user=(app)=>{
    app.get("/api/user",getall)
    app.post("/api/user",create)
    app.put("/api/user",update)
    app.delete("/api/user/:id",remove)
}

module.exports={user}