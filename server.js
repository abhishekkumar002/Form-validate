const express = require('express');
const fs = require('fs');
const path = require('path');
const connect = require('./modals/database')

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'form.html'));
});

app.post('/submit_form', (req, res) => {
  const { fname, lname, age, contact } = req.body;

  const formData = {
    firstName: fname,
    lastName: lname,
    age: parseInt(age),
    contact: contact
  };

  let jsonData = [];
  try {
    const data = fs.readFileSync('data.json', 'utf8');
    jsonData = JSON.parse(data);
  } catch (err) {
    console.error("Error reading JSON file:", err);
  }

  jsonData.push(formData);

  fs.writeFile('data.json', JSON.stringify(jsonData), (err) => {
    if (err) {
      console.error("Error writing to JSON file:", err);
      res.status(500).send('Internal Server Error');
    } else {
      res.send('Form data submitted successfully!');
    }
  });
});

app.listen(PORT, () => {
  connect();
  console.log(`Server is running on http://localhost:${PORT}`);
});