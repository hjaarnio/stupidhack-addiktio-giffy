import 'babel-polyfill';
import express from 'express';
import path from 'path';

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static('static'))
const root = path.join(__dirname);

app.get('*', (req, res) => {
  res.sendFile('./static/gifsite.html', {root})
})


app.listen(PORT, () => console.log(`Listening on port ${PORT}!`))
