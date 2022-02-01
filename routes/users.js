var express = require('express');
var router = express.Router();
const pool = require("../db");
/* GET users listing. Prueba de escritorio*/
router.get("/", async (req, res) => {
  try {
    const response = await pool.query(`SELECT * FROM users`);
    return res.status(200).json(response.rows);
  } catch (error) {
    console.log(error)
    res.status(500).json(error);
  }
});

module.exports = router;
