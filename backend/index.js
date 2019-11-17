var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    bodyParser = require('body-parser');
    
var avatarRoutes = require("./routes/avatars");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api/avatars', avatarRoutes);

app.listen(port, function(){
    console.log("APP IS RUNNING ON PORT " + process.env.PORT);
});
  