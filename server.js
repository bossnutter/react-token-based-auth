const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.use('/login', (req, res) => {
    res.send({
        token: 'token123'
    })
});

app.listen(8080, () => console.log('API running on 8080'))