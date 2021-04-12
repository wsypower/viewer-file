const path = require("path");
module.exports = {
  target: "web",
  mode: "production",
  entry: "./src/index.js",
  output: {
    filename: "viewer-file.js",
    path: path.join(__dirname, "dist"),
  },
};
