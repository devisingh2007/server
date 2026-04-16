const express = require("express");
const {
  createNote,
  createNotesBulk,
  getAllNotes,
} = require("../controllers/note.controller");

const router = express.Router();

router.post("/bulk", createNotesBulk);
router.post("/", createNote);
router.get("/", getAllNotes);

module.exports = router;
