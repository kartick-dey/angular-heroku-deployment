const express = require('express');
const path = require('path');

const app = express();
app.use(express.static(__dirname + '/dist/user-registration-ui'));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname + '/dist/user-registration-ui/index.html'));
});

app.listen(8080);