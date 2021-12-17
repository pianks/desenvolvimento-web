var express = require('express');
var app = express();
var cors = require('cors');
var fs = require('fs');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
app.use(cors());
app.get('/get_stats',function(req,res){
    fs.readFile(_dirname + "/" + "users.json", 'utf8', function (err,data){
        res.end(data);
    });
})
var server = app.listen(8081,function(){
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s",host,port)
})
var AlunoRoute = require('./routes/AlunoRoutes');



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())

app.use('/alunos', AlunoRoute);

module.exports = app;
