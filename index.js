const fs = require("fs").promises;

console.log("test");

fs.readdir(__dirname).then((files) => {
  console.log(files);
});
