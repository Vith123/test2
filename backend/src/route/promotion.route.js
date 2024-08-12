const {getall,create,update,remove}=require("../controller/promotion.controller")

const promotio=(app)=>{
    app.get("/api/promotion",getall)
    app.post("/api/promotion",create)
    app.put("/api/promotion",update)
    app.delete("/api/promotion/:id",remove)
}

module.exports={promotio}