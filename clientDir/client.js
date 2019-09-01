const net = require("net");
const readline = require('readline');
const fs = require("fs");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const conn = net.createConnection({
  host: "localhost",
  port: "30300"
});

conn.setEncoding('utf8');

conn.on("connect", () => {
  console.log("connected")
})
conn.on("connect", () => {
  rl.question("Please enter file name : ", (filename) => {
    conn.write(filename);
  })
})
conn.on("data", (data) => {
  fs.writeFile("receivedFile.txt", data, (err) => {
    if (err) throw err;
  })
})



// const handleUserInput = key => {
//   if (key === '\u0003') {
//     console.log("Thanks for using me, ciao!")
//     process.exit();
//   }
//   conn.write(key);
// }

// const setupInput = function (conn) {
//   const stdin = process.stdin;
//   stdin.setRawMode(true);
//   stdin.setEncoding('utf8');
//   stdin.resume();
//   stdin.on("data", handleUserInput);
//   return stdin;
// }
// setupInput();

