const user = require('../models/users')

let users = [
    {id:1, nama: "Reyhan Nayaka Utomo", email: "reyhann@gmail.com"},
    {id:2, nama: "Nayaka", email: "Nayaka.123@gmail.com"}
]

module.exports = {
    index: async(req, res) => {
        try{
            const users = await user.find()

        if(users.length > 0){
            res.status(200).json({
                status: true, 
                data: users,
                method: req.method,
                code: 200
            })

        }else{
            res.json({
                status: false,
                data: null,
                code: 400
            })
        }
        } catch{
            res.status(400).json({success: false, code: 400})
        }
      },

    userPost: async (req, res) => {
        console.log(req)
        try{
            const users = await user.create(req.body)
            res.status(200).json({
                status: true,
                data: users,
                code: 200
            })
        } catch{
            res.status(400).json({success: false, code: 400})
        }
      },

    userPut: async (req, res) => {
        try{
            const users = await user.findByIdAndUpdate(req.params.id, req.body, {
                new: true,
                runValidators: true
            })
            res.status(200).json({
                status: true,
                data: users,
                code: 200,
                message: "Data berhasil di ubah"
            })
        } catch{
            res.status(400).json({success: false, code: 400})
        }
     },

     userDel: async (req, res) => {
        try{
            const users = await user.findByIdAndDelete(req.params.id, {
                new: true,
                runValidators: true
            })
            res.status(200).json({
                status: true,
                data: users,
                code: 200,
                message: "Data berhasil hapus"
            })
        } catch{
            res.status(400).json({success: false, code: 400})
        }
    },

    getUserById: async (req, res) => {
        try{
            const users = await user.findById(req.params.id)
            res.status(200).json({
                status: true,
                data: users,
                code: 200,
            })
        } catch{
            res.status(400).json({success: false, code: 400})
        }
    }

    
}