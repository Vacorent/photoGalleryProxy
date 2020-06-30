const express = require('express');
const axios = require('axios');
const { createProxyMiddleware } = require('http-proxy-middleware');
var cors = require('cors');

const app = express();

app.use(express.static(`${__dirname}/../client/dist`));

const port = 3000;

app.use(cors());

app.use('/reservation/*', createProxyMiddleware({ target: `http://localhost:3004`, changeOrigin: true }));
app.use('/api/photos', createProxyMiddleware({ target: `http://localhost:3002`, changeOrigin: true }));
app.use('/api/reviews', createProxyMiddleware({ target: `http://localhost:3002`, changeOrigin: true }));


app.listen(port, () => {
  console.log(`listening on port ${port}`);
});