const {getall,create,update,remove}=require("../controller/category.controller")

const category=(app)=>{
    app.get("/api/category",getall)
    app.post("/api/category",create)
    app.put("/api/category",update)
    app.delete("/api/category/:id",remove)
}

module.exports={category}