# Complete EJS
    project/
├── views/
│   ├── index.ejs       # Homepage
│   ├── about.ejs       # About page
│   ├── contact.ejs     # Contact page
│   ├── layout.ejs      # Main layout file
├── public/
│   └── styles.css      # CSS for styling
└── app.js              # Main server file

    - Note:
        -   When you add "type": "module" or .mjs extension
            -   then change the require to import as EJS Syntax (ES Module)
        -   If you don't put the "type": "module" or .mjs extension
            -   then you can use as node module like require (CommonJS)

## Initialize the Project
    -   npm init -y
    -   npm install express express-ejs-layouts body-parser

## Configure app.js
    -   Set up server
    -   Set up middleware
    -   Set up EJS & Layouts
    -   Set up routes

    -   Options
        -   ES Module (import/export)
            -   Add "type": "module"
        -   CommonJS (require/module.exports)

## Create views/
    -   layout.ejs
    -   index.ejs
    -   about.ejs
    -   contact.ejs

## Create public/
    -   styles.css

## Run the server
    -   node app.js OR npm run dev
    -   OR 
        -   npm install -g nodemon
        -   nodemon app.js

## Open your browser and navigate to:
	•	http://localhost:3000/
	•	http://localhost:3000/about
	•	http://localhost:3000/contact