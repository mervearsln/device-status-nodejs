const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

const userList = require("./mocks/user-mock");

// This function must place above this app.listen function
// To test this, visit http://localhost:3001/api in the browser and see the message:
app.get("/api", (req, res) => {
  res.json({ data: userList, message: "Hello from server!" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
