const fs = require("fs");
const content = new Date().toString().replace(/[:.]/g,'-');
// const path = `./files/${content}.txt`;
const path = "./files/test.txt";

try {
  // file written successfully
  fs.writeFileSync(path, content);
  // Read the same file
  fs.readFile(path, "utf8", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
    }
  });
} catch (err) {
  console.error(err);
}