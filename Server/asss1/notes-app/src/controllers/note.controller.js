const Note = require("../models/note.model");

const sendResponse = (res, statusCode, success, message, data = null) => {
  return res.status(statusCode).json({
    success,
    message,
    data,
  });
};

const isBlank = (value) => {
  return typeof value !== "string" || value.trim().length === 0;
};

const handleControllerError = (res, error) => {
  if (error.name === "ValidationError") {
    const message = Object.values(error.errors)[0]?.message || "Validation failed";
    return sendResponse(res, 400, false, message, null);
  }

  return sendResponse(res, 500, false, "Something went wrong", null);
};

const isInvalidObjectId = (id) => {
  return !Note.db.base.Types.ObjectId.isValid(id);
};

const createNote = async (req, res) => {
  try {
    const { title, content, category, isPinned } = req.body;

    if (isBlank(title) || isBlank(content)) {
      return sendResponse(
        res,
        400,
        false,
        "Title and content are required",
        null
      );
    }

    const note = await Note.create({ title, content, category, isPinned });

    return sendResponse(res, 201, true, "Note created successfully", note);
  } catch (error) {
    return handleControllerError(res, error);
  }
};

const createNotesBulk = async (req, res) => {
  try {
    const { notes } = req.body;

    if (!Array.isArray(notes) || notes.length === 0) {
      return sendResponse(
        res,
        400,
        false,
        "Notes array is required and cannot be empty",
        null
      );
    }

    const createdNotes = await Note.insertMany(notes);

    return sendResponse(
      res,
      201,
      true,
      `${createdNotes.length} notes created successfully`,
      createdNotes
    );
  } catch (error) {
    return handleControllerError(res, error);
  }
};

const getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find();

    return sendResponse(res, 200, true, "Notes fetched successfully", notes);
  } catch (error) {
    return handleControllerError(res, error);
  }
};

const getNoteById = async (req, res) => {
  try {
    const { id } = req.params;

    if (isInvalidObjectId(id)) {
      return sendResponse(res, 400, false, "Invalid note ID", null);
    }

    const note = await Note.findById(id);

    if (!note) {
      return sendResponse(res, 404, false, "Note not found", null);
    }

    return sendResponse(res, 200, true, "Note fetched successfully", note);
  } catch (error) {
    return handleControllerError(res, error);
  }
};

module.exports = {
  createNote,
  createNotesBulk,
  getAllNotes,
  getNoteById,
};
