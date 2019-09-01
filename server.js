const net = require("net");
const fs = require("fs");

const server = net.createServer();
server.listen(30300, () => {
  console.log("Listening");
})

server.on("connection", (client) => {
  client.on("data", data => {
    client.setEncoding('utf8');
    console.log(data.toString())
    filePath = data.toString();
    fs.readFile(`./${filePath}`, (err, data) => {
      if (err) throw err;
      console.log(data);
      client.write(data);
    })
  })
})

