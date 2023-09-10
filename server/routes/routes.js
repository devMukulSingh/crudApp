import express from "express";
import { addUserController, getUserController ,getEditUserController ,editUserController, deleteUserController} from "../controller/userController.js";

const router = express.Router();

router.post("/addusers", addUserController );
router.get("/getusers",getUserController );
router.get("/:id",getEditUserController);
router.post("/:id",editUserController);
router.delete("/:id",deleteUserController);

export default router;