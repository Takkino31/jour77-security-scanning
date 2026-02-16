const express = require('express');
const axios = require('axios');
const _ = require('lodash');

const app = express();
const port = process.env.PORT || 3000;

// Utilisation de lodash avec version vulnérable
app.get('/merge', (req, res) => {
  const object1 = { a: 1, b: 2 };
  const object2 = { c: 3, d: 4 };
  
  // Fonction potentiellement vulnérable dans lodash 4.17.15
  const result = _.merge(object1, object2);
  
  res.json({ merged: result });
});

// Utilisation de axios avec version vulnérable
app.get('/fetch', async (req, res) => {
  try {
    const response = await axios.get('https://api.github.com');
    res.json({ 
      status: response.status,
      data: 'Fetched successfully' 
    });
  } catch (error) {
    res.status(500).json({ error: 'Fetch failed' });
  }
});

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'healthy' });
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`App listening on port ${port}`);
  });
}

module.exports = app;
