const express = require("express");
const {
  createNote,
  createNotesBulk,
  deleteNote,
  deleteNotesBulk,
  getAllNotes,
  getNoteById,
  replaceNote,
  updateNote,
} = require("../controllers/note.controller");

const router = express.Router();

router.post("/bulk", createNotesBulk);
router.post("/", createNote);
router.get("/", getAllNotes);
router.get("/:id", getNoteById);
router.put("/:id", replaceNote);
router.patch("/:id", updateNote);
router.delete("/bulk", deleteNotesBulk);
router.delete("/:id", deleteNote);

module.exports = router;
