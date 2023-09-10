import userModel from "../models/userModel.js";

export const addUserController = async(req,res) => {

  try {
      const userData = new userModel(req.body);
      await userData.save();
      res.status(200).json(`User added Successfully`);

  } catch (error) {
        res.status(500).json(`Error in AddUser Controller ${error}`);
  } 
}

export const getUserController = async(req,res) => {
  try {
    const userData = await userModel.find({});
     res.status(200).json(userData);
  } catch (error) {
      res.status(500).json(`Error in getUserController ${error}`);
  }
}

export const getEditUserController = async(req,res) => {
try {
    const user = await userModel.findOne( { _id: req.params.id } );
    res.status(200).json(user);
} catch (error) {
    res.status(409).json(`Error in editUserController ${error}`);
}
}

export const editUserController = async(req,res) => {
try {
    const user = await userModel.updateOne( {_id : req.params.id}, req.body );
    res.status(200).json(user);
} catch (error) {
    res.status(500).json(`Error in editUserCnontroller ${error}`);
}
}

export const deleteUserController = async (req,res) => {
  try {
    const user = await userModel.deleteOne( { _id: req.params.id} );
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(`Error in deleteUserController ${error}`);
  }

}