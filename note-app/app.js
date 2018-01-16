console.log("Starting app.js");

const fs = require("fs");
const _ = require("lodash");
const yargs = require("yargs");

const notes = require("./notes.js");

const titleOption = {
  describe: "Title of note",
  demand: true,
  alias: "t"
};

const bodyOption = {
  describe: "Body of note",
  demand: true,
  alias: "b"
};
var argv = yargs
  .command("add", "Add a new note", {
    title: titleOption,
    body: bodyOption
  })
  .command("list", "Listing all the notes")
  .command("read", "Read a note", {
    title: titleOption
  })
  .command("remove", "Removing a note", {
    title: titleOption
  })
  .help().argv;
var command = argv._[0];
console.log("Process cmd:", process.argv);
console.log("Command: ", command);
console.log("Yargs: ", argv);

if (command === "add") {
  let note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log("Note created");
    notes.DisplayNoteMessage(note);
  } else {
    console.log("Already title exist in list");
  }
} else if (command === "list") {
  var allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length} notes`);
  allNotes.forEach(note => notes.DisplayNoteMessage(note));
} else if (command === "read") {
  var note = notes.readNote(argv.title);
  if (note) {
    console.log("Note found");
    notes.DisplayNoteMessage(note);
  } else {
    console.log("Note not found");
  }
} else if (command === "remove") {
  var noteRemoved = notes.removeNote(argv.title);
  var message = noteRemoved ? "Note was removed" : "Note not found";
  console.log(message);
} else {
  console.log("Unrecongized command");
}
