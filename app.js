const express = require('express');
const https = require('https');
const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/search', (req, res) => {
  const query = req.query.q;
  const folder = 'b1ggq2afdfjmv3otraq2';
  const token = 'y0__xCu45Y2GMHdEyDijYn_FjDHzOyZCNgSE9tGReQjGK4kyOHZdaDXZjlw';
  
  const url = `https://searchapi.api.cloud.yandex.net/v2/web/searchAsync?folderId=${folder}&query.text=${encodeURIComponent(query)}&query.maxPassages=3`;
  
  const options = {
    headers: { 'Authorization': `Bearer ${token}` }
  };
  
  https.get(url, options, (apiRes) => {
    let data = '';
    apiRes.on('data', chunk => data += chunk);
    apiRes.on('end', () => res.json(JSON.parse(data)));
  }).on('error', (e) => res.status(500).json({error: e.message}));
});

app.listen(10000, () => console.log('Running'));
