import express from "express";
var router = express.Router();
import * as Crud from "../controller/crud.js"
router.get("/try",)
router.post("/save",Crud.saveUser);
router.get("/read",Crud.readUser);

router.delete("/delete",Crud.delUser);
router.patch("/update",Crud.updateUser);

export default router;
/* 
Urls : 
http://localhost:4000/api/save
http://localhost:4000/api/read
http://localhost:4000/api/delete
http://localhost:4000/api/update
*/