const path = require('path');
const serveStatic = require('serve-static');

// ... Other Strapi configurations and middleware ...

// Serve React build
app.use(serveStatic(path.join(__dirname, 'public')));
app.use('/uploads', serveStatic(path.join(__dirname, 'public/uploads')));

// ... Other middleware and routing ...

// Start the server
strapi.start();
