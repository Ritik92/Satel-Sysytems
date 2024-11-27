/**
 * Step 1: Import Required Modules
 * - We need to import the `express` module to set up our server.
 * - If you don't have Express installed, run: `npm install express` in your project directory.
 */

const express = require("express"); // Import the Express module

/**
 * Step 2: Initialize an Express Application
 * - `app` is the main object of the application that will handle HTTP requests and responses.
 */
const app = express();

/**
 * Step 3: Middleware
 * - Middleware are functions that process incoming requests before they reach the routes.
 * - We use the `express.json()` middleware to parse JSON data sent in requests.
 */
app.use(express.json());

/**
 * Step 4: Define Routes
 * - Routes determine how the application responds to client requests.
 * - A route has a URL and an HTTP method (GET, POST, etc.).
 */

/**
 * Route 1: Home Route
 * - This route responds with a simple message when the root URL (`/`) is accessed using the GET method.
 */  
//http:localhost:3000
app.get("/", (req, res) => {
  res.send("Welcome to the Node.js + Express App!"); // Sending a response back to the client
});

/**
 * Route 2: About Route
 * - This route provides some information when `/about` is accessed via GET.
 */
app.get("/about", (req, res) => {
  res.send("This is a simple Express application for teaching purposes.");
});

/**
 * Route 3: Dynamic Greeting Route
 * - This route accepts a `name` parameter in the URL.
 * - Example: Accessing `/greet/Ritik` will return `Hello, Ritik!`.
 */
//http:localhost:3000/greet/Ritik
app.get("/greet/:name", (req, res) => {
  const name = req.params.name; // Extract the `name` parameter from the URL
  res.send(`Hello, ${name}!`);
});

/**
 * Route 4: POST Request to Save Data
 * - This route accepts a POST request at `/save` to save some data.
 * - The data is sent in the request body as JSON.
 * - To test this, use tools like Postman or cURL.
 */
app.post("/save", (req, res) => {
  const { key, value } = req.body; // Extract `key` and `value` from the request body
  // Normally, the data would be saved to a database, but here we just respond back
  res.send(`Data saved: Key = ${key}, Value = ${value}`);
});

/**
 * Step 5: Start the Server
 * - The `app.listen` function starts the server and listens on a specified port.
 * - Here, we use port 3000. You can access the server at `http://localhost:3000`.
 */
app.listen(3000)

