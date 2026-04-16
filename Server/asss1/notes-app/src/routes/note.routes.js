const express = require("express");
const {
  createNote,
  createNotesBulk,
  getAllNotes,
  getNoteById,
  replaceNote,
} = require("../controllers/note.controller");

const router = express.Router();

router.post("/bulk", createNotesBulk);
router.post("/", createNote);
router.get("/", getAllNotes);
router.get("/:id", getNoteById);
router.put("/:id", replaceNote);

module.exports = router;
