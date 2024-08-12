const db=require("../util/db")

const getall=async(req,res)=>{
    try {
        const [data]=await db.query("SELECT * FROM users")
        res.json({
            message:"successfully",
            data:data
        })
    } catch (error) {
        res.json({
            message:error
        })
    }
}
const create = async (req, res) => {
    try {
        const { name, email, password, address, phone } = req.body;
        const param = [name, email, password, address, phone];
        const [result] = await db.query("INSERT INTO users (name, email, password, address, phone) VALUES (?, ?, ?, ?, ?)", param);
        res.status(201).json({
            message: 'User created successfully',
            data: result
        });
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({
            message: 'Error creating user',
            error: error.message
        });
    }
};

const update = async (req, res) => {
    try {
        const { name, email, password, address, phone, id } = req.body;
        if (!id) {
            return res.status(400).json({
                message: 'ID is required for updating the user'
            });
        }
        const param = [name, email, password, address, phone, id];
        const [result] = await db.query(
            "UPDATE users SET name=?, email=?, password=?, address=?, phone=? WHERE id=?",
            param
        );
        if (result.affectedRows === 0) {
            return res.status(404).json({
                message: 'User not found'
            });
        }
        res.json({
            message: 'User updated successfully',
            data: result
        });
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).json({
            message: 'Error updating user',
            error: error.message
        });
    }
};

const remove=async(req,res)=>{
    const {id}=req.params
    const [data]=await db.query("DELETE FROM users WHERE id=?",id)
    res.json({
        data:data
    })
}
module.exports={getall,create,update,remove}