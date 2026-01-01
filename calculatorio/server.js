const http = require("http");
const fs = require("fs");
const path = require("path");

const mimeTypes = {
  ".html": "text/html",
  ".css": "text/css",
  ".js": "text/javascript"
};

const server = http.createServer((req, res) => {
  let filePath = req.url === "/" ? "index.html" : req.url.slice(1);

  const fullPath = path.join(__dirname, filePath);
  const ext = path.extname(fullPath);

  const contentType = mimeTypes[ext] || "text/plain";

  fs.readFile(fullPath, (err, content) => {
    if (err) {
      res.writeHead(404);
      res.end("Not Found");
    } else {
      res.writeHead(200, { "Content-Type": contentType });
      res.end(content);
    }
  });
});

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
