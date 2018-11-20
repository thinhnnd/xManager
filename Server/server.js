const app = require('./app');
const spdy = require('spdy');
const https = require('https');
// spdy.createServer(app.listen(80, () => {
//     console.log('Server is running on port 80');
// }))

https.Server(app.listen(80, () => {
    console.log('Server is running on port 80');
}))