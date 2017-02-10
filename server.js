var http = require('http');

//require node's url module to parse the url's querystring
var url = require('url');

//create he server to run the page
http.createServer(function(req, res) {
    console.log();
    //get the querystring method and parse the x and y values as floats
    var qs = url.parse(req.url, true).query;
    var method = qs.method;
    var x = parseFloat(qs.x);
    var y = parseFloat(qs.y);

    //calculate total of x and y, based on method
    if (method === 'add'){
        var total = x + y;
    }else if (method === 'subtract'){
        var total = x - y;
    }else if (method === 'multiply'){
        var total = x * y;
    }else if (method === 'divide'){
        var total = x / y;
    }else{
        res.write('Invalid method value. Please re-type.');
    }

    //output values
    res.write('<h1>Javascript Calculator</h1>'
        + x + ' ' + method + ' ' + y
        + '<br \>Equals:' + total);
    res.end();


}).listen(3000);