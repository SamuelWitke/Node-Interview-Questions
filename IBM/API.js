const https = require('https');
function get(s,p) {
    https.get(`https://jsonmock.hackerrank.com/api/countries/search\?name=${s}`, (res) => {
        let json;
        res.on('data', (d) => {
            json = JSON.parse(d);
          });
          res.on('end', () =>{
            console.log(json);
          })
    })
}

get('sa',1000800)