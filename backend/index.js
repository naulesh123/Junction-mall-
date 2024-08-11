const express = require('express');
const path = require('path');
const cors = require('cors');


const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//mongodb+srv://nikhil2:nikhil2@atlascluster.pz0oc.mongodb.net/


app.get('/',(req,res)=>{




res.send('Backend is running')

})






// Error handling middleware
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({ error: err.message });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

module.exports = app;


