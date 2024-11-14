import User from "../Database/userSchema.js"
import "../Database/connection.js"
export var saveUser =async (req,res,next)=>{

    
    const {name,mobile,age,email}= req.query;
    

    // res.status(201).json({message :"Request"});
    try {
        const newUser = new User({name,mobile,age,email});
        
        const savedUser = await newUser.save();
        res.status(201).json({message :"User Created Succesfully",savedUser});
      } catch (error) {
        res.status(400).json({ message: error.message });
        console.log(error.message);
      }

}
export var readUser =async (req,res,next)=>{

    
    try {
        const users = await User.find();
        res.status(200).json(users);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    };


export var delUser =async (req,res,next)=>{

    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        if (!deletedUser) return res.status(404).json({ message: 'User not found' });
        res.status(200).json({ message: 'User deleted successfully' });
      } catch (error) {
        res.status(500).json({ message: error.message });
      }

}
export var updateUser =async (req,res,next)=>{

    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
          new: true,
          runValidators: true,
        });
        if (!updatedUser) return res.status(404).json({ message: 'User not found' });
        res.status(200).json(updatedUser);
      } catch (error) {
        res.status(400).json({ message: error.message });
      }

}