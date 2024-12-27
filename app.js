const express = require("express");
const app = express();

// Set EJS as the template engine
app.set("view engine", "ejs");
app.set("views", "views");

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Sample Data
const people = ["Alice", "Bob", "Charlie"];

// Routes
app.get("/", (req, res) => {
  res.render("index", {
    title: "Home Page",
    message: "Welcome to My Website!",
    people: people,
    username: "JohnDoe" // Example username
  });
});

app.post("/submit", (req, res) => {
  const newName = req.body.name;
  people.push(newName); // Add new name to the array
  res.redirect("/");
});

// Start the server
app.listen(3000, () => console.log("Server is running on http://localhost:3000"));
