const express = require('express');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Importing Routes
let projectsRoute = require('./Routes/projects');
app.use('/api/projects', projectsRoute);

// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
