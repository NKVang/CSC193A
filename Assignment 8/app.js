'use strict';

const express = require('express');
const app = express();

// define endpoint for exercise 1 here
app.get('/math/circle/:r', function (req, res) {
    
    if (isNaN(req.params.r))
    {
        res.type('text').status(400).send('Error: Radius is not a number');
        return;
    }

    let radius = req.params.r;
    let area = Math.PI * radius * radius;
    let circumference = 2 * Math.PI * radius;

    res.status(200).json({
        area: area,
        circumference: circumference
    });
  });

  
// define endpoint for exercise 2 here
app.get('/hello/name', function (req, res) {
    

    let first = req.query['first'];
    let last = req.query['last'];


    if (first === undefined && last === undefined)
    {
        res.type('text').status(400).send('Missing Required GET parameters: first, last');
        return;
    }
    else if (first === undefined && last !== undefined)
    {
        res.type('text').status(400).send('Missing Required GET parameters: first');
        return;
    }
    else if (first !== undefined && last === undefined)
    {
            res.type('text').status(400).send('Missing Required GET parameters: last');
            return;
    }

    res.type('text').status(200).send('Hello ' + first + ' ' + last);
  });


const PORT = process.env.PORT || 8000;
app.listen(PORT);