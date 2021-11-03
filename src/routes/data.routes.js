import { Router } from "express";
import dataCtrl from "../controllers/data.controllers";


const router = Router();

router.route("/api")
    .get(dataCtrl.listarData)
    .post(dataCtrl.crearData)
router.route("/api/:id")
    .delete(dataCtrl.eliminarData)
    .put(dataCtrl.editarData)
    .get(dataCtrl.obtenerUnDato)    

export default router;