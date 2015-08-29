var app = require('express'),
  cors = require('cors'),
  bodyParser = require('body-parser'),
  port = 9001,
  request = require('request'),
  key = 'AvRM2Oj3HaHd0lch5lWwQ',
  secret = 'hdGhe4NC04S8vRTtaYj1D2T8zdZeUWxRjwMiuPsjHA',
	param = "?key=" + key + "&secret=" + secret;


app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + '/public'));

app.get('/api/goodreads', function(req, res){
  request({
    method: 'GET',
    url: 'https://www.goodreads.com/search/index.xml' + param + '&q=' + req.search,
  }, function(err, response, body){
    if(err) return res.status(500).json(err);
    return res.json(body);
  });
});

app.listen(port, function(){
  console.log('listening on port:', port);
});
