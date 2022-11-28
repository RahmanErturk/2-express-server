const express = require("express");
// import express from "express"; // => Wenn du ES6 Modules benutzen möchtest, must beim package.json Datei auch "type": "modules" geben, sonst gibt es Fehler.

const server = express();

server.get("/photos", (req, res) => {
  console.log("GET /photos");
  const photos = [
    "https://images.pexels.com/photos/14029041/pexels-photo-14029041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/14532811/pexels-photo-14532811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];

  //   res.json({ photos });
  res.send({ photos });
  //   res.send("test");
});

// server.post('/photos/', () => {})
// server.put('/photos/', () => {})
// server.patch('/photos/', () => {})
// server.delete('/photos/', () => {})

server.listen(4001);
