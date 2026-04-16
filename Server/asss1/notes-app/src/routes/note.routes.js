const express = require("express");
const {
  createNote,
  createNotesBulk,
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

module.exports = router;
