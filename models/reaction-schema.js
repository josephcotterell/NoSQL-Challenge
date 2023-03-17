const { Schema, model } = require("mongoose");

// Schema to create Student model
const studentSchema = new Schema(
  {
    reactionID: {
      type: Schema.Types.ObjectId,
      default: 5,
    },
    last: {
      type: String,
      required: true,
      max_length: 50,
    },
    github: {
      type: String,
      required: true,
      max_length: 50,
    },
    assignments: [assignmentSchema],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Student = model("student", studentSchema);

module.exports = Student;
