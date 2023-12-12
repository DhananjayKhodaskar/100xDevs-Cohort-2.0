const fs = require("node:fs");

fs.readFile("../files/01-file-cleaner.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  var normalizedParagraph = data.replace(/\s+/g, " ").trim();
  fs.writeFile("../files/cleaned-file.txt", normalizedParagraph, (err) => {
    if (err) throw err;
  });
});
