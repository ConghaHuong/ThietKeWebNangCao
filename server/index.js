const express = require('express');
const { testFunc, testFunc3, divide } = require('./testFunc');

const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


app.get('/api/get', (req, res) => {
    res.json({
        message: 'This is a GET request!'
    });
});
app.post('/api/post', (req, res) => {
    const data = req.body;

    res.json({
        message: 'This is a POST request!',
        data: data
    });
});