// var obj = {
//     name: 'Praveen S'
// }

// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);

// var personString = '{"name": "Praveen S", "age": 26}';
// var personObj = JSON.parse(personString);
// console.log(typeof personObj);
// console.log(personObj);

const fs = require("fs");

var originalNote = {
  title: "Some title",
  body: "Some body"
};

var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync("notes.json", originalNoteString);

var noteString = fs.readFileSync("notes.json");
var noteObj = JSON.parse(noteString);

console.log(typeof noteObj);
console.log(noteObj.title);
