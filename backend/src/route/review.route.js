const {getall,create,update,remove}=require("../controller/review.controller")

const review=(app)=>{
    app.get("/api/review",getall)
    app.post("/api/review",create)
    app.put("/api/review",update)
    app.delete("/api/review/:id",remove)
}

module.exports={review}