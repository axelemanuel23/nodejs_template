//EndPoint /todomanager

const express = require("express");
const cors = require("cors");
const { ToDoService } = require("../services/todoService");

const router = express.Router();
const service = new ToDoService();
const whitelist =["http://localhost:3000"];
router.use(cors({origin: whitelist}));
router.get("/", (req, res, next) => {
     service.find(req, res, next);
})

// router.get("/filter", (req, res, next) => {
//     service.filter(req, res, next);
// })

router.post("/", (req, res, next) => {
    service.create(req, res, next);
})

// router.get("/:id", (req, res, next) => {
//     service.findOne(req, res, next);
// })

// router.put("/:id", (req, res) =>{
//     const { id } = req.params;
//     const body = req.body;
//     service.update(id, body, res);
// })
/* ----------------------------------- */

router.patch("/:id", (req, res, next) =>{
    service.update(req, res, next);
})

router.delete("/:id", (req, res, next) =>{
    service.delete(req, res, next);
})

module.exports = router;