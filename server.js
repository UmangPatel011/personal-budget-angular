const express = require('express');
const app= express();
const port = 3000;

app.use('/', express.static('public'));

const budget = {
    myBudget: [
    {
        title: 'Eat out',
        budget: 30
    },
    {
        title: 'Rent',
        budget: 375
    },
    {
        title: 'Groceries',
        budget: 150
    },
    {
        title: 'Water Bill',
        budget: 50
    },
    {
        title: 'Gas Bill',
        budget: 40
    },
    {
        title: 'Electric Bill',
        budget: 85
    },
    {
        title: 'paint Bill',
        budget: 60
    },
    ]
};

app.get('/hello', (req, res) => {
    res.send('Hello World!')
});

app.get('/budget', (req, res) => {
    res.json(budget)
});

app.listen(port, () => {
    console.log(`Serving at http://localhost:${port}`)
  });