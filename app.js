import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import expressLayouts from "express-ejs-layouts";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(expressLayouts);
app.set("layout", "layout");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

// In-memory item storage
let items = [];

// Routes
app.get("/", (req, res) => {
  res.render("index", { title: "Home", items });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About Us" });
});

app.get("/contact", (req, res) => {
  res.render("contact", { title: "Contact Us" });
});

// Create: Add an item
app.post("/add", (req, res) => {
  const { item } = req.body;
  if (item) {
    // items.push({ name: item, createdAt: new Date() });
    items.push({ name: item, createdAt: new Date() || null });
  }
  res.redirect("/");
});

// Read: Find items (Case-insensitive search)
app.post("/find", (req, res) => {
  const { query } = req.body;
  const results = items.filter(item =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );
  res.render("index", { title: "Search Results", items: results });
});

// Update: Edit an item
app.post("/update", (req, res) => {
  const { index, updatedItem } = req.body;
  if (index !== undefined && updatedItem) {
    items[index].name = updatedItem;
  }
  res.redirect("/");
});

// Delete: Remove an item
app.post("/delete", (req, res) => {
  const { index } = req.body;
  if (index !== undefined) {
    items.splice(index, 1);
  }
  res.redirect("/");
});

// Sort: Sort items alphabetically
app.post("/sort", (req, res) => {
  items.sort((a, b) => a.name.localeCompare(b.name));
  res.redirect("/");
});

app.listen(3000, () => console.log("Server running at http://localhost:3000"));