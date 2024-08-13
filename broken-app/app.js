const express = require('express');
const axios = require('axios');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

app.post('/', async function(req, res, next) {
  try {
    let results = await Promise.all(
      req.body.developers.map(async d => {
        return await axios.get(`https://api.github.com/users/${d}`);
      })
    );

    let out = results.map(r => ({
      name: r.data.name,
      bio: r.data.bio
    }));

    return res.json(out);
  } catch (err) {
    return next(err);
  }
});

app.listen(3000, '10.0.4.23', () => {
  console.log('Server running on http://10.0.4.23:3000');
});

