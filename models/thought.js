const { Schema, model } = require("mongoose");


// Schema to create Student model
const studentSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      max_length: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      getters: true,
    },
    github: {
      type: String,
      required: true,
      max_length: 50,
    },
    username: {
    type: String,
    required: true,
    }

    reactions: {
    

    }
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Student = model("student", studentSchema);

module.exports = Student;


model.exports = thought;
