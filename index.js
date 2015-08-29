var express = require('express'),
  app = express(),
  cors = require('cors'),
  bodyParser = require('body-parser'),
  xml2js = require('xml2js').parseString,
  port = 9001,
  request = require('request'),
  key = 'AvRM2Oj3HaHd0lch5lWwQ',
  secret = 'hdGhe4NC04S8vRTtaYj1D2T8zdZeUWxRjwMiuPsjHA',
	param = "?key=" + key + "&secret=" + secret;


app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + '/public'));

app.get('/api/goodreads/search', function(req, res){
  request({
    method: 'GET',
    url: 'https://www.goodreads.com/search/index.xml' + param + '&q=' + req.query.search,
  }, function(err, response, body){
    if(err) return res.status(500).json(err);
    xml2js(body, function(err, result){
      if(err) return res.status(500).json(err);
      return res.json(result.GoodreadsResponse.search[0].results[0].work);
    })
  });
});

app.get('/api/goodreads/book', function(req, res){
  request({
    method: 'GET',
    url: 'https://www.goodreads.com/book/isbn/' + req.query.isbn,// + param,
  }, function(err, response, body){
    if(err) return res.status(500).json(err);
    xml2js(body, function(err, result){
      if(err) return res.status(500).json(err);
      return res.json(result.GoodreadsResponse.search[0].results[0].work);
    })
  });
});

app.listen(port, function(){
  console.log('listening on port:', port);
});
