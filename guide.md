# Complete EJS
    - Folder Structure
    project/
    ├── views/
    │   ├── index.ejs
    │   ├── partials/
    │   │   ├── header.ejs
    │   │   ├── footer.ejs
    ├── public/
    │   └── styles.css
    └── server.js

    - Note:
        -   When you add "type": "module" or .mjs extension
            -   then change the require to import as EJS Syntax (ES Module)
        -   If you don't put the "type": "module" or .mjs extension
            -   then you can use as node module like require (CommonJS)


## Setting Up index.ejs
    -   Add html boiler plate
    -   Add header and footer in be included

## Setting Up header.ejs / footer.ejs
    -   Add nav menu and some headings
    -   Add copyright etc, at footer 

## Setting Up app to render the EJs
    -   Setting Up server
    -   Setting Up EJS template engine
    -   Adding routes

### Detail Explaination
1. Dynamic Variables:

    *   <%= title %>: Inserts the value of the title variable into the HTML.
    *   <%= message %>: Displays a message passed to the template.
    *   <%= username %>: Displays the username conditionally if it exists.

2. Loops:

    *   <% people.forEach(person => { %> ... <% }); %>: Iterates over the people array and displays each person in a <li> element.

3. Conditionals:

    *   <% if (people.length > 0) { %> ... <% } else { %> ... <% } %>: Renders different content based on whether the people array has any elements.

4. Includes:

    *   <%- include('partials/header.ejs', { username: username }) %>: Includes the header.ejs partial, passing username to it.

5.  Raw Include vs Escaped Content:

    *   <%- include() %>: Inserts content as-is (raw HTML).
    *   <%= %>: Escapes content for safety.
    *   <% %>: Executes JavaScript code without rendering any output.

6. Form Handling:

    *   <form action="/submit" method="POST">: Illustrates how to create a simple form for user input.

### Key Concepts for Beginners
1. EJS Syntax:

    -   <%= %>: Renders and escapes data.
    -   <%- %>: Renders raw data (e.g., includes).
    -   <% %>: Executes JavaScript.

2. Passing Data: Data is passed to the template via the res.render() method in the Express route.

3. Partial Templates: Helps avoid repeating common elements (e.g., headers, footers) across multiple pages.

4. Form Handling: Demonstrates how to handle user input and update data dynamically.