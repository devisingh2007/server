const mongoose = require("mongoose");
const Note = require("../models/note.model");

// @desc    Create a single note
// @route   POST /api/notes
// @access  Public
const createNote = async (req, res) => {
  try {
    const { title, content, category, isPinned } = req.body;

    if (!title || !content) {
      return res.status(400).json({
        success: false,
        message: "Title and content are required",
        data: null,
      });
    }

    const note = await Note.create({
      title,
      content,
      category,
      isPinned,
    });

    res.status(201).json({
      success: true,
      message: "Note created successfully",
      data: note,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || "Server Error",
      data: null,
    });
  }
};

// @desc    Create multiple notes
// @route   POST /api/notes/bulk
// @access  Public
const createNotesBulk = async (req, res) => {
  try {
    const { notes } = req.body;

    if (!notes || !Array.isArray(notes) || notes.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Notes array is required and cannot be empty",
        data: null,
      });
    }

    const createdNotes = await Note.insertMany(notes);

    res.status(201).json({
      success: true,
      message: `${createdNotes.length} notes created successfully`,
      data: createdNotes,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || "Server Error",
      data: null,
    });
  }
};

// @desc    Get all notes
// @route   GET /api/notes
// @access  Public
const getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find();

    res.status(200).json({
      success: true,
      message: "Notes fetched successfully",
      data: notes,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || "Server Error",
      data: null,
    });
  }
};


// @desc    Get note by ID
// @route   GET /api/notes/:id
// @access  Public
const getNoteById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid Note ID format",
        data: null,
      });
    }

    const note = await Note.findById(id);

    if (!note) {
      return res.status(404).json({
        success: false,
        message: "Note not found",
        data: null,
      });
    }

    res.status(200).json({
      success: true,
      message: "Note fetched successfully",
      data: note,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || "Server Error",
      data: null,
    });
  }
};

// @desc    Replace a note completely
// @route   PUT /api/notes/:id
// @access  Public
const replaceNote = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content, category, isPinned } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid Note ID format",
        data: null,
      });
    }

    // Every field must be provided for PUT (standard REST)
    // However, Mongoose overwrite usually needs the full object.
    // If fields are missing in req.body, they will be removed/reset if overwrite: true.
    
    if (!title || !content) {
       return res.status(400).json({
         success: false,
         message: "Title and content are required for full replacement",
         data: null,
       });
    }

    const note = await Note.findByIdAndUpdate(
      id,
      { title, content, category, isPinned },
      { new: true, overwrite: true, runValidators: true }
    );

    if (!note) {
      return res.status(404).json({
        success: false,
        message: "Note not found",
        data: null,
      });
    }

    res.status(200).json({
      success: true,
      message: "Note replaced successfully",
      data: note,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || "Server Error",
      data: null,
    });
  }
};

const updateNote = (req, res) => res.status(501).send("Not Implemented");
const deleteNote = (req, res) => res.status(501).send("Not Implemented");
const deleteNotesBulk = (req, res) => res.status(501).send("Not Implemented");

module.exports = {
  createNote,
  createNotesBulk,
  getAllNotes,
  getNoteById,
  replaceNote,
  updateNote,
  deleteNote,
  deleteNotesBulk,
};
