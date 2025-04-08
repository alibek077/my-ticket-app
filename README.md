# Ticket Management System

## About the App

This **Ticket Management System** allows users to manage event tickets with CRUD operations:
- **Create**: Add new tickets with event details.
- **Read**: View a list of all tickets.
- **Update**: Edit ticket details.
- **Delete**: Remove tickets.



## Features

- **CRUD Operations**: Manage tickets.
- **Form Validation**: Ensure correct input.
- **Backend**: Powered by **Express.js**.
- **Frontend**: **Pug** templates for dynamic pages.
- **Mock Database**: Stores tickets in a **JSON** file.



## Application Dependencies

The application relies on the following dependencies:
**express**    A web framework for Node.js.
**axios** A promise-based HTTP client used for making API requests.
**express-validator** Middleware for validating user inputs.
**moment** A library for parsing, validating, and manipulating dates and times.
**tempus-dominus** A date-time picker for selecting event dates and times.
**pug** A template engine for rendering views.



ticket-management-app/
│
├── app.js                    # Main entry point for the application
├── package.json              # Project configuration and dependencies
├── package-lock.json         # Lock file for npm dependencies
├── .gitignore                # Git ignore file (e.g., excludes node_modules/)
├── public/                   # Static files (CSS, images, JS)
│   ├── css/                  # CSS files
│   ├── js/                   # JavaScript files
│   └── images/               # Images
├── routes/                   # API route files
│   ├── api/                  # API routes for ticket-related operations
│   │   └── ticket/index.js   # Ticket-related API routes
│   └── web/                  # Web routes (for UI rendering)
│       └── home/index.js     # Home page and other views
├── services/                 # Business logic layer
│   └── ticket/index.js       # Ticket-related service logic (CRUD)
├── validators/               # Validation layer
│   └── ticket/index.js       # Ticket data validation
├── controllers/              # Controller logic for ticket operations
│   └── api/ticket/index.js   # API controller for ticket CRUD operations
│   └── web/home/index.js     # Web controller for rendering views
├── views/                    # Pug templates
│   ├── home/                 # Home page templates
│   │   ├── index.pug         # Home page (ticket list)
│   │   ├── add_update.pug    # Add or update ticket form
│   └── head.pug              # Head template for meta and links
├── data/                     # Mock database
│   └── mock_db.json          # Mock database (JSON file for storing tickets)
└── README.md                 # Project documentation (this file)



## Key Directories and Files

/public: Contains client-side resources such as images, styles, and scripts.
/routes: Includes routing logic for handling API requests.
/views: Stores Pug templates for rendering views (UI).
/controllers: Contains logic for handling business actions, such as ticket management.
/services: Encapsulates the business logic for operations like adding, updating, and deleting tickets.
/data: Holds the mock database (mock_db.json) where tickets are stored.


## Main Files

app.js: The entry point of the application where Express is configured.
routes/tickets.js: Defines the routes for the ticket-related API operations (Create, Read, Update, Delete).
controllers/ticketController.js: Handles logic for ticket operations.
services/ticketService.js: Manages business logic related to ticket CRUD actions.
views/: Contains Pug templates for the frontend views (home, add/update forms).
